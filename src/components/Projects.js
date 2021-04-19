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
            pic="21"
            title="RESTAURANT FINDER APP"
            myFolder="restaurant"
            technologies={"React Native"}
            description={
              "• Created this app for finding best restaurants in the city that you have selected \n• 'Opentable' and 'Google map' APIs are used for this project"
            }
            gitLink="https://github.com/faltun8/ReastaurantMapApp" 
          />
          <Card
            pic="41"
            title="Menu App"
            myFolder="menu"
            technologies={"Javascript, HTML5, CSS"}
            description={
              "• Restaurant menu design for web applications"
            }
            gitLink="https://github.com/faltun8/menu"
            deployment="https://faltun8.github.io/menu/"
          />
        </div>
        <div className={classes.colomn}>
          <Card
            pic="31"
            title="Social Media"
            myFolder="media"
            technologies={"React, Material UI, Firebase"}
            description={"• Designed to be similar to popular social media platforms \n• User can sign up and sign in and user information is being kept in firebase. \n•'dummyAPI' is used in this project for creating user profiles \n• Responsive web design"}
            gitLink="https://github.com/faltun8/react-media"
            deployment="https://media-react.herokuapp.com/"
          />
          <Card
            pic="61"
            title="Book Store"
            myFolder="bookstore"
            technologies={"MongoDB, ExpressJS, React, NodeJS, Ant Design"}
            description={"• Basic e-commerce web site for book purchasing. \n• Created with MERN Stack. \n• Responsive web design"}
            gitLink="https://github.com/faltun8/MERN-Stack1"
            deployment="https://node-mongo-1.herokuapp.com/"
          />
          <Card
            pic="71"
            title="Checkout Page"
            myFolder="checkout"
            technologies={"Javascript, HTML5, CSS"}
            description={"• Checkout Page for online purchases"}
            gitLink="https://github.com/faltun8/Checkout-Page"
            deployment="https://faltun8.github.io/Checkout-Page/"
          />
        </div>
        <div className={classes.colomn}>
        <Card
            pic="11"
            title="Blog App"
            myFolder="blog"
            technologies={"React, Material UI"}
            description={
              "• Designed to be similar to popular social media platforms \n• Blog page, crud operations \n• Register, login, like, comment, daily page hits and posted date features"
            }
            gitLink="https://github.com/faltun8/awesome-blog"
            deployment="https://awesome-blog-react.herokuapp.com/"
          />
           <Card
            pic="51"
            title="Job Search App"
            myFolder="job"
            technologies={"React Native"}
            description={
              "• Mobile Application for job search as a developer \n• You may search for a job related with a specific programming language"
            }
            gitLink="https://github.com/faltun8/JobSearchApp"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
