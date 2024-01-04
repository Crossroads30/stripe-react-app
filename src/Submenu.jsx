import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext()

	const container = useRef(null)

	const [columns, setColumns] = useState('col-2') // state for changing styles of link on hover

	useEffect(() => {
		setColumns('col-2')
		// changing location of submenu
		const submenu = container.current
		const { center, bottom } = location
		submenu.style.left = `${center}px`
		submenu.style.top = `${bottom}px`

		// change styles up to what link on hover
		if (links.length === 3) {
			setColumns('col-3')
		}
		if (links.length > 3) {
			setColumns('col-4')
		}
	}, [location, links])

	return (
		<aside
			ref={container}
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link
					return (
						<a key={index} href={url}>
							{icon}
							label
						</a>
					)
				})}
			</div>
		</aside>
	)
}

export default Submenu
