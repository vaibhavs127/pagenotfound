import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import logo from "./img/grafana_icon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#F69A16",
  },
  title: {
    flexGrow: 1,
    color: "#F69A16",
    marginLeft: "7px",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <img className="logo" src={logo} alt="" width="2%" />
          <Typography variant="h6" className={classes.title}>
            Grafana
          </Typography>

          <HomeIcon style={{ color: "#F69A16" }}>
            <Button style={{ color: "#F69A16" }}>HOME</Button>
          </HomeIcon>

          <Button style={{ color: "#F69A16" }}>HOME</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
