'use client'

import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='wrapper'>
					<div>
						<Link href='/src/pages'>
							<img src='/img/svg/footer-logo.svg' alt='' />
						</Link>
						© GreetRoute 2023. Все права защищены
					</div>
					<Link href='/privacy-policy'>Политика конфиденциальности</Link>
				</div>
			</div>
		</>
	)
}
