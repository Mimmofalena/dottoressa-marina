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
  icon: {
    height: "32px",
    width: "32px",
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
  arrowIcon: {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    borderColor: "4px",
    backgroundColor: theme.palette.secondary[400],
    cursor: "pointer",
    position: "fixed",
    bottom: "3rem",
    left: "87%",
    marginBottom: "2rem",
    zIndex: "100",
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

export default useStyles;
