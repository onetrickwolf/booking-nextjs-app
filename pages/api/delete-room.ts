import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

import { log } from './jechain-singleton';

const handler: NextApiHandler = async (req, res) => {
  const { id, username } = req.body
  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: '`id` is required' })
    }

    const results = await query(
      `
      UPDATE rooms
      SET username = NULL
      WHERE id = ?
      `,
      [id]
    )

    log({ action: 'deleted', username, id });

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
