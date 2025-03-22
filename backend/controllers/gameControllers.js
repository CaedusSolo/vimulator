import supabase from '../config/supabase.js'

const saveScore = async (req, res) => {
  const { score } = req.body

  const { data: { user } } = await supabase.auth.getUser()

  const { error } = await supabase.from('scores').insert({
    user_id: user.id,
    score: score
  })

  if (!error) {
    return res.status(201).json({ message: "Saved score successfully" })
  }

  else {
    return res.status(500).json({ error: "Failed to save score" })
  }
}

export { saveScore }