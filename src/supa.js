import { createClient } from "@supabase/supabase-js";

const supaUrl = process.env.SUPA_URL;
const supaKey = process.env.SUPA_KEY;

const supa = createClient(supaUrl, supaKey);

export default supa;