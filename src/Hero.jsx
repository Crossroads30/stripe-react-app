import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
	const { closeSubmenu } = useGlobalContext()

	return (
		<main className='hero'>
			<div className='hero-center'>
				<article className='hero-info'>
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Millions of companies of all sizes-form startups to Fortune 500s-use
						Stripe`s software and APl to accept payments, send payouts, and
						manage their bussiness online.
					</p>
					<button className='btn' type='button'>
						start now
					</button>
				</article>
				<article className='hero-images'>
					<img src={phoneImg} alt='phone' />
				</article>
			</div>
		</main>
	)
}

export default Hero
