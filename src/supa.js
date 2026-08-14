import { createClient } from "@supabase/supabase-js";

const supa = createClient(process.env.REACT_APP_SUPA_URL, process.env.REACT_APP_SUPA_KEY);

export { supa };