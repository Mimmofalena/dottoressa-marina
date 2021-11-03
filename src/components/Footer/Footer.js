import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  
  Grid,
  useTheme,
  //  Hidden, Link
} from "@mui/material";
// import {Link as Scroll} from 'react-scroll'
// import facebookIcon from "../../assets/facebook-icon.svg";
// import twitterIcon from "../../assets/twitter-icon.svg";
// import instagramIcon from "../../assets/instagram-icon.svg";
// import mailIcon from "../../assets/mail-icon.svg";
import copyrightIcon from "../../assets/copyright-icon.svg";

import useStyles from "../Utils/Styles";



const Footer = () => {

  const classes = useStyles()
  const theme = useTheme()
 
  
  return (
    
    
    <AppBar style={{backgroundColor:theme.palette.primary[400]}}  position="sticky">
      <Toolbar>
        <Grid container justifyContent='center' alignItems='center' spacing={1}>
          <Grid item>
          <Typography variant='h6' component='h5' > Powered by Dom 
 </Typography>
          </Grid>
          <Grid item>
          <img
          src={copyrightIcon}
          alt="a black copyright icon"
          className={classes.iconSvg}
        />
          </Grid>
        </Grid>
      </Toolbar>
      {/* <Toolbar>
        <Grid container display='flex' justifyContent='space-between' alignItems='center' spacing={2} >
<Hidden xsDown>

<Grid item  sm={4}></Grid>
</Hidden>


  <Grid alignItems='center' justifyContent='center' container item xs={12} sm={4} spacing={1}>
    <Grid item > 
    <Typography> Powered by Dom 
 </Typography>
    </Grid>

    <Grid item>
   
    <img
          src={copyrightIcon}
          alt="a black copyright icon"
          className={classes.iconSvg}
        />
     

    </Grid>
   
</Grid>



<Grid alignItems='center'  container item  xs={12} sm={4} display='flex'   justifyContent='space-between'>

  <Grid item>
    <Link href='https://www.facebook.com/marina.tricoli' target='_blank'>
  <img
          src={facebookIcon}
          alt="facebook social media icon link"
          className={classes.iconSvg}
        />
    </Link>
  </Grid>

  <Grid item>
  <Link href='https://www.instagram.com/maritric3/' target='_blank'>

  <img
          src={instagramIcon}
          alt="instagram social media icon link"
          className={classes.iconSvg}
        />
  </Link>

  </Grid>

  <Grid item>
    <Scroll to='contattami' smooth={true} duration={500} >
  <img
          src={mailIcon}
          alt="email icScroll"
          className={classes.iconSvg}
        />
    </Scroll>

  </Grid>

  <Grid item>
    <Link href='#'>
  <img
          src={twitterIcon}
          alt="twitter social media icon link"
          className={classes.iconSvg}
        />
    </Link>

  </Grid>


</Grid>


        </Grid>
      </Toolbar> */}
    </AppBar>

  );
};

export default Footer;
