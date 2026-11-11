import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Gunakan URL dan publishable key dari Supabase Project Settings > API.
export const SUPABASE_URL = 'https://zpmzolhigasjqnvazgwp.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_gmNeD72lhVlphIH39MKjFw_BXMnUl4d';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
