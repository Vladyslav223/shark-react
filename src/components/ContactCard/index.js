import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import purple from "@material-ui/core/colors/purple";
import brown from "@material-ui/core/colors/brown";
import Button from "@material-ui/core/Button";

const brownBack = brown["50"];

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-evenly",
    maxWidth: "1200px",
    margin: "auto",
    padding: "2% 0 0"
  },
  paper: {
    width: 400
  },
  box: {
    backgroundColor: brownBack,
    marginTop: 1,
    padding: "10px 0",
    width: 370,
    margin: "auto",
    borderRadius: 5
  },
  box_son: {
    padding: "3px 10px",
    textAlign: "left",
    fontSize: 12
  },
  box_son2: {
    padding: "0 10px",
    textAlign: "left",
    fontSize: 12
  },
  buttonLookPosts: {
    margin: 10,
    fontSize: 10,
    color: "#9b8c8d",
    position: "reletive",
    right: -263,
    boxShadow: "none"
  },
  control: {
    padding: theme.spacing(1)
  }
}));

export const ContactCard = props => {
  const { user } = props;
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.box} justify="center" spacing={0}>
      <img
        style={{
          border: "1px solid #dababa",
          borderRadius: "5px",
          height: "107px"
        }}
        src={user.img}
        alt="contact"
      />
      <Box className={classes.box_son2}>
        <Box className={classes.box_son}>Name: {user.name}</Box>
        <Box className={classes.box_son}>Nickname: {user.username}</Box>

        <Box className={classes.box_son}>Email: {user.email}</Box>

        <Box className={classes.box_son}>
          City:{user.address.city}
          <br />
          <a
            style={{ paddingTop: "5px", display: "block" }}
            href={"http://" + user.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </Box>
      </Box>
    </Grid>
  );
};
