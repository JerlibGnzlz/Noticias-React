/* eslint-disable react/prop-types */
import axios from "axios"
import { createContext, useEffect, useState } from 'react'

export const NoticiasContext = createContext()

export const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("general")
    const [noticias, setNoticias] = useState([])



    const handleChanceCategoria = (e) => {
        e.preventDefault()
        setCategoria(e.target.value)

    }

    useEffect(() => {
        const consultarAPI = async () => {


            // const URL = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
            const URL = ` https://newsapi.org/v2/everything?q=category=${categoria}&from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(URL)

            setNoticias(data.articles)
        }
        consultarAPI()
    }, [categoria])


    return (
        <NoticiasContext.Provider value={
            {
                categoria,
                handleChanceCategoria,
                noticias
            }
        }>

            {children}
        </NoticiasContext.Provider>
    )
}
