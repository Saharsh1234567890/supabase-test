import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oxtammunhqirnbxgopfe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dGFtbXVuaHFpcm5ieGdvcGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwOTQ4MzYsImV4cCI6MjAzMTY3MDgzNn0.9HjVG-fGTD1jbrfOlGg7kOAPuych6MV8-p4GJqWYQNM'
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
