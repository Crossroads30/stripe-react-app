import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
	return (
		<main className='hero'>
			<div className='hero-center'>
				<div className='hero-info'>
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Millions of companies of all sizes-form startups to Fortune 500s-use
						Stripe`s software and APl to accept payments, send payouts, and
						manage their bussiness online.
					</p>
				</div>
				<img className='hero-image' src={phoneImg} alt='' />
        <button className='btn' type="button">start now</button>
			</div>
		</main>
	)
}

export default Hero
