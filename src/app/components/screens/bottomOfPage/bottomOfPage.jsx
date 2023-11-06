'use client'

export default function BottomOfPage() {
	return (
		<>
			<div className='form'>
				<div className='wrapper'>
					<div>
						<div className='form-top'>
							<h2>Остались вопросы?</h2>
							<p>
								Заполните форму и наш специалист свяжется с вами <span>в течении 20 минут</span>
							</p>
						</div>
						<div className='form-content'>
							<div className='form-left'>
								<form action='@/pages/page#'>
									<div className='form-item required'>
										<div className='form-title'>Как к вам обращаться?</div>
										<input type='text' name='name' required />
									</div>
									<div className='form-item required'>
										<div className='form-title'>Ссылка на соц сеть, телефон мессенджера либо E-mail</div>
										<input type='text' name='contacts' required />
									</div>
									<div className='form-item'>
										<div className='form-title'>Сообщение для нас</div>
										<input type='text' name='message' />
									</div>
									<div className='form-item'>
										<button>Отправить</button>
									</div>
								</form>
							</div>
							<div className='form-right'>
								<h3>Напишите нам</h3>
								<div className='soc'>
									<a href='@/pages/page#'>
										<img src='/img/svg/soc-1.svg' alt='' />
									</a>
									<a href='@/pages/page#'>
										<img src='/img/svg/soc-2.svg' alt='' />
									</a>
									<a href='@/pages/page#'>
										<img src='/img/svg/soc-3.svg' alt='' />
									</a>
								</div>
								<a href='mailto:greetroute.sales@gmail.com' className='form-right-mail'>
									greetroute.sales@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='footer'>
				<div className='wrapper'>
					<div>
						<a href='/src/pages'>
							<img src='/img/svg/footer-logo.svg' alt='' />
						</a>
						© GreetRoute 2023. Все права защищены
					</div>
					<a href='/policy'>Политика конфиденциальности</a>
				</div>
			</div>
		</>
	)
}