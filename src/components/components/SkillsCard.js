import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  imgRoot: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  root: {
    textAlign: "center",
    margin:15,
    width: "auto",
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "none",
    paddingTop:10,
    "&:hover": {
      boxShadow: "5px 10px 30px rgba(54, 54, 54, 0.411)",
    },
  },
  img: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default function SkillsCard({ logoList, title }) {
  const classes = useStyles();

  // const newDesc = description.split("\n").map((str) => <p>{str}</p>);

  return (
    <Card className={classes.root}>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <div className={classes.imgRoot}>
          {logoList.map((logo, index) => {
            return (
              <div key={index}>
                <img src={logo.image} alt="previews" className={classes.img} />
                <p>{logo.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
