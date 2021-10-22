import Layout from "./components/Utils/Layout";
import {
 BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useStyles from "./components/Utils/Styles";
import { Box } from "@material-ui/core";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Maps from "./components/Map/Maps";
import ServiziOfferti from "./components/ServiziOfferti/ServiziOfferti";
import { Grid, Container, Divider ,CssBaseline,} from "@material-ui/core";
import Slider from "./components/Slider/Slider";
import Curriculum from "./components/Curriculum/Curriculum";
import Contacts from "./components/Contacts/Contacts";
import DomandeFrequenti from "./components/DomandeFrequenti/DomandeFrequenti";
import { Element } from "react-scroll";
import ScrollToTop from "../src/components/Utils/ScrollToTop";





function App() {
  const classes = useStyles()
  return (
  
    <Layout>
   
</Layout>


   


  
    
      
    
  );
}

export default App;




// <>
    // <CssBaseline/>
    // <Header/>
     
    
    
    // <Container >
    //   <Grid
    //     container
    //     display="flex"
    //     direction='column'
    //     justifyContent='space-between'
    //     spacing={6}
    //   >


    //     <Grid item xs={2}></Grid>

    //     <ScrollToTop/>

    //     <Grid item>
    //       <Slider />
    //     </Grid>

    

    //     <Grid item xs={2}></Grid>
       
    //     <Grid  item xs={12}>
    //       <Divider/>
    //     </Grid>

    //     <Grid item xs={2}></Grid>


    //     <Grid item  xs={12}>
    //      <Element id='servizi-offerti' >
    //       <ServiziOfferti  />
    //      </Element>

          
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid  item xs={12}>
    //       <Divider/>
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid item xs={12}>
    //       <Element id='curriculum'>
    //       <Curriculum />
    //       </Element>
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid  item xs={12}>
    //       <Divider/>
    //     </Grid>
                       
        
    //     <Grid item xs={12}>
    //       <Element id='domande-frequenti'>
    //      <DomandeFrequenti/>
    //       </Element>
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid  item xs={12}>
    //       <Divider/>
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid item xs={12}>
    //       <Element id='contattami'>

    //       <Contacts />
    //       </Element>
    //     </Grid>

    //     <Grid item xs={2}></Grid>

    //     <Grid  item xs={12}>
    //       <Divider/>
    //     </Grid>


    

    //     <Grid item xs={12}>
    //       <Element id='dove-trovarmi'>
    //       <Maps />

    //       </Element>
    //     </Grid> 

    //     <Grid item xs={2}></Grid>

    //     <Grid  item xs={12}>
    //     <Divider/>
    //   </Grid>


    //   </Grid>
    //    </Container>
    //    <Footer />

    //    </>