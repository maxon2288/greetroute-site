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
		document.querySelector('body').classList.remove('err404-body')
		new WOW({ mobile: false }).init()
	}, [])
	return (
		<>
			<link rel='canonical' href='https://greetroute.kz/services/web' />
			<meta name='description' content='Разработка сайтов в Казахстане. Оставьте заявку и мы вас проконсультируем!' />
			<title>Разработка сайтов | GreetRoute</title>
			<Header />
			<div className='page-top'>
				<h1 className='wow fadeInUp'>Разработка сайта</h1>
				<p className='wow fadeInUp' data-wow-delay='0.2s'>
					Этап воронки продаж. Разработка инструмента сбора заявок для вашего продукта.
				</p>
			</div>
			<div className='wrapper'>
				<div className='serv-items'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
						<div className='blur-2'></div>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.2s'>
						<h3>Быстрый старт</h3>
						<span>100 000 ₸</span>
						<p>Есть возможность подключения популярных конструкторов, либо разработки уникального сайта</p>
						<ul>
							<li>UX-проектирование</li>
							<li>Копирайт</li>
							<li>UI/UX дизайн</li>
							<li>Front-end</li>
							<li>СMS (при надобности)</li>
							<li>Подбор домена и хостинга</li>
							<li>Отправка почты с формы обратной связи</li>
						</ul>
						<Link href='/#form'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</Link>
					</div>
					<div className='serv-item popular wow fadeInUp' data-wow-delay='0.4s'>
						<h3>Landing Page</h3>
						<span>от 180 000 ₸</span>
						<p>Для подробного описания продукта, услуги либо образовательного курса</p>
						<ul>
							<li>5-10 инфоблоков</li>
							<li>Средняя сложность технического выполнения</li>
							<li>Анимации</li>
							<li>Интерактивные элементы средней сложности (слайдшоу и галереи, карты, видеоплееры )</li>
							<li>UX-проектирование</li>
							<li>Копирайт</li>
							<li>UI/UX дизайн</li>
							<li>Front-end</li>
							<li>СMS (при надобности)</li>
							<li>Подбор домена и хостинга</li>
						</ul>
						<Link href='/#form'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</Link>
					</div>
					<div className='serv-item wow fadeInUp' data-wow-delay='0.6s'>
						<h3>Корпоративный сайт</h3>
						<span>от 700 000 ₸</span>
						<p>Для представления бизнеса, услуг, контактов информации.</p>
						<ul>
							<li>Сложный функционал</li>
							<li>Продвинутые анимации</li>
							<li>Сложные интерактивные элементы</li>
							<li>UX-проектирование</li>
							<li>Копирайт</li>
							<li>UI/UX дизайн</li>
							<li>Front-end</li>
							<li>СMS (при надобности)</li>
							<li>Подбор домена и хостинга</li>
						</ul>
						<Link href='/#form'>
							Заказать
							<img src='/img/svg/serv-icon.svg' alt='' />
						</Link>
					</div>
				</div>
			</div>
			<div className='case-step serv-step'>
				<div className='wrapper'>
					<div className='case-step-top wow fadeInUp'>
						<h2>Этапы разработки</h2>
					</div>
					<div className='case-step-items'>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>01</div>
							<div className='case-step-title'>
								Исследование и <br /> анализ ЦА
							</div>
							<div className='case-step-desc'>Определение целевой аудитории: Кто будут ваши клиенты? Что их интересует? Какие проблемы они хотят решить?</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>02</div>
							<div className='case-step-title'>Анализ конкурентов</div>
							<div className='case-step-desc'>Анализ конкурентов: Какие сайты используют ваши конкуренты? Что делают хорошо, а что можно улучшить?</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>03</div>
							<div className='case-step-title'>UX-проектирование</div>
							<div className='case-step-desc'>Создание конкурентного и эффективного пользовательского опыта заточенного под рекламу, который облегчит навигацию по сайту и сделает его удобным для посетителей.</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>04</div>
							<div className='case-step-title'>Копирайт</div>
							<div className='case-step-desc'>Написание привлекательного текста, заголовков, призывов к действию, описания продуктов, которые продают вашу компанию</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>05</div>
							<div className='case-step-title'>
								Создание концепции <br /> и дизайна
							</div>
							<div className='case-step-desc'>Создание дизайна сайта в Figma, включая цветовую палитру, шрифты, все UI элементы, графику и макеты страниц.</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>06</div>
							<div className='case-step-title'>Front-end</div>
							<div className='case-step-desc'>Создание HTML и CSS кода для отображения дизайна на веб-страницах. Предусмотрение адаптивности сайта на всех устройствах и браузерах, анимации и функциональность сайта</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>07</div>
							<div className='case-step-title'>Back-end</div>
							<div className='case-step-desc'>Разработка серверной логики сайта, управление базой данных, интеграция сервисов, Настройка CMS системы для управления контентом на сайте</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>08</div>
							<div className='case-step-title'>Базовая SEO-настройка</div>
							<div className='case-step-desc'>Оптимизация семантики тегов, изображений и meta параметров таких как description и title,</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>09</div>
							<div className='case-step-title'>Тестирование</div>
							<div className='case-step-desc'>Проводится тестирование как Front-end’а так и Back-end’а на выявление багов и недоразумений и скорейшее их исправление</div>
						</div>
						<div className='case-step-item wow fadeInUp' da>
							<div className='case-step-number'>10</div>
							<div className='case-step-title'>Интеграция аналитик</div>
							<div className='case-step-desc'>Настройка систем аналитики, которые позволяют вам отслеживать посещаемость и взаимодействие с пользователями.</div>
						</div>
						<div className='case-step-item wow fadeInUp'>
							<div className='case-step-number'>11</div>
							<div className='case-step-title'>Оптимизация</div>
							<div className='case-step-desc'>Оптимизация контента, изображений, скорости загрузки всего сайта через инструмент Google PageSpeed Insights</div>
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
								<p>Наши услуги обеспечивают окупаемость благодаря привлечению клиентов.</p>
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
