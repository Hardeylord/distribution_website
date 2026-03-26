import React, {createContext, useState} from 'react'

export const GlobalContext = createContext(null)
const Globalhooks = ({children}) => {
  const [open, isOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{
      open,
      isOpen
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Globalhooks