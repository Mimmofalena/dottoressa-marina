import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const showSidebar = (e) => {
    e.stopPropagation();
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <div>
      {!sidebarIsOpen ? (
        <IconButton onClick={showSidebar}>
          <MoreHorizIcon className={style.icon} />
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
          </ul>
        </>
      )}
    </div>
  );
};

export default Menus;
