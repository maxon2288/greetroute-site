'use client'

import Link from 'next/link'
import Footer from '@/app/components/ui/footer'
import Image from 'next/image'

export default function BottomOfPage() {
	async function handleOnSubmit(e) {
		e.preventDefault()
		const formData = {}
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return
			formData[field.name] = field.value
		})
		console.log(formData)
		fetch('/api/mail', {
			// fetch('https://sync-up-site-yrim.vercel.app/api/mail', {
			method: 'POST',
			body: JSON.stringify(formData)
		}).then(function () {
			document.querySelectorAll('form input').forEach((i) => {
				i.value = ''
			})
		})
	}

	return (
		<>
			<div className='form' id='form'>
				<div className='wrapper'>
					<div>
						<div className='form-top'>
							<h2 className='wow fadeInUp'>Начнем сотрудничать?</h2>
							<p className='wow fadeInUp' data-wow-delay='0.2s'>
								Заполните форму и наш специалист свяжется с вами <span>в течении 20 минут</span>
							</p>
						</div>
						<div className='form-content'>
							<div className='form-left'>
								<form method='post' onSubmit={handleOnSubmit}>
									<div className='form-item required  wow fadeInUp' data-wow-delay='0.3s'>
										<div className='form-title'>Как к вам обращаться?</div>
										<input minLength={4} type='text' name='name' required />
									</div>
									<div className='form-item required wow fadeInUp' data-wow-delay='0.4s'>
										<div className='form-title'>Ссылка на соц сеть, телефон мессенджера либо E-mail</div>
										<input minLength={5} type='text' name='email' required />
									</div>
									<div className='form-item wow fadeInUp' data-wow-delay='0.5s'>
										<div className='form-title'>Сообщение для нас</div>
										<input type='text' name='message' />
									</div>
									<div className='form-item wow fadeInUp' data-wow-delay='0.6s'>
										<button>Отправить</button>
									</div>
									<p className=' wow fadeInUp' data-wow-delay='0.7s'>
										Отправляя эту форму, я подтверждаю, что прочитал и понял <Link href='/privacy-policy'>положение о конфиденциальности GreetRoute</Link> .
									</p>
								</form>
							</div>
							<div className='form-right'>
								<div className='soc'>
									<a href='https://wa.me/+77776740559' className=' wow fadeInUp' target='_blank' data-wow-delay='0.3s'>
										<Image width='32' height='32' src='/img/svg/soc-1.svg' alt='' />
										<span>Наш WhatsApp</span>
									</a>
									<a href='https://t.me/greetroute' className='wow fadeInUp' target='_blank' data-wow-delay='0.4s'>
										<Image width='32' height='32' src='/img/svg/soc-2.svg' alt='' />
										<span>Наш Telegram</span>
									</a>
									<a href='https://instagram.com/greetroute' className='wow fadeInUp' target='_blank' data-wow-delay='0.5s'>
										<Image width='32' height='32' src='/img/svg/soc-3.svg' alt='' />
										<span>Наш Instagram</span>
									</a>
									<a href='mailto:greetroute@gmail.com' className='wow fadeInUp' target='_blank' data-wow-delay='0.6s'>
										<Image width='32' height='32' src='/img/svg/soc-4.svg' alt='' />
										<span>greetroute@gmail.com</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
