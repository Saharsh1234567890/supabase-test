import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-supabase-url.supabase.co'
const supabaseKey = 'your-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

async function insertQuestion() {
  const { data, error } = await supabase
    .from('questions')
    .insert([
      { 
        id: 1, 
        question_text: 'What is the capital of France?', 
        created_at: '2024-05-19T12:00:00', 
        user_id: 123 
      }
    ])

  if (error) {
    console.error(error)
  } else {
    console.log('Insert successful', data)
  }
}

insertQuestion()
