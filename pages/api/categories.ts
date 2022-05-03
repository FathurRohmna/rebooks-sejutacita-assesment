import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get(async (req, res) => {
  try {
    const request = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')

    const response = await request.json()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ 'error_msg': error.message })
  }
})

export default handler
