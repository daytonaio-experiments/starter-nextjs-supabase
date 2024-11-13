import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';
import { User } from '../../../utils/types';

export async function POST(req: NextRequest) {
  const { username, email, password, created_at }: User = await req.json();

  if (!username || !email || !password || !created_at) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('users')
    .insert([{ username, email, password, created_at }]);

  if (error) {
    return NextResponse.json({ success: false, message: 'Failed to create user', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'User created successfully', data }, { status: 200 });
}
