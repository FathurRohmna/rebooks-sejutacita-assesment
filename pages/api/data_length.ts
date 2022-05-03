import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get(async (req, res) => {
  const { categoryId } = req.query

  try {
    const request = await fetch(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}`)

    const responsejson = await request.json()

    res.status(200).json({
      length: responsejson.length,
      books: responsejson
    })
  } catch (error) {
    res.status(400).json({ 'error_msg': error.message })
  }
})

export default handler
