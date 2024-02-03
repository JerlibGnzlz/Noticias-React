import { Container, Grid, Typography } from '@mui/material';
import { Formulario } from "./components/Formulario";
import { NoticiasProvider } from './context/NoticiasProvider';


const App = () => {
  return (
    <NoticiasProvider>

      <Container>
        <header>
          <Typography
            align='center'
            component="h1"
            variant='h3'
            sx={{
              m: 10,
              fontWeight: "bold"
            }}>
            Buscador de Noticias</Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={2}>

            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}

export default App