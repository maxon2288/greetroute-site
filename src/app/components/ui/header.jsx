'use client'

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
									Услуги и цены
									<img src='/img/svg/menu-arrow.svg' alt='' />
								</li>
								<li>
									<a href='/cases'>Кейсы</a>
								</li>
								<li>
									<a href='/faq'>FAQ</a>
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
