import { supabase } from './client';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  is_free: boolean;
  created_at: string;
  created_by?: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: 'user' | 'admin';
  created_at: string;
}

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }

  return data || [];
}

export async function getCourseById(id: string): Promise<Course | null> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching course:', error);
    return null;
  }

  return data;
}

export async function getCourseByTitle(title: string): Promise<Course | null> {
  try {
    const response = await fetch('/api/courses/get-by-title', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error in get-by-title course API:', errorData);
      return null;
    }

    const { course } = await response.json();
    return course;
  } catch (error) {
    console.error('Error calling get-by-title course API:', error);
    return null;
  }
}

export async function getOrCreateCourse(
  id: string,
  title: string,
  description: string,
  price: string
): Promise<Course | null> {
  try {
    const response = await fetch('/api/courses/get-or-create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error in get-or-create course API:', errorData);
      return null;
    }

    const { course } = await response.json();
    return course;
  } catch (error) {
    console.error('Error calling get-or-create course API:', error);
    return null;
  }
}

export async function getEnrollments(userId: string): Promise<Enrollment[]> {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('user_id', userId)
    .order('enrolled_at', { ascending: false });

  if (error) {
    console.error('Error fetching enrollments:', error);
    return [];
  }

  return data || [];
}

export async function isEnrolled(userId: string, courseId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .single();

  if (error) {
    return false;
  }

  return !!data;
}

export async function enrollInCourse(userId: string, courseId: string): Promise<boolean> {
  const { error } = await supabase
    .from('enrollments')
    .insert({
      user_id: userId,
      course_id: courseId,
    });

  if (error) {
    console.error('Error enrolling in course:', error);
    return false;
  }

  return true;
}

export async function getEnrolledCourses(userId: string): Promise<Course[]> {
  const { data, error } = await supabase
    .from('enrollments')
    .select(`
      course_id,
      courses (*)
    `)
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching enrolled courses:', error);
    return [];
  }

  return (data || []).map((item: any) => item.courses).filter(Boolean);
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

export async function createProfile(userId: string, email: string, fullName: string): Promise<boolean> {
  const { error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      email,
      full_name: fullName,
      role: 'user',
    });

  if (error) {
    console.error('Error creating profile:', error);
    return false;
  }

  return true;
}

