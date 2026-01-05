import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { title, description, price } = await request.json();

    if (!title || !description || price === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data: existingCourse, error: fetchError } = await supabaseAdmin
      .from('courses')
      .select('*')
      .eq('title', title)
      .single();

    if (existingCourse && !fetchError) {
      return NextResponse.json({ course: existingCourse });
    }

    const isFree = price.toLowerCase() === "free";
    const priceNum = isFree ? 0 : parseFloat(price) || 0;

    const { data: newCourse, error: createError } = await supabaseAdmin
      .from('courses')
      .insert({
        title: title,
        description: description,
        price: priceNum,
        is_free: isFree,
      })
      .select()
      .single();

    if (createError) {
      if (createError.code === '23505') {
        const { data: course } = await supabaseAdmin
          .from('courses')
          .select('*')
          .eq('title', title)
          .single();
        
        if (course) {
          return NextResponse.json({ course });
        }
      }
      
      console.error('Error creating course:', createError);
      return NextResponse.json(
        { error: createError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ course: newCourse });
  } catch (error: any) {
    console.error('Error in get-or-create course route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

