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
  background2: {
    width: "100%",
    height: "850px",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    fontFamily: 'Poppins',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.background}>
      <div id="about" className={classes.background2}>
        <div class='header'>
          "Hi.
          <br/>
          My name is furkan
          <br/>
          I'm a Frontend Developer"

        </div>
      </div>
    </div>
  );
}

export default About;
