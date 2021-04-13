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
    
  },
  root: {
    marginBottom: 50,
    width: 345,
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    boxShadow: "none",
    '&:hover': {
      boxShadow: "5px 10px 30px rgba(54, 54, 54, 0.411)",
   },
    
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
});

export default function MediaCard({
  pic,
  title,
  description,
  myFolder,
  gitLink,
  deployment,
}) {
  const { openModal, folder,  setFolder } = useGlobalContext();
  const classes = useStyles();

  const newDesc = description.split("\n").map((str) => <p>{str}</p>);

  const onClickHandle = () => {
    setFolder(myFolder);
    console.log('myFolder :', folder);
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
          <a href={gitLink}>
            <GitHubIcon />
          </a>
        </Button>
        <Button size="small" color="primary">
          <a href={deployment}>DEPLOYMENT</a>
        </Button>
      </CardActions>
    </Card>
  );
}
