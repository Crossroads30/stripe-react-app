import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

//custom hook
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	const openSubmenu = () => {
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
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider
