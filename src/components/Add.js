import * as React from 'react';
import {Fab, makeStyles,Container, Tooltip, Modal, TextField, MenuItem, Snackbar } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';
import { FormLabel } from '@material-ui/core';
import { RadioGroup,FormControlLabel,Radio,Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles(theme=>({
  fab: {
    position:"fixed",
    bottom:20,
    right:20,
  },
  conatiner:{
      width: 500,
      height:550,
      backgroundColor: "white",
      position: "absolute",
      top:0,
      bottom:0,
      right:0,
      left:0,
      margin:"auto'",
      [theme.breakpoints.down("sm")]:{
          width:"100vw",
          height: "100vh",
      },
  },
 form: {
     padding:theme.spacing(2)
 },
 item:{
     marginBottom: theme.spacing(3)
 },
}));

const  Add =() => {
  const classes = useStyles()
  const [open, setOpen]= useState(false);
  const [openAlert, setOpenAlert]= useState(false);
  const handleClose = (event, reason) => {
      if (reason === 'clickaway'){
      return;
  }
  setOpenAlert(false)
};
  return (
    <>
     <Tooltip title="Add" aria-label='add' onClick={()=>setOpen(true)}>
         <Fab color="primary" className={classes.fab} >
             <AddIcon />

         </Fab>

     </Tooltip>
     <Modal open={open}>
         <Container className={classes.conatiner}>
             <form className={classes.form} autoComplete='off'>
                 <div className={classes.item}>
                     <TextField 
                     id="standard-basic"  
                     label="Title" 
                     size="small"
                     style={{width: "100%" }} />
                 </div>
                 <div className={classes.item}>
                     <TextField 
                     id="outlined-multiline-basic"  
                     multiline
                     row={4}
                     defaultValue="Default Value"
                     variant="outlined"
                     label="Tell your story..."
                     size="small"
                       style={{ width:"100%" }} />
                 </div>

                 <div className={classes.item}>
                    <TextField select label="visibility" value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unilisted">Unilisted</MenuItem>
                    </TextField>

                 </div>
     <div className={classes.item}>
        <FormLabel component="legend">Whe can Comment?</FormLabel>

                    <RadioGroup>
                    <FormControlLabel 

                    value="everybody"
                    control={<Radio/>}
                    label="everybody"
                   />
                
                    <FormControlLabel 
                    value="My Friends" 
                    control={<Radio />} 
                    label="My Friends" />
                    
                    <FormControlLabel 
                    value="Nobody" 
                    control={<Radio />} 
                    label="Nobody" />

                    <FormControlLabel 
                    value="Custom" 
                    disabled
                    control={<Radio />} 
                    label="Custom (Premium)" />
                </RadioGroup>
                </div>
        <div>
            <div className={classes.item}> 

                     <Button variant="outlined" 
                     color="primary" 
                     style={{marginRight:20}}
                     onClick={()=> setOpenAlert(true)}>
                        Create
                        </Button>
                    <Button variant="outlined" color="secondary"
                     onClick={()=>setOpen(false)}>
                        Cancel
                        
                        </Button> 

                </div>
        </div>
             </form>
         </Container>
     </Modal>
     <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} 
     anchorOrigin={{ vertical:"bottom", horizontal:"left" }}

     >
     <Alert onClose={handleClose} severity="success">
        This is a success alert!
      </Alert>
      

     </Snackbar>
    </>
  );
};

export default Add;