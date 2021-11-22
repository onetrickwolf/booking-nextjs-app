import { NextApiHandler } from 'next'

import { view } from './jechain-singleton';

const handler: NextApiHandler = async (req, res) => {
  try {
    return res.json(view());
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
