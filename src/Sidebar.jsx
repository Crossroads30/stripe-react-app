import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

const Sidebar = () => {
	return (
		<aside className='sidebar-wrapper'>
			<div className='sidebar'>
				<article>
					<ul className='sidebar-sublinks'>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
				</article>
				<button className='close-btn'>
					<FaTimes />
				</button>
			</div>
		</aside>
	)
}

export default Sidebar
