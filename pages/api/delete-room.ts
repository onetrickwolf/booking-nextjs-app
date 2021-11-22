import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.body
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

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
