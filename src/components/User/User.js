import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { ContactCard } from "../ContactCard";
import PreLoader from "../Preloader";
import "./User.scss";

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

const User = props => {
  const {
    preLoader,
    loadPostList,
    loadUserList,
    loadContactsData,
    loadCommentList,
    contacts,
    userList
  } = props;

  useEffect(() => {
    preLoader();
    loadPostList();
    loadUserList();
    loadContactsData();
    loadCommentList();
  }, []);

  const openUserPosts = user => {
    props.onClickUser(user);
    props.history.push("/user");
  };

  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center" spacing={spacing}>
      {userList &&
        userList.map((user, userIndex) => {
          const userWithImage =
            contacts && contacts.find((contact, index) => index === userIndex);

          const userData = {
            ...user,
            img: userWithImage && userWithImage.picture.large
          };

          return (
            <Grid key={userIndex} item>
              <Paper className={classes.paper}>
                <Box>
                  <div className="user-id">
                    <Box component="span">{user.id}</Box>
                    {user.username}
                  </div>
                  <ContactCard user={userData} />
                </Box>

                <Button
                  className={classes.buttonLookPosts}
                  onClick={() => openUserPosts(userData)}
                  variant="contained"
                >
                  <VisibilityIcon />
                  Look posts
                </Button>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default withRouter(User);
