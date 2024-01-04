import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

	const displaySubmenu = e => {
		const page = e.target.textContent // get text of elem
		const tempBtn = e.target.getBoundingClientRect() // get param of elem(width, height, ets)
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
		// console.log(tempBtn)
		openSubmenu(page, { center, bottom })
	}
	// const hideSubmenu = (e) => {
	//   openSubmenu(false)
	// }

	return (
		<nav className='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='nav-logo' alt='' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>Sign in</button>
			</div>
		</nav>
	)
}

export default Navbar
