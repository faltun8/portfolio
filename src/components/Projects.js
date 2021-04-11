import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import landing from "../images/landing.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "850px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${landing})`,
  },
}));

function Projects() {
  const classes = useStyles();
  return (
      <div id="projects" className={classes.background}>
      <p>deneme projects</p>
      </div>
  )

  

}

export default Projects;
