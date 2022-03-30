import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuList,
  MenuItem,
  Menu,
  Grid,
  Hidden,
  Container,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "../Utils/Styles";
import { Link } from "react-scroll";
import style from "./Menu.module.css";

const menuList = [
  {
    name: "Servizi Offerti",
    to: "servizi-offerti",
  },
  {
    name: "Curriculum",
    to: "curriculum",
  },
  {
    name: "Domande Frequenti",
    to: "domande-frequenti",
  },
  {
    name: "Dove trovarmi",
    to: "dove-trovarmi",
  },
  {
    name: "Orari",
    to: "orari-studio",
  },
  {
    name: "Contattami",
    to: "contattami",
  },
];

const Menus = () => {
  const classes = useStyles();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const showSidebar = (e) => {
    e.stopPropagation();
    console.log(sidebarIsOpen);
    setSidebarIsOpen(!sidebarIsOpen);
  };

  // const closeHandler = () => {
  //   setSidebarIsOpen(false);
  // };

  return (
    <div>
      {!sidebarIsOpen ? (
        <IconButton onClick={showSidebar}>
          <MoreHorizIcon />
        </IconButton>
      ) : (
        <>
          <div onClick={showSidebar} className={style.backGround} />
          <ul className={style.containerList}>
            <li onClick={showSidebar} className={style.listItem}>
              X
            </li>
            {menuList.map((item) => {
              return (
                <li className={style.listItem}>
                  <Link
                    onClick={showSidebar}
                    offset={-80}
                    to={item.to}
                    smooth={true}
                    duration={1000}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* <li className={style.listItem}>
              <Link
                onClick={showSidebar}
                offset={-80}
                to="servizi-offerti"
                smooth={true}
                duration={1000}
              >
                Servizi Offerti
              </Link>
            </li> */}
            {/* <li>
            <Link
            onClick={showSidebar}
            offset={-80}
            to="curriculum"
            smooth={true}
            duration={1000}
            >
            Il mio curriculum
            </Link>
            </li>
            <li>
            <Link
            onClick={showSidebar}
            offset={-80}
            to="domande-frequenti"
            smooth={true}
            duration={1000}
            >
            Domande Frequenti
            </Link>
            </li>
            <li>
            <Link
            onClick={showSidebar}
            offset={-80}
            to="contattami"
            smooth={true}
            duration={1000}
            >
            Contattami
            </Link>
            </li>
            <li>
            <Link
            onClick={showSidebar}
            offset={-80}
            to="dove-trovarmi"
            smooth={true}
            duration={1000}
            >
            Dove trovarmi
            </Link>
          </li> */}
          </ul>
        </>
      )}
    </div>
  );
};

export default Menus;
