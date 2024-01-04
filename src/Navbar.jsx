import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
	return (
		<nav className='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img className='nav-logo' src={logo} alt='stripe-logo' />
					<button
						onClick={openSidebar}
						className='btn toggle-btn'
						type='button'
					>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn'>products</button>
					</li>
					<li>
						<button className='link-btn'>developers</button>
					</li>
					<li>
						<button className='link-btn'>companies</button>
					</li>
				</ul>
				<button className='btn signin-btn'>sing in</button>
			</div>
		</nav>
	)
}

export default Navbar
