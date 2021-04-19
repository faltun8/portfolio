import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "auto",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "black",
    padding: "30px 130px",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    fontFamily: "Poppins",
    marginBottom: 20,
    fontSize: 45,
    color: "white",
  },
  button: {
    display: "flex",
    alignItems: "center",
    color: "white",
    marginTop: 10,
    justifyContent: "center",
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
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.background}>
      {/* <h1 className={classes.title}>CONTACT</h1> */}
      <div>
        <ButtonGroup
          variant="text"
          aria-label="text primary button group"
          className={classes.button}
        >
          <Button className={classes.button} href="https://github.com/faltun8">
            <GitHubIcon className={classes.buttonItemRight} /> GitHub
          </Button>
          <Button
            className={classes.button}
            href="https://www.linkedin.com/in/faltun/"
          >
            <LinkedInIcon className={classes.buttonItemRight} /> LinkedIn
          </Button>
          <Button
            className={classes.button}
            href="https://www.youtube.com/channel/UCXpv0AWAFX9dRvCybDBgeYQ"
          >
            <YouTubeIcon className={classes.buttonItemRight} /> YouTube
          </Button>
          <Button
            className={classes.button}
            href="https://www.instagram.com/lettersbyfurkan/"
          >
            <InstagramIcon className={classes.buttonItemRight} /> Instagram
          </Button>
          <Button className={classes.button} href="mailto:frknaltn08@gmail.com">
            <MailIcon className={classes.buttonItemRight} /> Mail
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Contact;
