'use client'

import Image from 'next/image'
import Header from '@/app/components/ui/header'
import Link from 'next/link'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'

export default function Home() {
	return (
		<>
			<Header />
			<div className='first'>
				<div className='wrapper'>
					<div>
						<div className='first-bg'>
							<img src='img/content/first-bg.png' alt='' />
						</div>
						<div className='first-content'>
							<div className='first-title'>
								<h1>
									<span>Помогаем</span> <span>бизнесу </span>
									<span> найти</span> <span>клиентов</span>
								</h1>
								<h1>
									<span>Помогаем</span> <span>бизнесу </span>
									<span> найти</span> <span>клиентов</span>
								</h1>
							</div>
							<p>
								GreetRoute - <b>одно из лучших</b> агентств по разработке и продвижению сайтов <b>в Казахстане</b>.
							</p>
							<div>
								<a href='#'>
									<img src='/img/svg/get-start.svg' alt='' />
									Начать сотрудничать
								</a>
								<a href='#'>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
									<div>
										<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<span>Услуги</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='services'>
				<div className='wrapper'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='number'>
						<div className='number-top'>2</div>
						<div className='number-title'>Услуги</div>
					</div>
					<div className='services-top'>
						<h2>Что мы предлагаем?</h2>
						<p>
							Качественные решения, которые <span>окупают</span> ценовой диапазон наших предложений
						</p>
					</div>
					<div className='services-items'>
						<Link href='/branding' className='services-item'>
							<h3>Брендинг</h3>
							<p>Разработка логотипа, фирменного стиля и подбор цветовой гаммы для идентичности вашего бренда на рынке.</p>
							<div>
								Подробнее
								<img src='img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/uiux-design' className='services-item'>
							<h3>UI/UX Дизайн</h3>
							<p>Проектирование, разработка концепции, цветовая палитра, шрифты и стили. Макет каждой страницы.</p>
							<div>
								Подробнее
								<img src='img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<Link href='/website' className='services-item'>
							<h3>Разработка сайта</h3>
							<p>Проектирование, дизайн-система, верстка, настройка базы данных и подключение к CMS системе</p>
							<div>
								Подробнее
								<img src='img/svg/button-arrow.svg' alt='' />
							</div>
						</Link>
						<div className='services-row'>
							<Link href='/seo' className='services-item'>
								<h3>SEO-продвижение</h3>
								<p>Оптимизация сайта для поднятия позиций сайта в результатах выдачи поисковых систем по определённым запросам пользователей в Google и Яндекс</p>
								<div>
									Подробнее
									<img src='img/svg/button-arrow.svg' alt='' />
								</div>
							</Link>
							<Link href='/context' className='services-item'>
								<h3>Контекстная реклама</h3>
								<p>Включает выбор ключевых слов и тематики, создание рекламных объявлений, установку бюджета и настройку показов в рекламных сетях или поисковых системах.</p>
								<div>
									Подробнее
									<img src='img/svg/button-arrow.svg' alt='' />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='cases'>
				<div className='wrapper'>
					<div>
						<div className='background-blurs'>
							<div className='blur-2'></div>
						</div>
						<div className='number'>
							<div className='number-top'>2</div>
							<div className='number-title'>Кейсы</div>
						</div>
						<div className='cases-top'>
							<h2>Наши работы</h2>
						</div>
						<div className='cases-items'>
							<div className='cases-row'>
								<Link href='/cases/dentacare/page' className='cases-item'>
									<img src='img/content/case-1.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>DentaСare</h3>
										<p>Стоматологическая клиника</p>
									</div>
								</Link>
								<Link href='/cases/maroon' className='cases-item'>
									<img src='img/content/case-2.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>MAROON</h3>
										<p>Бренд косметики</p>
									</div>
								</Link>
							</div>
							<div className='cases-row'>
								<Link href='/cases/dream-house' className='cases-item'>
									<img src='img/content/case-3.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>Dream House</h3>
										<p>Агентство ремонта под ключ</p>
									</div>
								</Link>
								<Link href='/cases/multikassa' className='cases-item'>
									<img src='img/content/case-4.jpg' alt='' />
									<div className='cases-overlay'>
										<h3>Multikassa</h3>
										<p>Обменный пункт в Дубае</p>
									</div>
								</Link>
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
						<div className='number'>
							<div className='number-top'>3</div>
							<div className='number-title'>Преимущества</div>
						</div>
						<div className='reason-top'>
							<h2>Почему мы?</h2>
							<p>Основные преимущества перед другими агентствами</p>
						</div>
						<div className='reason-items'>
							<div className='reason-item'>
								<div>
									<img src='img/svg/reason-1.svg' alt='' />
								</div>
								<h3>Стоимость</h3>
								<p>Клиенты довольны результатами благодаря отличному сочетанию цены и качества.</p>
							</div>
							<div className='reason-item'>
								<div>
									<img src='img/svg/reason-2.svg' alt='' />
								</div>
								<h3>Окупаемость</h3>
								<p>Наши услуги обеспечивает окупаемость благодаря привлечению клиентов.</p>
							</div>
							<div className='reason-item'>
								<div>
									<img src='img/svg/reason-3.svg' alt='' />
								</div>
								<h3>Качество</h3>
								<p>Мы относимся к делу системно и серьезно, уделяя особое внимание качеству</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*<div className='contacts'>*/}
			{/*	<div className='wrapper'>*/}
			{/*		<div>*/}
			{/*			<div className='contacts-left'>*/}
			{/*				<h2>Найдем вам клиентов</h2>*/}
			{/*				<p>*/}
			{/*					GreetRoute - <b>одно из лучших</b> агентств по разработке и продвижению сайтов <b>в Казахстане</b>.*/}
			{/*				</p>*/}
			{/*			</div>*/}
			{/*			<div className='contacts-right'>*/}
			{/*				<a href='#'>*/}
			{/*					<img src='/img/svg/get-start.svg' alt='' />*/}
			{/*					Начать сотрудничать*/}
			{/*				</a>*/}
			{/*				<a href='#'>*/}
			{/*					<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
			{/*						<path*/}
			{/*							d='M23.1706 13.266C24.2765 13.8784 24.2765 15.4574 23.1706 16.0698L16.1279 19.9701C14.4945 20.8747 12.5055 20.8747 10.8721 19.9701L3.82941 16.0698C2.72353 15.4574 2.72353 13.8784 3.82941 13.266M17.8885 4.65349L16.1279 3.67842C14.4945 2.77386 12.5055 2.77386 10.8721 3.67842L3.82942 7.57871C2.72353 8.19116 2.72353 9.7701 3.82941 10.3825L10.8721 14.2828C12.5055 15.1874 14.4945 15.1874 16.1279 14.2828L23.1706 10.3825C24.2765 9.77011 24.2765 8.19116 23.1706 7.57871L21.4099 6.60364M23.5133 19.1C24.0979 19.8325 23.9451 20.9924 23.0299 21.4992L16.1279 25.3216C14.4945 26.2261 12.5055 26.2261 10.8721 25.3216L4.07076 21.5549C3.12873 21.0332 2.99786 19.8259 3.63366 19.1'*/}
			{/*							stroke='currentColor'*/}
			{/*							strokeWidth='1.5'*/}
			{/*							strokeLinecap='round'*/}
			{/*						/>*/}
			{/*					</svg>*/}
			{/*					<span>Услуги</span>*/}
			{/*				</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}

			<BottomOfPage />
		</>
	)
}
