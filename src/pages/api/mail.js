import { Resend } from 'resend'

const resend = new Resend('re_6GYMi8hH_HRrocniu1HViBxNLAnLSEUa4')

resend.emails.send({
	from: 'onboarding@resend.dev',
	to: 'greetroute@gmail.com',
	subject: 'Hello World',
	html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
})
