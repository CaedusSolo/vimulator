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

const getHighScore = async (req, res) => {

  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('scores')
    .select('score')
    .eq('user_id', user.id)
    .order('score', { ascending: false })
    .limit(1)

  if (error) {
    return res.status(500).json({error: "Couldn't fetch high score"})
  }

  if (data && data.length > 0) {
    console.log(data[0].score)
    return res.status(200).json(data[0].score)
  } 
}

export { saveScore, getHighScore }