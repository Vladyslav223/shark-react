import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import UserPosts from "../../UserPosts";
import { ContactCard } from "../../ContactCard";
import brown from "@material-ui/core/colors/brown";
import Typography from "@material-ui/core/Typography";

import "./UserInfo.scss";

const brownBack = brown["50"];
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    fontFamily: "unset",
    marginTop: 10
  }
}));

function UserInfo(props) {
  const { user, posts, comments } = props;
  const classes = useStyles();

  const redirectToPosts = () => {
    props.history.push("/posts");
  };

  return user ? (
    <div className={classes.root}>
      <Typography
        color="textSecondary"
        align="center"
        component="p"
        variant="h5"
        className={classes.title}
      >
        {user.username}
      </Typography>
      <Grid
        className="current-card"
        border={1}
        container={true}
        alignContent="stretch"
        spacing={1}
        justify="center"
      >
        <ContactCard user={user} />
        <UserPosts posts={posts} comments={comments} currentUser={user.id} />
      </Grid>
    </div>
  ) : (
    <div>{redirectToPosts()}</div>
  );
}

export default withRouter(UserInfo);
