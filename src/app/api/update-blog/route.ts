import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';
import { BlogPost } from '../../../utils/types';

export async function PATCH(req: NextRequest) {
  const { id, title, content }: BlogPost = await req.json();

  if (!id || !title || !content) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .update({ title, content })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to update blog post', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Blog post updated successfully', data }, { status: 200 });
}