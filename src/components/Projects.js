import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/Card";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "auto",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "white",
    padding: "30px 130px",
    fontFamily: "sans-serif",
  },
  gridArea: {
    display: "flex",
    height: "auto",
    width: "auto",
    color: "rgb(255, 255, 255)",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    fontFamily: "sans-serif",
  },
  colomn: {
    order: 1,
    fontFamily: "sans-serif",
    height: "auto",
    width: "auto",
    minWidth: 310,
    maxWidth: 900,
  },
  title: {
    textAlign: 'center',
    fontFamily: "Poppins",
    marginBottom: 20,
    fontSize: 45,
  }

  // colomn2: {
  //   order: 1,
  //   backgroundColor: "red",
  //   border: "1px solid black",
  //   minWidth: 100,
  // },
  // colomn3: {
  //   order: 1,
  //   backgroundColor: "red",
  //   border: "1px solid black",
  //   minWidth: 100,
  // },
}));

function Projects() {
  const classes = useStyles();
  const { folder } = useGlobalContext();
  return (
    <div id="projects" className={classes.background}>
      <Modal folder={folder} />
      <h1 className={classes.title}>PROJECTS</h1>
      <div className={classes.gridArea}>
        <div className={classes.colomn}>
          <Card
            pic="11"
            title="Blog App"
            myFolder="blog"
            description={
              "• Designed to be similar to popular social media platforms \n• Blog page, crud operations \n• Register, login, like, comment, daily page hits and posted date features"
            }
            gitLink="https://github.com/faltun8/awesome-blog"
            deployment="https://awesome-blog-react.herokuapp.com/"
          />
          <Card
            pic="21"
            title="Restaurant App"
            myFolder="restaurant"
            description={
              "• Application that shows restaurants in a city on a world map \n• In each city selection, restaurants are marked on the map \n• Google Map API is used for this project"
            }
            gitLink="https://github.com/faltun8/ReastaurantMapApp"
            deployment="https://awesome-blog-react.herokuapp.com/"
          />
        </div>
        <div className={classes.colomn}>
          <Card
            pic="21" //change
            title="Social Media"
            myFolder="restaurant"
            description={
              "• Designed to be similar to popular social media platforms \n• User can sign up and sign in and user information is being kept in firebase. \n•'dummyAPI' is used in this project for creating user profiles \n• Responsive web design"
            }
            gitLink="https://github.com/faltun8/react-media"
            deployment="https://media-react.herokuapp.com/"
          />
          <Card
            pic="11"
            title="Book Store"
            myFolder="blog"
            description={"Basic e-commerce web site for book purchasing."}
            gitLink="https://github.com/faltun8/MERN-Stack1"
            deployment="https://node-mongo-1.herokuapp.com/"
          />
        </div>
        <div className={classes.colomn}>
          <Card
            pic="11"
            title="Blog App"
            myFolder="blog"
            description={
              "• Designed to be similar to popular social media platforms \n• Blog page, crud operations \n• Register, login, like, comment, daily page hits and posted date features"
            }
            gitLink="https://github.com/faltun8/awesome-blog"
            deployment="https://awesome-blog-react.herokuapp.com/"
          />
          <Card
            pic="21"
            title="RESTAURANT FINDER APP"
            myFolder="restaurant"
            description={
              "Created this app for finding best restaurants in the city that you have selected • I used free api for this project"
            }
            gitLink="https://github.com/faltun8/ReastaurantMapApp"
            deployment="https://awesome-blog-react.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
