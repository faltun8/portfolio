import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useGlobalContext } from "../context";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  imgRoot: {
    width: 345,
    minHeight: 100,
    textAlign: "center",
    borderRadius: 15,
    margin: "auto",
  },
  root: {
    marginBottom: 50,
    width: 345,
    minHeight: 100,
    borderRadius: 15,
    backgroundColor: "#eeeeee",
    boxShadow: "1px 1px 8px rgb(50, 50, 50, 0.2)",
    "&:hover": {
      boxShadow: "5px 10px 30px rgba(54, 54, 54, 0.411)",
    },
  },
  tech: {
    fontWeight: "bold",
  },
  media: {
    maxWidth: 345,
    maxHeight: 400,
    backgroundSize: "contain",
  },
  CardActions: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  links: {
    "&:link": {
      color: "rgba(0, 0, 0, 0.841)",
      textDecoration: "none",
    },
    "&:visited": {
      color: "rgba(0, 0, 0, 0.841)",
      textDecoration: "none",
    },
  },
  noDeployment: {
    opacity: 0.3,
    cursor: "not-allowed"
  }
});

export default function MediaCard({
  pic,
  title,
  description,
  myFolder,
  gitLink,
  deployment,
  technologies,
}) {
  const { openModal, setFolder } = useGlobalContext();
  const classes = useStyles();

  const newDesc = description.split("\n").map((str) => <p>{str}</p>);

  const onClickHandle = () => {
    setFolder(myFolder);
    openModal();
  };

  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.imgRoot}>
          <img
            src={`/${pic}.png`}
            alt="preview of app"
            className={classes.media}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.tech}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Technologies: {technologies}
            <br/>
            <br/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newDesc}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="black" onClick={() => onClickHandle()}>
          SEE MORE
        </Button>
        <Button size="small" color="primary">
          <a className={classes.links} href={gitLink}>
            <GitHubIcon />
          </a>
        </Button>
        <Button size="small" color="primary" className={!deployment && classes.noDeployment}>
          <a className={classes.links} href={deployment}>
            DEPLOYMENT
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
