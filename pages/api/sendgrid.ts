// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from "@sendgrid/mail"

type Data = {
  name: string
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await sendgrid.send({
      to: 'imyoonkim@gmail.com', 
      from: 'yoonthecoder@gmail.com', 
      subject: req.body.subject,
      text: req.body.message,
      html: '<div>hello</div>'
    })
    console.log(res)
  } catch(err) {
    console.log(err)
  }
  
}
