import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project values
// Get them from: https://supabase.com → your project → Settings → API
const SUPABASE_URL = 'https://aofehlqguabzlaqvjtjg.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZmVobHFndWFiemxhcXZqdGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzMxMTAsImV4cCI6MjA4ODkwOTExMH0.bSI-pqGVl9GKvOhxDHt1dB76cNRIYzp-2pDQhZCvbtg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
