import React, { useState,useEffect,useRef } from 'react'
import CarouselItem from './CarouselItem'
import MarinaStudioImg from '../../assets/marina-studio-medico.jpeg'
import MarinaStudioImg2 from '../../assets/marina-studio-medico-2.jpeg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import classes from '../Carousel/Carousel.module.css'



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
    alt:'medico in studio che sorride'
},{
    title: 'marina-studio',
    src:MarinaStudioImg,
    id:'03',
    alt:'medico in studio'
},{
    title: 'marina-studio',
    src:MarinaStudioImg,
    id:'04',
    alt:'medico in studio'
},]

const Carousel = (props) => {

    
    const [current, setcurrent] = useState(0)
    const autoplayRef = useRef()
    const length = DUMMY_IMGS.length
    console.log(current);
   

    const prevSlide = ()=> {
        
        setcurrent(current === 0? length-1 : current -1)
       
    }

    const nextSlide = () => {

 setcurrent(current === length -1? 0 : current+1)

        
    }

    //1st use effect


    // useEffect(() => {

       
        
    //     setTimeout(() => {
    //         if(current === length -1) {
    //             return
    //         }
    //         setcurrent(current+1)
    //     }, 2000);
    //     console.log('I am autoplayref.current');
    // },[current])

    //2nd use effect

// useEffect(() => {

//     const play = ()=> {
//         autoplayRef.current()
//     }

//     const interval = setTimeout(play, 2000)

//     return ()=> {
//         console.log('i am inside cleanup');
//         clearTimeout(interval)
//     }
    
// }, [autoplayRef.current])


   
    
    

    if(!Array.isArray(DUMMY_IMGS) || DUMMY_IMGS.length <=0) {
        return null
    }


        const moveDot = (index) => {
            setcurrent(index)
        }
   

    

    return (
        <div className={classes.container}>
           
            
        <div className={classes.slider}>

         <div className={classes.containerDots}>
         {Array.from({length: DUMMY_IMGS.length}).map((item, index) => (
             <div 
             onClick={()=> moveDot(index)}
             className={current === index ? classes.dotActive : classes.dot}
             ></div>
             ))}
            
             
        </div>    
             <div className={classes.dotActive}></div>

           
            

        

<ArrowBackIcon className={classes.arrowBack} onClick={prevSlide} />
            <ArrowForwardIcon className={classes.arrowForward} onClick={nextSlide}/>
        
            {DUMMY_IMGS.map((image,index)=> {
                return <div key={index} className={index === current ? classes.slideActive : classes.slide}>
                    {index === current && (
                        
                        <CarouselItem key={index} src={image.src} alt={image.alt} />)}

                </div>
              
            })} 
        </div>

            </div>
    )
}


export default Carousel
