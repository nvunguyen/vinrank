import { createClient } from '@supabase/supabase-js'
import { Database } from 'lib/database.types'

export const supabase = createClient<Database>('https://sqabkssjecvxtrztjufg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxYWJrc3NqZWN2eHRyenRqdWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4MjYwNzYsImV4cCI6MTk4OTQwMjA3Nn0.xafbVZVKsoQysGu7V5qHGchjWMLoNYoDFzRWJawu9Wg')