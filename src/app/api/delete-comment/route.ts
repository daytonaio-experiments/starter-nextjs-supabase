import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ success: false, message: 'Missing required field: id' }, { status: 400 });
  }

  const { data, error } = await supabase.from('comments').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete comment', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Comment deleted successfully', data }, { status: 200 });
}