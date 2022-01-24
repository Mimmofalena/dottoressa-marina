import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    color: theme.palette.text.secondary,
  },
  toolbar: theme.mixins.toolbar,
  inputField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
    // padding: "1rem",
    border: "none",
    boxShadow: "none",
  },
  imageContainer: {
    marginBottom: theme.spacing(2),
    // padding: "1rem",
    // height: "auto",
    // width: "80%",
    // margin: "1rem auto",
    // borderRadius: "15px",
  },
  textColor: {
    color: "#000000",
  },
  headerTitle: {
    textDecoration: "none",
  },
  form: {
    minWidth: "100%",
  },
}));

export default useStyles;
