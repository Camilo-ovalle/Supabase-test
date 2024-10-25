import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fefeacwqmchziegvucwc.supabase.co';
const supabaseKey = process.env.APIKEY;

export const conn = createClient(supabaseUrl, supabaseKey);
