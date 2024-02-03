import { createContext, useEffect, useState } from 'react'

export const NoticiasContext = createContext()

export const NoticiasProvider = ({ children }) => {
    const saludo = "hola"

    return (
        <NoticiasContext.Provider value={
            {
                saludo
            }
        }>

            {children}
        </NoticiasContext.Provider>
    )
}
