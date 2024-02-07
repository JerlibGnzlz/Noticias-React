import { Typography, Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias";
import Noticias from "../components/Noticias";

export const ListadoNoticias = () => {

    const { noticias, totalNoticia, handleChangePagina, pagina } = useNoticias();

    const totalPaginas = Math.ceil(totalNoticia / 20);


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

            <Stack
                spacing={2}
                alignContent={"center"}
                justifyContent={"center"}
                direction={"row"}
                sx={{ marginTop: 5 }}
            >
                <Pagination
                    page={pagina}
                    onChange={handleChangePagina}
                    count={totalPaginas}
                    color="secondary" />


            </Stack>;
        </>
    );
};
