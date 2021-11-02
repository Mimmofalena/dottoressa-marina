import React from 'react'
import { Box, Card, CardMedia } from '@material-ui/core'
import DomandeFrequenti from '../DomandeFrequenti/DomandeFrequenti'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Curriculum from '../Curriculum/Curriculum'
import Header from '../Header/Header'
import useStyles from './Styles'
import { Switch, Route } from 'react-router'
import ServiziOfferti from '../ServiziOfferti/ServiziOfferti'
import ScrollToTop from './ScrollToTop'
import Maps from '../Map/Maps'
import MarinaPic from '../../assets/marina-studio-medico.jpeg'
import CssBaseline from '@material-ui/core/CssBaseline';


const Layout = ({children}) => {
    
    const classes = useStyles()
    return (
        <div>
            <CssBaseline/>
            <Header  />
        <Card className={classes.imageContainer}>
            <CardMedia alt='dottoressa sorridente parla al telefono' component='img' src={MarinaPic}>

            </CardMedia>
        </Card>
        

  <Switch>
      <Route exact path="/">
  <Box className={classes.toolbar}></Box>
  <ServiziOfferti/>

  <Curriculum />

  <DomandeFrequenti/>

  <Contacts/>
  
  <ScrollToTop />




  


  <Maps/>

      </Route>
      </Switch>
      <Footer/>
            {children}
        </div>
    )
}

export default Layout
