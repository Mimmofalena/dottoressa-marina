import {useState} from 'react'
import { mapStyles } from './MapsStyles'
import { Box,  Card, CardContent } from '@material-ui/core'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { Typography, useTheme } from '@material-ui/core'
import useStyles from '../Utils/Styles'


const Maps = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [selected,setSelected] = useState(true)


const libraries = useState(['places'])
const mapContainerStyle = {
    width:'100%',
    height:'350px',
    margin:'auto'
}
const center = {
    lat: 38.1469877,
     lng: 13.3391305
}

const options = {
    styles:mapStyles,
    disableDefaultUI: true,

    
}


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if(loadError) {
    
        return <div>Map cannot be loaded right now, sorry</div>
    
    }
        
    if(!isLoaded)  {
        return <div>
        'Loading maps'
        </div>
    } 

    return     <Card className={classes.card} id='dove-trovarmi'  style={{backgroundColor:theme.palette.primary[400]}}>

        <CardContent>



  
        <Box p={2} >
        <Typography  gutterBottom variant='h4' align='center'>Dove trovarmi</Typography>
        </Box>
        
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center} options={options}>

        <Marker onClick={()=> {
            setSelected(true)
        }} position={{lat: 38.1469877, lng: 13.3391305}}  />
       { selected ? <InfoWindow position={{lat: 38.1469877, lng: 13.3391305}}   onCloseClick={()=>{setSelected(false)}}><div><h4>Dr.ssa Marina Tricoli</h4></div></InfoWindow> : null}
    </GoogleMap>
    
    <Box mt={1}>
        <Typography gutterBottom variant='h6' align='center'>Indirizzo: Via Emilia 34, Palermo</Typography>
    </Box>
  
        </CardContent>
    </Card>
       
}

export default Maps
