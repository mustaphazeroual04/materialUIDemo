import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container, CardContent } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera  className={classes.icon} />
                    <Typography variant="h6">
                        photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container } >
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph >
                            Hello every one this is a photo Album and i try to make this sentence as long as i can so we can see how
                        </Typography>
                        <div className={classes.Buttons} >
                            <Grid container spacing={2} justify="center" >
                                <Grid item >
                                    <Button variant="contained" color="primary" >
                                            See my Photos
                                    </Button>

                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" color="primary" >
                                            Secondary Action
                                    </Button>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="md" className={classes.cardGrid} >
                    <Grid container spacing={4} >
                        {cards.map((card) => (

                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} >
                                    <CardMedia 
                                        className={classes.cardMedia} 
                                        image="https://source.unsplash.com/random"
                                        title="Title image"
                                    />
                                    <CardContent className={classes.cardContent} >
                                        <Typography gutterBottom variant="h5" >
                                                Heading
                                        </Typography>
                                        <Typography gutterBottom variant="h5" >
                                                this is  a media card you can use this section 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" >View</Button>
                                        <Button size="small" color="primary" >Edit</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))}

                    </Grid>

                </Container>
            </main>
            <footer classNAme={classes.footer} >
                <Typography variant="h6" align="center" gutterBottom >
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom >
                    Something here to give the footer a purpose
                </Typography>
            </footer>
        </>
    )
}

export default App;