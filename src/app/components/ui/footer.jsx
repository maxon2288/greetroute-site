'use client'

export default function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='wrapper'>
					<div>
						<a href='/src/pages'>
							<img src='/img/svg/footer-logo.svg' alt='' />
						</a>
						© GreetRoute 2023. Все права защищены
					</div>
					<a href='/privacy-policy'>Политика конфиденциальности</a>
				</div>
			</div>
		</>
	)
}
