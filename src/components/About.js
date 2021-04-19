import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "950px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#000000",
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
