import { Typography, Grid } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticias from "../components/Noticias";

export const ListadoNoticias = () => {

    const { noticias } = useNoticias();
    console.log(noticias);
    return (
        <>
            <Typography
                textAlign={"center"}
                margin={2}
                variant={"h3"}
                component={"h2"}
            >Ultimas noticias
            </Typography>


            <Grid container spacing={3}>
                {noticias.map(noticia => (
                    <Noticias
                        key={noticia.url}
                        noticia={noticia} />

                ))}

            </Grid>

        </>
    );
};
