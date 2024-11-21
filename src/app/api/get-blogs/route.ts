import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

export async function GET() {
  const { data, error } = await supabase.from('blog_posts').select('*');

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to retrieve blog posts', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Blog posts retrieved successfully', data }, { status: 200 });
}