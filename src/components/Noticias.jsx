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

    const { noticias: news } = useNoticias()

    const { url, urlToImage, author, title, description } = news

    console.log(news)

    return (
        <>
            {news.map(noticia => (
                <p key={noticia.url}>
                    Author: {noticia.author} - <br></br>
                    Recursos: {noticia.source.name}

                </p>

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

