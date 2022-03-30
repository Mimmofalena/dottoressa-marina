import React from "react";
import Menus from "./Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuList,
  MenuItem,
  Grid,
  Hidden,
  Menu,
  Container,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-scroll";
import useStyles from "../Utils/Styles";
import { useTheme } from "@mui/material";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: theme.palette.primary[300] }}>
        <Toolbar>
          {/* ***********************************************Small screen size******************************************   */}

          <Hidden smUp>
            <Container>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    color="textPrimary"
                    align="center"
                    component="h1"
                    variant="h6"
                    fontWeight={500}
                  >
                    <Link
                      offset={-80}
                      smooth={true}
                      duration={1000}
                      className={classes.headerTitle}
                      component={RouterLink}
                      to="home"
                    >
                      Dr.ssa Marina Tricoli
                    </Link>
                  </Typography>
                </Grid>

                <Grid item>
                  <IconButton
                    className={classes.textColor}
                    size="small"
                    href="tel:+393512530433"
                  >
                    <PhoneAndroidIcon />
                  </IconButton>
                </Grid>
                <Menus />

                {/* <Grid item>
                  <IconButton
                    className={classes.textColor}
                    size="small"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link
                      offset={-80}
                      to="servizi-offerti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Servizi Offerti</MenuItem>
                    </Link>

                    <Link
                      offset={-80}
                      to="curriculum"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>
                        Il mio curriculum
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="domande-frequenti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>
                        Domande Frequenti
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="contattami"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Contattami</MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="dove-trovarmi"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Dove trovarmi</MenuItem>
                    </Link>
                  </Menu>
                </Grid> */}
              </Grid>
            </Container>
          </Hidden>

          {/* ***********************************************Medium screen size******************************************   */}

          <Hidden mdUp smDown>
            <Container>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    fontWeight={500}
                    color="textPrimary"
                    align="center"
                    component="h1"
                    variant="h5"
                  >
                    <Link
                      offset={-80}
                      smooth={true}
                      duration={1000}
                      component={RouterLink}
                      to="home"
                      className={classes.headerTitle}
                    >
                      {" "}
                      Dott.ssa Marina Tricoli
                    </Link>
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    className={[classes.textColor, classes.fontSizeMedium].join(
                      " , "
                    )}
                    startIcon={<PhoneAndroidIcon />}
                    size="medium"
                    href="tel:+393512530433"
                  >
                    3512530433
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    className={[classes.textColor, classes.fontSizeMedium].join(
                      " , "
                    )}
                    size="medium"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Menu
                  </Button>
                  <Menu
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link
                      offset={-80}
                      to="servizi-offerti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Servizi Offerti</MenuItem>
                    </Link>

                    <Link
                      offset={-80}
                      to="curriculum"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>
                        Il mio curriculum
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="domande-frequenti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>
                        Domande Frequenti
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="contattami"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Contattami</MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="dove-trovarmi"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem onClick={handleClose}>Dove trovarmi</MenuItem>
                    </Link>
                  </Menu>
                </Grid>
              </Grid>
            </Container>
          </Hidden>

          {/* ***********************************************large Screen size******************************************     */}

          <Hidden mdDown>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item md={8}>
                <Typography
                  fontWeight={500}
                  color="textPrimary"
                  align="left"
                  component="h1"
                  variant="h4"
                  p={3}
                >
                  {" "}
                  <Link
                    offset={-80}
                    smooth={true}
                    duration={1000}
                    component={RouterLink}
                    to="home"
                    className={classes.headerTitle}
                  >
                    Dott.ssa Marina Tricoli
                  </Link>
                </Typography>
              </Grid>

              <Grid item md={4} container justifyContent="center">
                <Button
                  className={[classes.textColor, classes.fontSizeLarge].join(
                    " , "
                  )}
                  startIcon={
                    <PhoneAndroidIcon
                      className={[classes.textColor, classes.largeIcon].join(
                        " , "
                      )}
                    />
                  }
                  size="large"
                  href="tel:+393512530433"
                >
                  3512530433
                </Button>
              </Grid>
              <Grid m={1} item xs={12}>
                <MenuList className={classes.menu}>
                  <Link
                    offset={-80}
                    to="servizi-offerti"
                    smooth={true}
                    duration={1000}
                  >
                    <MenuItem
                      className={[
                        classes.textColor,
                        classes.fontSizeLarge,
                        classes.menuItem,
                      ].join(" , ")}
                      onClick={handleClose}
                    >
                      Servizi
                    </MenuItem>
                  </Link>

                  <Link
                    offset={-80}
                    to="curriculum"
                    smooth={true}
                    duration={1000}
                  >
                    <MenuItem
                      className={[
                        classes.textColor,
                        classes.fontSizeLarge,
                        classes.menuItem,
                      ].join(" , ")}
                      onClick={handleClose}
                    >
                      Curriculum
                    </MenuItem>
                  </Link>
                  <Link
                    offset={-80}
                    to="domande-frequenti"
                    smooth={true}
                    duration={1000}
                  >
                    <MenuItem
                      className={[
                        classes.textColor,
                        classes.fontSizeLarge,
                        classes.menuItem,
                      ].join(" , ")}
                      onClick={handleClose}
                    >
                      Domande Frequenti
                    </MenuItem>
                  </Link>
                  <Link
                    offset={-80}
                    to="contattami"
                    smooth={true}
                    duration={1000}
                  >
                    <MenuItem
                      className={[
                        classes.textColor,
                        classes.fontSizeLarge,
                        classes.menuItem,
                      ].join(" , ")}
                      onClick={handleClose}
                    >
                      Contattami
                    </MenuItem>
                  </Link>
                  <Link
                    offset={-80}
                    to="dove-trovarmi"
                    smooth={true}
                    duration={1000}
                  >
                    <MenuItem
                      className={[
                        classes.textColor,
                        classes.fontSizeLarge,
                        classes.menuItem,
                      ].join(" , ")}
                      onClick={handleClose}
                    >
                      Dove trovarmi
                    </MenuItem>
                  </Link>
                </MenuList>
              </Grid>

              {/* <Grid  item xs={12}>
                  <MenuList className={classes.menu}>
                    <Link
                      offset={-80}
                      to="servizi-offerti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Servizi Offerti
                      </MenuItem>
                    </Link>

                    <Link
                      offset={-80}
                      to="curriculum"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Il mio curriculum
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="domande-frequenti"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Domande Frequenti
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="contattami"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Contattami
                      </MenuItem>
                    </Link>
                    <Link
                      offset={-80}
                      to="dove-trovarmi"
                      smooth={true}
                      duration={1000}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Dove trovarmi
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Grid> */}
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
};

export default Header;
