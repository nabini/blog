import {Container,makeStyles, Typography } from '@material-ui/core';
import { Home,Person, List,Settings,SettingsCell, LocalLaundryService
} from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky", 
    top:0,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color: "#555",
      border:"1px solid #ece7e7",

    },

  },
  item: {
    display: 'flex',
    alignItems: "center",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]:{
      display: "none",
      
    },
  },

}));

const  Leftbar =() => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
     
   <div className={classes.item}> 
     <Home className={classes.icon} />
     <Typography className={classes.text}>HomePage</Typography>
   </div>
      
   <div className={classes.item}> 
     <Person className={classes.icon} />
     <Typography className={classes.text}>Friends</Typography>
   </div>
      
   <div className={classes.item}> 
     <List className={classes.icon} />
     <Typography className={classes.text}>List</Typography>
   </div>
      
   <div className={classes.item}> 
     <Settings className={classes.icon} />
     <Typography className={classes.text}>Seettings</Typography>
   </div>
      
   <div className={classes.item}> 
     <SettingsCell className={classes.icon} />
     <Typography className={classes.text}>Contacts</Typography>
   </div>
   <div className={classes.item}> 
     <LocalLaundryService className={classes.icon} />
     <Typography className={classes.text}>Servics</Typography>
   </div>
      
    </Container>
  );
}

export default Leftbar;