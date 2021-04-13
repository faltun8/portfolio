import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "850px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#e6ee9c",
  },
  
}));

function About() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.background}>
     
    </div>
  );
}

export default About;
