import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContext from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Noticias = ({ noticia }) => {

    const { author, url, title, description, source, urlToImage } = noticia;
    return (

        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component={"img"}
                        alt={`Imagen de la notica ${title}`}
                        image={urlToImage}
                        height={250}
                    />
                )}

                <CardContext>
                    <Typography
                        variant='body1' color={"error"}>
                        {source.name}
                    </Typography>
                    <Typography
                        variant='h5' component={"div"}>
                        {title}
                    </Typography>
                    <Typography
                        variant='body2' >
                        {description}
                    </Typography>
                </CardContext>
                <CardActions>
                    <Link
                        href={url}
                        target={'_blank'}
                        variant='button'
                        width={"100%"}
                        textAlign={"center"}
                        sx={{
                            textDecoration: "none"
                        }}
                    >Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>


    );
};

export default Noticias

