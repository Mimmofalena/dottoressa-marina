import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=> (
  {
  menu:{
      display:'flex',
      justifyContent:'space-between',
    },
    menuItem:{
     color: theme.palette.text.secondary
    },
    toolbar: theme.mixins.toolbar,
    inputField: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    card: {
      marginBottom:theme.spacing(2),
    },
    imageContainer: {     
      height:'auto',
      width:'100%'
    },

    
}))





export default useStyles





