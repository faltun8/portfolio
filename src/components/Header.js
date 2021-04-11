import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        minHeight: 1000,
    }
  }));

function Header() {
    const classes = useStyles();
    return (
        <div id='main' className={classes.main}>
            <Navbar/>
        </div>
    )
}

export default Header
