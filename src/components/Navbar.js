import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100,
  },

  AppBar: {
    backgroundColor: "rgba(52, 52, 52, 0.0001)",
    color: "black",
    boxShadow: "none",
  },
  toolbar: {
    alignSelf: "center",
    
  },
  listItems: {
    display: "inline",
    margin: 30,
  },
  uList: {
    float: "right",
    marginLeft: 100,
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar className={classes.toolbar}>
            <nav className={classes.listItems}>
              <Link to="main" className="logo">
                <img src={logo} alt="logo" />'
              </Link>
              <ul className={classes.uList}>
                <li className={classes.listItems}>
                  <Link
                    to="about"
                    className="active"
                    smooth={true}
                    duration={1000}
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="projects" smooth={true} duration={1000}>
                    PROJECTS
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="skills" smooth={true} duration={1000}>
                    SKILLS
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="education" smooth={true} duration={1000}>
                    EDUCATION
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="contact" smooth={true} duration={1000}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
