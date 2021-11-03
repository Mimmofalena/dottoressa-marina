import makeStyles from '@mui/styles/makeStyles';

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
    textColor:{
      color:'#000000'
    },
    headerTitle:{
      textDecoration:'none'
    }

    
}))





export default useStyles





