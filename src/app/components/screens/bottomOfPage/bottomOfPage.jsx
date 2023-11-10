'use client'

import Link from 'next/link'
import Footer from '@/app/components/ui/footer'

export default function BottomOfPage() {
	return (
		<>
			<div className='form'>
				<div className='wrapper'>
					<div>
						<div className='form-top'>
							<h2 className='wow fadeInUp'>Остались вопросы?</h2>
							<p className='wow fadeInUp' data-wow-delay='0.2s'>
								Заполните форму и наш специалист свяжется с вами <span>в течении 20 минут</span>
							</p>
						</div>
						<div className='form-content'>
							<div className='form-left'>
								<form action='@/pages/page#'>
									<div className='form-item required  wow fadeInUp' data-wow-delay='0.3s'>
										<div className='form-title'>Как к вам обращаться?</div>
										<input type='text' name='name' required />
									</div>
									<div className='form-item required wow fadeInUp' data-wow-delay='0.4s'>
										<div className='form-title'>Ссылка на соц сеть, телефон мессенджера либо E-mail</div>
										<input type='text' name='contacts' required />
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
									<a href='wa.me' className=' wow fadeInUp' data-wow-delay='0.3s'>
										<img src='/img/svg/soc-1.svg' alt='' />
										<span>Наш WhatsApp</span>
									</a>
									<a href='mailto:greetroute.sales@gmail.com' className='wow fadeInUp' data-wow-delay='0.4s'>
										<img src='/img/svg/soc-2.svg' alt='' />
										<span>Наш Telegram</span>
									</a>
									<a href='mailto:greetroute.sales@gmail.com' className='wow fadeInUp' data-wow-delay='0.5s'>
										<img src='/img/svg/soc-3.svg' alt='' />
										<span>Наш Instagram</span>
									</a>
									<a href='mailto:greetroute.sales@gmail.com' className='wow fadeInUp' data-wow-delay='0.6s'>
										<img src='/img/svg/soc-4.svg' alt='' />
										<span>sales@greetroute.kz</span>
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
