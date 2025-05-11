import type { NextApiRequest, NextApiResponse } from 'next';
import { sendCustomerEmail } from '@/lib/emailUtiil';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = JSON.parse(req.body);
    console.log(req.body)
    if (!name || !email  || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        await sendCustomerEmail({ name, email,message });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
