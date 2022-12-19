import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [newsCaregoryPage,setNewsCaregoryPage] = useState(false);

 
  return (
    <AppContext.Provider
      value={{newsCaregoryPage,setNewsCaregoryPage}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }