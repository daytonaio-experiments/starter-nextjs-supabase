import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';
import { BlogPost } from '../../../utils/types';

export async function POST(req: NextRequest) {
  const { user_id, title, content, created_at }: BlogPost = await req.json();

  if (!user_id || !title || !content || !created_at) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert([{ user_id, title, content, created_at }]);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to create blog post', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Blog post created successfully', data }, { status: 200 });
}