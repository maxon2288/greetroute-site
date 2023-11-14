const mail = require('@sendgrid/mail')

export default async (req, res) => {
	mail.setApiKey('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')
	const body = JSON.parse(req.body)
	const message = `
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
                                        ${body.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        Почта/телефон
                                    </td>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${body.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        Сообщение
                                    </td>
                                    <td style='border-bottom: 1px solid #cccccc; padding: 16px 0;'>
                                        ${body.message}
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
	const data = {
		// to: 'info@greetroute.kz',
		to: 'maxswim228@gmail.com',
		// from: 'greetroute.access@gmail.com',
		from: 'syncupweb@gmail.com',
		subject: 'ЗАЯВКА С САЙТА GreetRoute',
		text: message,
		html: message.replace(/\r\n/g, '<br />')
	}
	await mail.send(data).then(() => {
		res.status(200).json({ status: 'Ok' })
	})
}
