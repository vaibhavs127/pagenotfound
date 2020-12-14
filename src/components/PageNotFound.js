import React from "react";
import "./404.css";
import NavBar from "./NavBar";
import Back from "./img/graph.jpg";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function PageNotFound() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div class="mainbox">
              <div class="err">4</div>
              <i class="far fa fa-exclamation-circle fa-spin"></i>
              <div class="err2">4</div>
              <div class="msg1">Page Not Found</div>
              <div class="msg">
                It's Look Like You Lost Somewhere...
                <div style={{ marginTop: "35px" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#F69A16" }}
                  >
                    <ArrowBackIcon /> Go Back
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Back} alt="" width="100%" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default PageNotFound;
