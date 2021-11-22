import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { username } = req.query
  try {
    const unbooked = await query(`
      SELECT id,room,time
      FROM rooms
      WHERE username IS NULL
    `)

    const booked = await query(`
        SELECT id,username,room,time
        FROM rooms
        WHERE username IS NOT NULL AND NOT username = ?
    `,
      username
    )

    const myRooms = await query(
      `
          SELECT id,room,time
          FROM rooms 
          WHERE username = ?
      `,
      username
    )

    return res.json({unbooked, myRooms, booked})
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
