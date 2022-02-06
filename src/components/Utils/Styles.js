import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    color: theme.palette.text.secondary,
    borderRadius: "15px",
    transition: "1s ease",
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.5,
    },
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
  icon: {
    height: "32px",
    width: "32px",
  },
  textColor: {
    color: "#000000",
  },
  fontSizeMedium: {
    fontSize: "1.2em",
  },
  fontSizeLarge: {
    fontSize: "1.5em",
  },
  largeIcon: {
    transform: "scale(1.4)",
  },
  headerTitle: {
    textDecoration: "none",
    cursor: "default",
  },
  form: {
    minWidth: "100%",
  },
  arrowIcon: {
    height: "2rem",
    width: "2rem",
  },
  buttonArrowUp: {
    borderRadius: "50%",
    opacity: "0.8",
    position: "fixed",
    bottom: "2.2rem",
    left: "50%",
    marginBottom: "2rem",
    zIndex: "100",
    transition: "0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  linkContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4 ,minmax(0,1fr))",
    padding: "2rem",
  },
  linkContainerSmall: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },

  linkItem: {
    transition: "0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

export default useStyles;
