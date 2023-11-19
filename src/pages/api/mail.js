import nodemailer from 'nodemailer'

const email = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

const handler = async (req, res) => {
	const transporter = nodemailer.createTransport({
		services: 'gmail',
		host: 'smtp.gmail.com',
		port: 25,
		secure: false,
		auth: {
			user: email,
			pass: pass
		},
		tls: {
			rejectUnauthorized: false
		}
	})
	const mailOptions = {
		from: email,
		to: email,
		subject: 'ЗАЯВКА С САЙТА GreetRoute',
		text: 'Test',
		html: `
	<table width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td>
                <table style='width: 100%'>
                    <tr>
                        <td>
                            <h1>Новая заявка с сайта syncup.kz</h1>
                            <table style='max-width: 600px; width: 100%'>
                                <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        Имя
                                        
                                    </td>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${req.body.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        Почта/телефон
                                    </td>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${req.body.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        Сообщение
                                    </td>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${req.body.message}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
	`
	}
	await transporter.sendMail(mailOptions)
	res.status(200).json({ name: 'good' })
}

export default handler
