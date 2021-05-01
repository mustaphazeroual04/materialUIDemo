import React from 'react';
import { Typography, AppBar, Card, Container, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';



import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            backgroundColor: theme.palette.background.color,
            //padding: theme.spacing(8, 0, 6)
        }

    }
});

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6" >
                            Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container} >
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph >
                            Hello every one this is  aphoto album so im trying to make a long sentence as long as possible so we lokk how it looks on the screen
                        </Typography>

                        <div>
                            <Grid container spacing={2} justify="center" >
                                <Grid item >
                                    <Button variant="contained" color="primary" >
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" color="primary" >
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;