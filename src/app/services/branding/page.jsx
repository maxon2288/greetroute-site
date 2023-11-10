'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'
import { useEffect } from 'react'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default function DentaCare() {
	useEffect(() => {
		document.querySelector('body').style.visibility = 'visible'
		document.querySelector('body').style.opacity = 1
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<Header />
			<div className='page-top'>
				<h1 className='wow fadeInUp'>Брендинг</h1>
			</div>
			<div className='wrapper'>
				<div className='serv-items'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
						<div className='blur-2'></div>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.2s'>
						<h3>Логотип</h3>
						<span>15 000 ₸</span>
						<ul>
							<li>Разработка логотипа по вашему запросу</li>
							<li>Подбор цветовой палитры</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
					<div className='serv-item popular wow fadeInUp' data-wow-delay='0.4s'>
						<h3>Фирменный стиль</h3>
						<span>70 000 ₸</span>
						<ul>
							<li>Анализ логотипов конкурентов</li>
							<li>Исследование аудитории</li>
							<li>Выбор стиля и цветовой палитры</li>
							<li>Разработка логотипа</li>
							<li>Шрифты и типографика</li>
							<li>Набор UI элементов</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.6s'>
						<h3>Айдентика</h3>
						<span>от 200 000 ₸</span>
						<ul>
							<li>Анализ логотипов конкурентов</li>
							<li>Нейминг</li>
							<li>Исследование аудитории</li>
							<li>Выбор стиля и цветовой палитры</li>
							<li>Разработка логотипа</li>
							<li>Шрифты и типографика</li>
							<li>Набор UI элементов</li>
							<li>Брендбук</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
				</div>
			</div>
			<div className='reason'>
				<div className='background-blurs'>
					<div className='blur-1'></div>
				</div>
				<div className='wrapper'>
					<div>
						<div className='reason-top'>
							<h2 className='wow fadeInUp'>Почему мы?</h2>
							<p className=' wow fadeInUp' data-wow-delay='0.2s'>
								Основные преимущества перед другими агентствами
							</p>
						</div>
						<div className='reason-items'>
							<div className='reason-item wow fadeInUp' data-wow-delay='0.3s'>
								<div>
									<img src='/img/svg/reason-1.svg' alt='' />
								</div>
								<h3>Стоимость</h3>
								<p>Клиенты довольны результатами благодаря отличному сочетанию цены и качества.</p>
							</div>
							<div className='reason-item wow fadeInUp' data-wow-delay='0.5s'>
								<div>
									<img src='/img/svg/reason-2.svg' alt='' />
								</div>
								<h3>Окупаемость</h3>
								<p>Наши услуги обеспечивает окупаемость благодаря привлечению клиентов.</p>
							</div>
							<div className='reason-item wow fadeInUp' data-wow-delay='0.7s'>
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
