'use client'

import Header from '@/app/components/ui/header'
import BottomOfPage from '@/app/components/screens/bottomOfPage/bottomOfPage'
import Link from 'next/link'

export default function DentaCare() {
	return (
		<>
			<Header />

			<div className='case dream'>
				<div className='case-top'>
					<div className='wrapper'>
						<Link href='/' className='back'>
							<img src='/img/svg/back.svg' alt='' />
							Назад на главную
						</Link>
						<h1>Dream House</h1>
						<p>
							Разработка сайта для ремонтного <br /> агентства Dream House
						</p>
					</div>
				</div>
				<div className='case-site'>
					<div className='wrapper'>
						<h2>Разработка сайта </h2>
						<p>Создали сайт, который отражает профессиональность клиники и привлекает внимание клиентов.</p>
					</div>
				</div>
				<div className='case-images'>
					<div className='case-devices'>
						<img src='/img/content/dream-1.png' alt='' />
						<img src='/img/content/dream-2.jpg' alt='' />
						<img src='/img/content/dream-3.jpg' alt='' />
						<img src='/img/content/dream-4.jpg' alt='' />
					</div>
				</div>
				<div className='case-step'>
					<div className='background-blurs'>
						<div className='blur-1'></div>
					</div>
					<div className='wrapper'>
						<div className='case-step-top'>
							<h2>Этапы разработки</h2>
						</div>
						<div className='case-step-items'>
							<div className='case-step-item'>
								<div className='case-step-number'>01</div>
								<div className='case-step-title'>Проектирование и написание текста</div>
								<div className='case-step-desc'>При прототипировании сайта "Dream House" разработали логическую структуру, а тексты описывают услуги и портфолио, отражая профессионализм компании.</div>
							</div>
							<div className='case-step-item'>
								<div className='case-step-number'>02</div>
								<div className='case-step-title'>Дизайн-система</div>
								<div className='case-step-desc'>Разработали концепцию, выбрали цветовую палитру, шрифты и стили. Создали макет (wireframe) для каждой страницы, определяющий расположение элементов. Создали визуальные элементы, такие как иконки и фоны.</div>
							</div>
							<div className='case-step-item'>
								<div className='case-step-number'>03</div>
								<div className='case-step-title'>Программирование</div>
								<div className='case-step-desc'>
									Всё началось с создания HTML-кода, который определяет структуру и контент страницы. Затем, после верстки, разработали структуру базы данных, которая будет хранить информацию, необходимую для сайта. Также важной частью процесса была разработка системы управления
									контентом на сайте.
								</div>
							</div>
							<div className='case-step-item'>
								<div className='case-step-number'>04</div>
								<div className='case-step-title'>Тестирование</div>
								<div className='case-step-desc'>После завершения верстки и программирования проводились тесты для обнаружения и исправления ошибок и недоразумений. Проводилось тестирование как фронтенда, так и бэкенда, включая проверку взаимодействия между ними.</div>
							</div>
							<div className='case-step-item'>
								<div className='case-step-number'>05</div>
								<div className='case-step-title'>Оптимизация</div>
								<div className='case-step-desc'>Осуществили оптимизацию сайта с целью улучшения производительности, увеличения скорости загрузки страниц и оптимизации изображений. Также обеспечили безопасность сайта путем внедрения мер по защите от атак и уязвимостей.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomOfPage />
		</>
	)
}
