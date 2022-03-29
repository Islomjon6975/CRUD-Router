import React from 'react'
import { data } from "../utils/data";
import { createContext, useState } from "react";

export const DataContext = createContext();


export const DataItemContext = ({children}) => {
    const [datac, setDatac] = useState(data)
    
  return (
    <DataContext.Provider value={[datac, setDatac]}>
        {children}
    </DataContext.Provider>
  )
}
