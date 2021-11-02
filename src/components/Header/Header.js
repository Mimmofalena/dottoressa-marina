import React from "react";
import {
  AppBar,Toolbar,
  Typography,
  Button,
   MenuList, MenuItem, Grid, Hidden, Menu, Container,} from "@material-ui/core";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-scroll'
import useStyles from "../Utils/Styles";
import { useTheme } from "@material-ui/core";





const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };





 
  return (
<>
      <AppBar style={{backgroundColor:theme.palette.primary[400]}}>
        <Toolbar>

{/* /small Screen size  */}
<Hidden smUp>
<Grid container justifyContent='space-between' alignItems='center' >

<Grid item>
<Container >
  
    <MuiLink component={RouterLink} to='/'  >
          <Typography color='textSecondary' align='center' component='h1' > Dott.ssa Marina Tricoli</Typography>
    </MuiLink>
 </Container>
</Grid>



<Grid item>

<Container>
       <IconButton  size='small'  href="tel:+393512530433">
         <PhoneAndroidIcon  />
       </IconButton>

        </Container>

</Grid>



<Grid item>

<Container>


<IconButton size='small'  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MoreHorizIcon />
     </IconButton>
   <Menu id="simple-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
       >

<Link  offset={-80}
     to='servizi-offerti' smooth={true} duration={1000}
     >
     
       <MenuItem onClick={handleClose}>Servizi Offerti</MenuItem>
     </Link> 

     <Link  offset={-80}  to='curriculum' smooth={true} duration={1000} >
       <MenuItem onClick={handleClose}>Il mio curriculum</MenuItem>
     
     </Link>
     <Link  offset={-80} to='domande-frequenti' smooth={true} duration={1000}>
     
       <MenuItem onClick={handleClose}>Domande Frequenti</MenuItem>
     </Link>
     <Link  offset={-80} to='contattami' smooth={true} duration={1000}>
       <MenuItem onClick={handleClose}>Contattami</MenuItem>
     
     </Link>
     <Link  offset={-80} to='dove-trovarmi' smooth={true} duration={1000}>
       <MenuItem onClick={handleClose}>Dove trovarmi</MenuItem>
     
     </Link>
     </Menu>
     </Container>

</Grid>
</Grid>
</Hidden>




{/* /medium Screen size  */}

<Hidden mdUp xsDown>
<Grid container justifyContent='space-between' alignItems='center' >

<Grid item>
<Container >
<MuiLink component={RouterLink} to='/' >
          <Typography color='textSecondary' align='center' component='h1' variant='h5' > Dott.ssa Marina Tricoli</Typography>
 </MuiLink>
 </Container>
</Grid>



<Grid item>

<Container>
       <Button startIcon={<PhoneAndroidIcon/>} size='medium'  href="tel:+393512530433">
       3512530433
       </Button>

        </Container>

</Grid>



<Grid item>

<Container>


<Button size='medium'  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Menu
     </Button>
   <Menu id="simple-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
       >

<Link  offset={-80}
     to='servizi-offerti' smooth={true} duration={1000}  
     >
     
       <MenuItem onClick={handleClose}>Servizi Offerti</MenuItem>
     </Link> 

     <Link  offset={-80} to='curriculum' smooth={true} duration={1000} >
       <MenuItem onClick={handleClose}>Il mio curriculum</MenuItem>
     
     </Link>
     <Link  offset={-80} to='domande-frequenti' smooth={true} duration={1000}>
     
       <MenuItem onClick={handleClose}>Domande Frequenti</MenuItem>
     </Link>
     <Link  offset={-80} to='contattami' smooth={true} duration={1000}>
       <MenuItem onClick={handleClose}>Contattami</MenuItem>
     
     </Link>
     <Link  offset={-80} to='dove-trovarmi' smooth={true} duration={1000}>
       <MenuItem onClick={handleClose}>Dove trovarmi</MenuItem>
     
     </Link>
     </Menu>
     </Container>

</Grid>
</Grid>
</Hidden>










{/* /large Screen size  */}
    
    <Hidden smDown>
<Grid container justifyContent='space-between' alignItems='center' >

<Grid item md={6}>
<Container >
<MuiLink component={RouterLink} to='/' >

          <Typography color='textSecondary' align='center' component='h1' variant='h4' > Dott.ssa Marina Tricoli</Typography>
  </MuiLink>
 </Container>
</Grid>



<Grid item md={6} container justifyContent='center'>
<Grid item>
  
<Container>
       <Button startIcon={<PhoneAndroidIcon/>} size='large'  href="tel:+393512530433">
       3512530433
       </Button>
        </Container>
</Grid>

</Grid>



<Grid item xs={12} >
   <Container >
     
   <MenuList className={classes.menu}
      >       
      <Link  offset={-80}
      to='servizi-offerti' smooth={true} duration={1000} 
      >
      
        <MenuItem  className={classes.menuItem} onClick={handleClose}>Servizi Offerti</MenuItem>
      </Link> 

      <Link  offset={-80} to='curriculum' smooth={true} duration={1000} >
        <MenuItem className={classes.menuItem} onClick={handleClose}>Il mio curriculum</MenuItem>
      
      </Link>
      <Link  offset={-80} to='domande-frequenti' smooth={true} duration={1000}>
      
        <MenuItem className={classes.menuItem} onClick={handleClose}>Domande Frequenti</MenuItem>
      </Link>
      <Link  offset={-80} to='contattami' smooth={true} duration={1000}>
        <MenuItem className={classes.menuItem} onClick={handleClose}>Contattami</MenuItem>
      
      </Link>
      <Link  offset={-80} to='dove-trovarmi' smooth={true} duration={1000}>
        <MenuItem className={classes.menuItem} onClick={handleClose}>Dove trovarmi</MenuItem>
      
      </Link>
      </MenuList>
    </Container>
    </Grid>

</Grid>
</Hidden>

        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      </>
      
  );
};

export default Header;
