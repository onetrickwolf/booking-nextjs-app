import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

import { log } from './jechain-singleton';

const handler: NextApiHandler = async (req, res) => {
  const { id, username } = req.body
  try {
    if (!id || !username) {
      return res
        .status(400)
        .json({ message: '`id` and `username` are all required' })
    }

    const results = await query(
      `
      UPDATE rooms
      SET username = ?
      WHERE id = ?
      `,
      [username, id]
    )

    log({ action: 'booked', username, id });

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
