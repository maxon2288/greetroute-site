'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<>
			<div className='header'>
				<div className='wrapper'>
					<div>
						<Link href='/' className='header-logo'>
							<Image width='227' height='32' src='/img/svg/header-logo.svg' alt='' />
						</Link>
						<div className='header-menu'>
							<ul>
								<li>
									<span>Услуги и цены</span>
									<Image width='9' height='6' src='/img/svg/menu-arrow.svg' alt='' />
									<ul>
										<li>
											<Link href='/services/web'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-1.svg' alt='' />
													<h3>Разработка сайта</h3>
												</div>
												<p>Этап воронки продаж. Разработка инструмента сбора заявок для вашего продукта</p>
											</Link>
											<Link href='/services/branding'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-2.svg' alt='' />
													<h3>Брендинг</h3>
												</div>
												<p>Логотип, брендбук, айдентика и фирменный стиль для узнаваемости</p>
											</Link>
											<Link href='/services/uiux-design'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-3.svg' alt='' />
													<h3>UI/UX Дизайн</h3>
												</div>
												<p>Продуманное проектирование и разработка дизайна вашего сайта в Figma </p>
											</Link>
											<Link href='/services/seo'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-4.svg' alt='' />
													<h3>SEO-продвижение</h3>
												</div>
												<p>Оптимизация вашего сайта в поисковых системах Яндекс и Google</p>
											</Link>
											<Link href='/services/context'>
												<div>
													<Image width='18' height='18' src='/img/svg/header-serv-5.svg' alt='' />
													<h3>Контекстная реклама</h3>
												</div>
												<p>Увеличиваем конверсии, создаем систему рекламной кампании</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href='/#cases'>Кейсы</Link>
								</li>
								<li>
									<Link href='/faq'>Вопрос-ответ</Link>
								</li>
							</ul>
						</div>
						<Link href='/#form' className='header-call'>
							Связаться
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
