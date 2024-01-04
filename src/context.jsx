import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

//custom hook
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
const [links, setLinks] = useState(sublinks)

  return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}
export default AppProvider
