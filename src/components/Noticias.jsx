import {
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography
} from "@mui/material"
import useNoticias from "../hooks/useNoticias"



const Noticias = () => {

    const { noticias } = useNoticias()

    const { url, urlToImage, author, title } = noticias

    console.log(noticias)

    return (
        <>
            {noticias.map(noticia => (
                <p key={noticia.url}>{noticia.author}</p>
            ))}
            <Card>
                <CardMedia
                    component={"img"}
                    alt={`Imagen de la Noticia ${urlToImage}`}
                    imagen={urlToImage}
                >
                </CardMedia>


            </Card>
        </>
    )
}

export default Noticias

