'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Accordion from '@/app/components/ui/accordion/accordion'
import { useEffect } from 'react'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
export default function DentaCare() {
	useEffect(() => {
		document.querySelector('body').style.visibility = 'visible'
		document.querySelector('body').style.opacity = 1

		document.querySelector('body').classList.remove('err404-body')
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<link rel='canonical' href='https://greetroute.kz/faq' />
			<meta name='description' content='Часто задаваемые вопросы наших клиентов. Оставьте заявку и мы вас проконсультируем!' />
			<title>Часто задаваемые вопросы | GreetRoute</title>
			<Header />
			<div className='page-top'>
				<h1>Вопрос-ответ</h1>
			</div>
			<div className='wrapper'>
				<Accordion />
			</div>
			<div className='reason'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
				</div>
				<div className='wrapper'>
					<div>
						<div className='reason-top'>
							<h2>Почему мы?</h2>
							<p>Основные преимущества перед другими агентствами</p>
						</div>
						<div className='reason-items'>
							<div className='reason-item'>
								<div>
									<img src='/img/svg/reason-1.svg' alt='' />
								</div>
								<h3>Стоимость</h3>
								<p>Клиенты довольны результатами благодаря отличному сочетанию цены и качества.</p>
							</div>
							<div className='reason-item'>
								<div>
									<img src='/img/svg/reason-2.svg' alt='' />
								</div>
								<h3>Окупаемость</h3>
								<p>Наши услуги обеспечивает окупаемость благодаря привлечению клиентов.</p>
							</div>
							<div className='reason-item'>
								<div>
									<img src='/img/svg/reason-3.svg' alt='' />
								</div>
								<h3>Качество</h3>
								<p>Мы относимся к делу системно и серьезно, уделяя особое внимание качеству</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomOfPage />
		</>
	)
}
