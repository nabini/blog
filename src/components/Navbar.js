import {AppBar, makeStyles, Toolbar,Typography, InputBase } from '@material-ui/core';
import { Cancel, Search } from '@material-ui/icons';
import { alpha } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import { Mail, Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        
    },
    logoLg:{
      display: "none",
      [theme.breakpoints.up("sm")]:{
          display:'block',
      },
  },
  logoSm:{
    
        display: "block",
        [theme.breakpoints.down("sm")]:{
            display: (props) => (props.open ? "flex" : "none"),
        },
    },
    search: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),

        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
    
    },
    borderRadius: theme.shape.borderRadius,
    width:'50%',
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%"
    },
    },
    input:{
        color:"white",
        marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]:{
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
        display:"none",
    },
  },
  icons:{
      alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
  },
  badge:{
      marginRight: theme.spacing(2),
  },
}));

const  Navbar =() => {
    const [open, setOpen] = useState(false)

  const classes = useStyles({ open});
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className='{classes.LogoLg}'>
              Kone
        </Typography>

        <Typography variant="h6" className={classes.LogoSm}>
             Siaka!
        </Typography>
        <div className={classes.search}>
            <Search/>
            <InputBase placeholder='search....' className={classes.input}/>
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} 
                onClick={() => setOpen(true)} />
            <Badge badgeContent={4} color="secondary" className={classes.badge} >
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}  >
              <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="/monavatar.png" />
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;