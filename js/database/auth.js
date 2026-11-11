import { supabase } from './supabase.js';
export async function signIn(email,password){const {data,error}=await supabase.auth.signInWithPassword({email,password});if(error)throw error;return data}
export async function signOut(){const {error}=await supabase.auth.signOut();if(error)throw error}
export async function getProfile(userId){const {data,error}=await supabase.from('profiles').select('*').eq('id',userId).single();if(error)throw error;return data}
export async function getCurrentSession(){const {data,error}=await supabase.auth.getSession();if(error)throw error;return data.session}
