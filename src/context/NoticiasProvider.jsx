/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from 'react';

export const NoticiasContext = createContext();

export const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("general");
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticia, setTotalNoticia] = useState(0);



    const handleChanceCategoria = (e) => {
        e.preventDefault();
        setCategoria(e.target.value);
    };

    const handleChangePagina = (e, valor) => {
        console.log("cambiando pagina");
        setPagina(valor);
    };


    useEffect(() => {
        const consultarAPI = async () => {

            const URL = ` https://newsapi.org/v2/everything?q=category=${categoria}&from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(URL);
            setNoticias(data.articles);
            setTotalNoticia(data.totalResults);
            setPagina(1);

        };
        consultarAPI();
    }, [categoria]);

    useEffect(() => {
        const consultarAPI = async () => {

            const URL = ` https://newsapi.org/v2/everything?q=category=${categoria}&page=${pagina}from=2024-02-02&to=2024-02-02&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(URL);
            setNoticias(data.articles);
            setTotalNoticia(data.totalResults);

        };
        consultarAPI();
    }, [pagina]);

    return (
        <NoticiasContext.Provider value={
            {
                categoria,
                handleChanceCategoria,
                noticias,
                totalNoticia,
                pagina,
                handleChangePagina
            }
        }>

            {children}
        </NoticiasContext.Provider>
    );
};
