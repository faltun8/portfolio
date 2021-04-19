import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SkillsCard from "./components/SkillsCard";

const frontEndLogo = [
  {
    image: "/logos/html.png",
    title: "HTML",
  },
  {
    image: "/logos/css.png",
    title: "CSS",
  },
  {
    image: "/logos/javascript.png",
    title: "JavaScript",
  },
  {
    image: "/logos/react.png",
    title: "React",
  },
  {
    image: "/logos/sass.png",
    title: "SASS",
  },
  {
    image: "/logos/bootstrap.png",
    title: "Bootstrap",
  },
];

const mobile = [
  {
    image: "/logos/reactnative.png",
    title: "React Native",
  },
];

const backEnd = [
  {
    image: "/logos/nodejs.png",
    title: "NodeJS",
  },

  // {
  //   image: "/logos/django.png",
  //   title: "Django",
  // },
  {
    image: "/logos/python.png",
    title: "Python",
  },
  {
    image: "/logos/firebase.png",
    title: "FireBase",
  },
];

const databases = [
  {
    image: "/logos/postgresql.png",
    title: "PostgreSQL",
  },
  {
    image: "/logos/mysql.png",
    title: "MySQL",
  },
  // {
  //   image: "/logos/microsoftsql.png",
  //   title: "Microsoft SQL",
  // },
  {
    image: "/logos/mongodb.png",
    title: "Mongo DB",
  },
];

const tools = [
  {
    image: "/logos/git.png",
    title: "Git",
  },
  {
    image: "/logos/jira.png",
    title: "Jira",
  },
  {
    image: "/logos/postman.png",
    title: "Postman",
  },
  {
    image: "/logos/asana.png",
    title: "Asana",
  },
];

const methodologies = [
  {
    image: "/logos/agile.png",
    title: "Agile",
  },
  {
    image: "/logos/scrum.png",
    title: "Scrum",
  },
  {
    image: "/logos/kanban.png",
    title: "Kanban",
  },
];

const operationSystems = [
  {
    image: "/logos/linux.png",
    title: "Linux",
  },
  {
    image: "/logos/macos.png",
    title: "MacOS",
  },
  {
    image: "/logos/windows.png",
    title: "Windows",
  },
  {
    image: "/logos/ios.png",
    title: "IOS",
  },
  {
    image: "/logos/android.png",
    title: "Android",
  },
];


const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "auto",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#eeeeee",
    fontFamily: "Poppins",
    padding: 40,
  },
  title: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 45,
  },
  gridArea: {
    display: "flex",
    height: "auto",
    width: "auto",
    color: "rgb(255, 255, 255)",
    justifyContent: "space-around",
  },
  row: {
    display: "flex",
    order: 1,
    fontFamily: "sans-serif",
    height: "auto",
    width: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "center",
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <div id="skills" className={classes.background}>
      <h1 className={classes.title}>SKILLS</h1>
      <div className={classes.gridArea}>
        <div className={classes.row}>
          {/* <SkillsCard
            title="Programming Languages"
            logoList={programingLanguage}
          /> */}
          <SkillsCard title="Front End" logoList={frontEndLogo} />
          <SkillsCard title="Mobile" logoList={mobile} />
          <SkillsCard title="Back End" logoList={backEnd} />
          <SkillsCard title="Databases" logoList={databases} />
          <SkillsCard title="Tools" logoList={tools} />
          <SkillsCard title="Methodologies" logoList={methodologies} />
          <SkillsCard title="Operation Systems" logoList={operationSystems} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
