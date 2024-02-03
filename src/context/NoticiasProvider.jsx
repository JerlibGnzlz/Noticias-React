/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

export const NoticiasContext = createContext()

export const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("general")



    const handleChanceCategoria = (e) => {
        e.preventDefault()
        setCategoria(e.target.value)

    }

    return (
        <NoticiasContext.Provider value={
            {
                categoria,
                handleChanceCategoria
            }
        }>

            {children}
        </NoticiasContext.Provider>
    )
}
