import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ success: false, message: 'Missing required field: id' }, { status: 400 });
  }

  const { data, error } = await supabase.from('blog_posts').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete blog post', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Blog post deleted successfully', data }, { status: 200 });
}