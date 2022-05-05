import React from 'react'
import SliderItem from './SliderItem'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Carousel from 'react-material-ui-carousel'
import MarinaStudioImg from '../../assets/marina-studio-medico.jpeg'
import MarinaStudioImg2 from '../../assets/marina-studio-medico-2.jpeg'


const DUMMY_IMGS = [ {
    title: 'marina-studio',
    src:MarinaStudioImg,
    id:'01',
    alt:'medico in studio'
},
{
    title: 'marina-studio-2',
    src:MarinaStudioImg2
    ,
    id:'02',
    alt:'medico in studio'
},

]
    


 
const Slider = () => {

    
 
    return (
    
        <>
    <Carousel  navButtonsAlwaysVisible={false}  NextIcon={<ArrowForwardIcon/> }
    PrevIcon={<ArrowBackIcon/>} >

            {DUMMY_IMGS.map(item=> { 
                return <SliderItem key={item.id} src={item.src } title={item.title} />              
                
            })} 
            
        </Carousel></>
    )
}




export default Slider
