import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import landing from "../images/landing3.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

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
    fontFamily: "Poppins",
  },
  info: {
    fontSize: 20,
    fontWeight: 200,
    lineHeight: 1.5,
    color: "white",
  },
  button: {
    display: "flex",
    alignItems: "center",
    color: "white",
    marginTop: 10,
  },
  buttonItemRight: {
    marginRight: 10,
    color: "white",
  },
  buttonItemLeft: {
    marginLeft: 10,
    color: "white",
  },
  description: {
    marginTop: 10,
  }
}));

function Landing() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.background}>
      <div className={classes.background2}>
        <div class="header">
          "Hi.
          <br />
          My name is furkan
          <br />
          I'm a Frontend Developer!"
          <div className={classes.description}>
            <p className={classes.info}>
              I'm currently living in Mississauga, Ontario. My favorite technologies right now are React, React-Native and NodeJS!
            </p>
            <p className={classes.info}>
              In addition to my passion for IT, I'm interested calligraphy and visual arts for more than 10 years. '
            </p>
          </div>
          <ButtonGroup
            variant="text"
            aria-label="text primary button group"
            className={classes.button}
          >
            <Button className={classes.button} href="https://github.com/faltun8">
              <GitHubIcon className={classes.buttonItemRight} /> GitHub
            </Button>
            <Button className={classes.button} href="https://www.linkedin.com/in/faltun/">
              <LinkedInIcon className={classes.buttonItemRight} /> LinkedIn
            </Button>
            <Button className={classes.button} href="https://www.youtube.com/channel/UCXpv0AWAFX9dRvCybDBgeYQ">
              <YouTubeIcon className={classes.buttonItemRight} /> YouTube
            </Button>
            <Button className={classes.button} href="https://www.instagram.com/lettersbyfurkan/">
              <InstagramIcon className={classes.buttonItemRight} /> Instagram
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Landing;
