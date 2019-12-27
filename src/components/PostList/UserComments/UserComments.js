import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./UserComments.scss";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function UserComments(props) {
  const { currentUser, posts, userList, isLoading, contacts, comments } = props;
  const findUser = () => {
    if (userList) {
      return userList.find(user => user.id === currentUser);
    }
  };
  const findPosts = () => {
    if (posts) {
      return posts.filter(post => {
        return post.userId === currentUser;
      });
    }
  };
  const userCurrent = findUser();
  const postsArray = findPosts();

  const classes = useStyles();
  const contactImg = contacts[currentUser - 1];

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={1} justify="center">
        <Grid container={true} justify="center" item xs={8}>
          <Paper className={classes.paper}>
            <img src={contactImg && contactImg.picture.large} />
          </Paper>
          <Paper className={classes.paper}>
            Name: {userCurrent && userCurrent.name}
            <br />
            City: {userCurrent && userCurrent.address.city}
            <br />
            Email: {userCurrent && userCurrent.email}
            <br />
            <a
              target="_blank"
              href={userCurrent && "http://" + userCurrent.website}
            >
              Website
            </a>
            <br />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Posts</Paper>
          <Paper container={true} spacing={1} className={classes.paper}>
            {postsArray.map(post => {
              console.log("post", post);
              const com = comments.filter(
                comment => comment.id === post.userId
              );
              console.log("com", com);
              return (
                <>
                  <Paper className={classes.paper}>Title:{post.title}</Paper>
                  <Paper className={classes.paper}>Post:{post.body}</Paper>
                  <Paper className={classes.paper}>
                    Comment:
                    {com.map(comment => (
                      <div>{comment.body}</div>
                    ))}
                  </Paper>
                </>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
