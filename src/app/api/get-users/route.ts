import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

export async function GET() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to retrieve users', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Users retrieved successfully', data }, { status: 200 });
}