import { makeStyles} from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";


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
    }
    
}))





export default useStyles





