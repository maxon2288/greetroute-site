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
				<h1 className='wow fadeInUp'>SEO-продвижение</h1>
				<p className='wow fadeInUp' data-wow-delay='0.2s'>
					Мы проводим оптимизацию веб-сайта, совершенствуем его внешний вид и содержание с целью привлечения прибыльных клиентов из поисковых систем.
				</p>
			</div>

			<div className='wrapper serv-items-container serv-items-50'>
				<div className='serv-items serv-items-50'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
						<div className='blur-2'></div>
					</div>
					<div className='serv-item popular wow fadeInUp' data-wow-delay='0.2s'>
						<h3>Корпоративный</h3>
						<span>от 180 000 ₸</span>
						<p>
							SEO продвижение корпоративных сайтов (сайтов «визиток») и сайтов услуг имеет индивидуальные особенности в продвижении в поисковых системах Яндекс и Google. Для повышения конверсии и влияния на ранжирование необходимо сделать акцент на самих услугах, преимуществах,
							брендового охвата и расширения семантики по информационным запросам.
						</p>
						<a href='#'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</a>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.4s'>
						<h3>Магазин</h3>
						<span>от 700 000 ₸</span>
						<p>
							Продвижение интернет-магазина позволяет увеличить поток трафика из поисковых систем и увеличить конверсию заказов. Проводим качественный анализ performance показателей, работаем с поведенческими факторами и структурой сайта. Расширяем семантическое ядро согласно
							приоритетным направлениям продаж с учетом сезонности и ассортимента.
						</p>
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
								<h3>Технический аудит</h3>
								<p>Находим ошибки на сайте, которые мешают поисковикам правильно его сканировать и индексировать: дубли страниц, закрытые от поисковых роботов важные отделы, битые ссылки, долгая загрузка сайта.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.4s'>
								<div>
									<img src='/img/svg/context-2.svg' alt='' />
								</div>
								<h3>Анализ конкурентов</h3>
								<p>Отбираем конкурентов по целевым запросам и проводим аудит сайта каждого из них. Так мы исключаем неэффективные методы продвижения и заимствуем рабочие стратегии.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.3s'>
								<div>
									<img src='/img/svg/context-3.svg' alt='' />
								</div>
								<h3>Контент и дизайн</h3>
								<p>Подготавливаем ТЗ для копирайтеров на написание текста. Вместе с дизайнерами продумываем более удобный интерфейс сайта, добавляем на страницы формы обратной связи и другой функционал для совершения целевого действия.</p>
							</div>
							<div className='case-context-item wow fadeInUp' data-wow-delay='0.5s'>
								<div>
									<img src='/img/svg/context-4.svg' alt='' />
								</div>
								<h3>Кластеризация</h3>
								<p>
									В начале работ по SEO-продвижению мы проанализируем сайт вашей компании и конкурентов. Создаем семантическое ядро и делим его на кластеры — чтобы под каждую группу запросов была промостраница, которая закрывает потребность пользователя — в группе товаров или
									услуг, информации о компании или по интересующему вопросу.
								</p>
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
