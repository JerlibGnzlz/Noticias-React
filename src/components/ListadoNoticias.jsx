import { Typography } from "@mui/material"
import Noticias from "./Noticias"

export const ListadoNoticias = () => {


    return (
        <>
            <Typography
                textAlign={"center"}
                margin={2}
                variant={"h3"}
                component={"h2"}
            >Ultimas noticias
            </Typography>


            <Noticias />

        </>
    )
}
