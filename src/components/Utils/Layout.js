import React from 'react'
import { Box } from '@material-ui/core'
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


const Layout = ({children}) => {
    
    const classes = useStyles()
    return (
        <div>
            <Header  />
  <Box className={classes.toolbar}></Box>

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
