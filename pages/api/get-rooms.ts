import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  try {
    const rooms = await query(`
      SELECT id,room,time,username
      FROM rooms
    `)

    return res.json(rooms)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
