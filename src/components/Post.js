import {Card,makeStyles, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  card:{
      marginBottom:theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]:{
      height:150,
    }
  }
  

}));

const  Post =() => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardMedia className={classes.media} image="/xps.jpg"
      title="My Post"
      />
      <CardContent>
        <Typography gutterBottom  variant="h5">My first post</Typography>
        <Typography variant="body2">Le Lorem Ipsum est simplement du 
        faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
         sans que son contenu n'en soit modifié. Il a été popularisé
        faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
         sans que son contenu n'en soit modifié. Il a été popularisé
        faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
         sans que son contenu n'en soit modifié. Il a été popularisé
         </Typography>
      </CardContent>
      </CardActionArea>
<CardActions>
  <Button size="small" color="primary">Share</Button>
  <Button size="small" color="primary">Leaen More</Button>
</CardActions>
    </Card>
  );
}

export default Post;