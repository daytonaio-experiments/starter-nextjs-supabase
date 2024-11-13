import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';
import { Comment } from '../../../utils/types';

export async function POST(req: NextRequest) {
  const { blog_post_id, user_id, content, created_at }: Comment = await req.json();

  if (!blog_post_id || !user_id || !content || !created_at) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('comments')
    .insert([{ blog_post_id, user_id, content, created_at }]);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to add comment', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Comment added successfully', data }, { status: 200 });
}
