
import {makeStyles,Container, Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { ImageList , ImageListItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';


const useStyles = makeStyles(theme=>({
  container: {
    paddingTop: theme.spacing(5),
  },
  title:{
    fontSize:16,
    fontWeight:500,
    color: "#555",
  },

  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
    textDecoration: "none",
    cursor: 'pointer'
  },

}));

const  Rightbar =() => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.container} gutterBottom>
        Online Friends
      </Typography>
    <AvatarGroup max={5}>
  <Avatar alt="Remy Sharp" src="/bh.jpg" />
  <Avatar alt="Remy Sharp" src="/bh.jpg" />
  <Avatar alt="Remy Sharp" src="/bh.jpg" />
  <Avatar alt="Remy Sharp" src="/bh.jpg" />
  <Avatar alt="Remy Sharp" src="/bh.jpg" />
  </AvatarGroup>

    <Typography className={classes.container} gutterBottom>Gallery</Typography>
    <ImageList rowHeight={160} className={classes.imageList}  style={{marginBottom:20 }}  cols={3}>
  

    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2" alt=""
      />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2" alt=""
      />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format&dpr=2" alt=""
      />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=161&fit=crop&auto=format&dpr=2" alt=""
      />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format&dpr=2" alt=""
      />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2 " alt=""
      />
    </ImageListItem>
  
</ImageList>
<Typography className={classes.title} gutterBottom>
Categories

</Typography>
      <nav>
      <Link to="/" className={classes.link}>
    Sport
    </Link> 
  <Link to="/serice" className={classes.link}>
    Movices
    </Link> 
    <Divider  flexItem style={{marginBottom:10}} />
  <Link to="/serice" className={classes.link}>
    Food
    </Link> 
  <Link to="/serice" className={classes.link}>
    Science
    </Link> 
      </nav>
    
    </Container>
    
    
    
    );
  
};

export default Rightbar;