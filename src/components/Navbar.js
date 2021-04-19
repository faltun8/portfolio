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

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1,
    fontWeight: 200,
  },

  AppBar: {
    backgroundColor: "#EEEEEE",
    color: "black",
    boxShadow: "none",
    zIndex: 1,
  },
  toolbar: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 15,
    height: 40,
    minHeight: 0,
    color: "white",
    fontSize: 15,
    fontWeight: 400,
    zIndex: 1,
  },
  listItems: {
    display: "inline",
    marginLeft: 15,
    marginRight: 15,
    cursor: "pointer",
  },
  uList: {
    float: "right",
  color: 'black',
    fontFamily: "Poppins",
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
            <nav>
              {/* <Link to="about" className="logo" spy={true} smooth={true} duration={1000}>
                <img src={logo} alt="logo" />
              </Link> */}
              <ul className={classes.uList}>
                <li className={classes.listItems}>
                  <Link to="about" spy={true} smooth={true} duration={1000}>
                    ABOUT ME
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="projects" spy={true} smooth={true} duration={1000}>
                    PROJECTS
                  </Link>
                </li>
                <li className={classes.listItems}>
                  <Link to="skills" spy={true} smooth={true} duration={1000}>
                    SKILLS
                  </Link>
                </li>
                {/* <li className={classes.listItems}>
                  <Link to="education" spy={true} smooth={true} duration={1000}>
                    EDUCATION
                  </Link>
                </li> */}
                <li className={classes.listItems}>
                  <Link to="contact" spy={true} smooth={true} duration={1000}>
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
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
