'use client'

import Link from 'next/link'

export default function Header() {
	return (
		<>
			<div className='header'>
				<div className='wrapper'>
					<div>
						<a href='/' className='header-logo'>
							<img src='/img/svg/header-logo.svg' alt='' />
						</a>
						<div className='header-menu'>
							<ul>
								<li>
									<span>Услуги и цены</span>
									<img src='/img/svg/menu-arrow.svg' alt='' />
									<ul>
										<li>
											<Link href='/services/web'>
												<div>
													<img src='/img/svg/header-serv-1.svg' alt='' />
													<h3>Разработка сайта</h3>
												</div>
												<p>Этап воронки продаж. Разработка инструмента сбора заявок для вашего продукта</p>
											</Link>
											<Link href='/services/branding'>
												<div>
													<img src='/img/svg/header-serv-2.svg' alt='' />
													<h3>Брендинг</h3>
												</div>
												<p>Логотип, брендбук, айдентика и фирменный стиль для узнаваемости</p>
											</Link>
											<Link href='/services/uiux-design'>
												<div>
													<img src='/img/svg/header-serv-3.svg' alt='' />
													<h3>UI/UX Дизайн</h3>
												</div>
												<p>Продуманное проектирование и разработка дизайна вашего сайта в Figma </p>
											</Link>
											<Link href='/services/seo'>
												<div>
													<img src='/img/svg/header-serv-4.svg' alt='' />
													<h3>SEO-продвижение</h3>
												</div>
												<p>Оптимизация вашего сайта в поисковых системах Яндекс и Google</p>
											</Link>
											<Link href='/services/context'>
												<div>
													<img src='/img/svg/header-serv-5.svg' alt='' />
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
									<Link href='/faq'>FAQ</Link>
								</li>
							</ul>
						</div>
						<a href='#' className='header-call'>
							Связаться
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
