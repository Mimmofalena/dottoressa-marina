import { React, useState } from "react";
import { animateScroll } from "react-scroll";
import { Box, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useStyles from "./Styles";

const ScrollToTop = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Box
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    >
      {showScroll ? (
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.buttonArrowUp}
        >
          <ArrowUpwardIcon className={classes.arrowIcon} />
        </Button>
      ) : null}
      {/* {showScroll ? <ArrowUpwardIcon className={classes.arrowIcon} /> : null} */}
    </Box>
  );
};

export default ScrollToTop;
