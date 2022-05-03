import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get(async (req, res) => {
  const { categoryId, page, size = 5 } = req.query

  console.log({ categoryId, page, size });

  try {
    const request = await fetch(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`)

    const response = await request.json()

    console.log(response);

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ 'error_msg': error.message })
  }
})

export default handler
