import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>The sun peeked through the clouds, casting a warm glow on the sleepy town below.</Typography>
            <div>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item>
                  <Button variant="contained" style={{ marginRight: '20px', marginBottom: '10px' }} color="success">YES</Button>
                  <Button variant="outlined" style={{ marginRight: '20px', marginBottom: '10px', backgroundColor: 'red', color: 'white' }}>NO</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                    style={{ height: '100%', paddingTop: '56.25%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" style={{ marginRight: '5px', marginBottom: '10px' }} color="success">VIEW</Button>
                    <Button variant="outlined" style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white' }}>DELETE</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
