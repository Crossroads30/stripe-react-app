import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

//custom hook
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	const [location, setLocation] = useState({}) // state of coordinates for submenu
	const [page, setPage] = useState({page: '', links: []})

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find(link => link.page === text) // we find name of the page, that coming from the each nav button  
		setPage(page)
		setLocation(coordinates)
		setIsSubmenuOpen(true)
	}
	const closeSubmenu = () => {
		setIsSubmenuOpen(false)
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				location,
				page,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider
