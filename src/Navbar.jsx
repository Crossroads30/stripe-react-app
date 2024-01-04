import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
	return (
		<section className='section'>
			<nav className='nav'>
				<div className='nav-header'>
					<img src={logo} alt='stripeLogo' />
				</div>
				<div className='nav-center'>
					<ul className='nav-links'>
					</ul>
				</div>
				<button className='btn' type='button'>
					Sing in
				</button>
			</nav>
		</section>
	)
}

export default Navbar
