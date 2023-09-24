require("dotenv").config();

module.exports = {
  urlSupabase: process.env.SUPABASE_URL,
  keySupabase: process.env.SUPABASE_API_KEY,
  keyService: process.env.SUPABASE_SERVICE_KEY,
};
