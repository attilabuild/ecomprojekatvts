import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json();

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const { data: course, error } = await supabaseAdmin
      .from('courses')
      .select('*')
      .eq('title', title)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ course: null });
      }
      
      console.error('Error fetching course by title:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ course });
  } catch (error: any) {
    console.error('Error in get-by-title route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

