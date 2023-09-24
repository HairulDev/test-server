

const vars = require("#config/vars");
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = vars.urlSupabase;
const supabaseKey = vars.keySupabase;
const supabaseServiceKey = vars.keyService;
const supabase = createClient(supabaseUrl, supabaseKey,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false
        }
    })

const supabaseAuthSchema = createClient(supabaseUrl, supabaseKey,
    {
        schema: "auth",
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false
        }
    })


module.exports = {
    supabase,
    supabaseAuthSchema
};
