import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

export async function POST(req: NextRequest) {
  const { blog_post_id } = await req.json();

  if (!blog_post_id) {
    return NextResponse.json({ success: false, message: 'Missing required field: blog_post_id' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('blog_post_id', blog_post_id);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to retrieve comments', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Comments retrieved successfully', data }, { status: 200 });
}