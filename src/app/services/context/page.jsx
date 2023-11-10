'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
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
			<link rel='canonical' href='https://greetroute.kz/services/context' />
			<meta name='description' content='Настройка контекстной рекламы в Казахстане. Оставьте заявку и мы вас проконсультируем!' />
			<title>Контекстная реклама | GreetRoute</title>
			<Header />
			<div className='page-top'>
				<h1 className='wow fadeInUp'>Контекстная реклама</h1>
				<p className='wow fadeInUp' data-wow-delay='0.2s'>
					Поднимаем продажи, увеличиваем аудиторию вашего бренда и снижаем стоимость заявки.
				</p>
			</div>

			<div className='wrapper serv-items-container serv-items-50'>
				<div className='serv-items serv-items-50'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
						<div className='blur-2'></div>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.2s'>
						<h3>Яндекс Директ</h3>
						<span>от 100 000 ₸</span>
						<ul>
							<li>Исследование целевой аудитории и ключевых слов.</li>
							<li>Создание рекламных кампаний и групп.</li>
							<li>Настройка бюджета и ставок.</li>
							<li>Мониторинг и оптимизация результатов.</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
					<div className='serv-item popular wow fadeInUp' data-wow-delay='0.4s'>
						<h3>Комплексная реклама</h3>
						<span>от 220 000 ₸</span>
						<ul>
							<li>Анализ аудитории и ключевых слов.</li>
							<li>Создание рекламных кампаний и объявлений в Google Ads и Яндекс.Директ.</li>
							<li>Настройка бюджета и ставок.</li>
							<li>Мониторинг и оптимизация результатов в обоих платформах.</li>
							<li>Проведение A/B-тестов для оптимизации объявлений и целевых страниц.</li>
							<li>Регулярное отслеживание аналитики и адаптация стратегии под изменения в требованиях рынка и аудитории.</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.6s'>
						<h3>Google Ads</h3>
						<span>от 120 000 ₸</span>
						<ul>
							<li>Исследование целевой аудитории и ключевых слов.</li>
							<li>Создание рекламных кампаний и групп.</li>
							<li>Настройка бюджета и ставок.</li>
							<li>Мониторинг и оптимизация результатов.</li>
						</ul>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
				</div>
			</div>

			<div className='case-context'>
				<div className='wrapper'>
					<div>
						<div className='case-context-top'>
							<h2 className='wow fadeInUp'>Этапы работ</h2>
						</div>
						<div className='case-context-items'>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.2s'>
								<div>
									<img src='/img/svg/context-1.svg' alt='' />
								</div>
								<h3>
									Сбор семантики для <br /> поисковой кампании
								</h3>
								<p>Определение через поисковые запросы как потенциальные клиенты выбирают ваши услуги. Создание для них подходящей рекламы</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.4s'>
								<div>
									<img src='/img/svg/context-2.svg' alt='' />
								</div>
								<h3>Анализ целей и аудитории</h3>
								<p>Определение целей, которые мы хотим достичь с помощью контекстной рекламы. Идентификация ЦА, определение ее характеристик и потребностей.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.3s'>
								<div>
									<img src='/img/svg/context-3.svg' alt='' />
								</div>
								<h3>Исследование ключевых слов</h3>
								<p>Мы проводим исследование ключевых слов, связанных с нишей. Используем инструменты, такие как Google Keyword Planner.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.5s'>
								<div>
									<img src='/img/svg/context-4.svg' alt='' />
								</div>
								<h3>
									Запуск рекламы в Яндекс.Директ <br /> и Google Ads
								</h3>
								<p>Создание новой кампанию в Google Ads и Яндекс.Директ, определившись с параметрами, такими как бюджет, расписание, регионы и цели кампании.</p>
							</div>
						</div>
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
