import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import grey from "@material-ui/core/colors/grey";
import brown from "@material-ui/core/colors/brown";
import Paper from "@material-ui/core/Paper";

import AddCommentForm from "../AddCommentForm/AddCommentForm";
import EditCommentForm from "../EditCommentForm";
import "./index.scss";

const grayBack = grey["600"];
const brownColor = brown["600"];
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "relative",
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "90%",
    margin: "10px auto 30px",
    padding: "20px 10px 30px",
    borderRadius: 10
  },
  grid: {
    //backgroundColor: grayBack,
    marginTop: 10,
    borderRadius: 10
  },
  comment: {
    padding: 20,
    margin: 20,
    borderRadius: 50
  },
  typography: {
    fontFamily: "Gloria Hallelujah",
    color: grayBack
  },
  title: {
    fontFamily: "unset",
    color: grayBack,
    width: " 80%",
    margin: "auto"
  }
}));

export const UserPosts = props => {
  const {
    posts,
    comments,
    currentUser,
    deleteComment,
    editComment,
    stateComment
  } = props;
  let [isEditing, setEdit] = useState(null);
  const classes = useStyles();

  const handleDeleteComment = id => {
    deleteComment(id);
  };

  const handleSaveEditedComment = (values, id) => {
    editComment(values, id);
  };

  const findPosts = () => {
    if (posts) {
      return posts.filter(post => {
        return post.userId === currentUser;
      });
    }
  };

  const postsArray = findPosts();

  const handleSubmitEdit = (values, id) => {
    setEdit((isEditing = null));
    handleSaveEditedComment(values, id);
  };

  return (
    <Grid bgcolor="#efebe9" className={classes.grid} item xs={12}>
      {postsArray.map((post, postIndex) => {
        const com = comments.filter(comment => comment.postId === post.id);
        const postTitle = post.title[0].toUpperCase() + post.title.slice(1);
        const postBody = post.body[0].toUpperCase() + post.body.slice(1);
        return (
          <Paper className={classes.paper} key={post.id}>
            <b className="post-id">{postIndex + 1}</b>
            <Typography
              paragraph={true}
              align="center"
              color="textSecondary"
              component="p"
              variant="h6"
              className={classes.title}
            >
              {postTitle}
            </Typography>
            <Typography
              paragraph={true}
              align="center"
              color="textSecondary"
              component="p"
              className={classes.title}
            >
              {postBody}
            </Typography>

            <Box bgcolor="#f5f5f5" className={classes.paper}>
              <Typography className={classes.title} component="h5" variant="h5">
                Comments:
              </Typography>
              {com.map((comment, index) => {
                const id = comment.id;

                const commentName =
                  comment.name[0].toUpperCase() + comment.name.slice(1);
                const commentBody =
                  comment.body[0].toUpperCase() + comment.body.slice(1);

                const editedCommentName =
                  stateComment.name && stateComment.name;
                const editedCommentBody =
                  stateComment.body && stateComment.body;
                const editedCommentId = stateComment.id && stateComment.id;

                return (
                  <Box
                    boxShadow={3}
                    className={classes.comment}
                    bgcolor="white"
                    key={comment.id}
                  >
                    {isEditing !== index + 1 ? (
                      <>
                        <b>{index + 1}</b>
                        <Box
                          className={classes.typography}
                          align="left"
                          color="textSecondary"
                        >
                          {editedCommentId === id && editedCommentName
                            ? editedCommentName
                            : commentName}
                          <hr />
                          {editedCommentId === id && editedCommentBody
                            ? editedCommentBody
                            : commentBody}
                        </Box>

                        <Box className="flex-wrapper">
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleDeleteComment(id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <Fab
                            onClick={() => setEdit((isEditing = index + 1))}
                            size="small"
                            aria-label="edit"
                          >
                            <EditIcon />
                          </Fab>
                        </Box>
                      </>
                    ) : (
                      <>
                        <EditCommentForm
                          onSubmit={values => handleSubmitEdit(values, id)}
                          initialValues={{
                            UserCommentTitle: editedCommentName || comment.name,
                            UserCommentBody: editedCommentBody || comment.body
                          }}
                        />
                        <Box className="flex-wrapper">
                          <Fab
                            style={{ margin: "20px" }}
                            onClick={() => setEdit(null)}
                            color="default"
                            size="small"
                            aria-label="edit"
                          >
                            <CloseIcon />
                          </Fab>
                        </Box>
                      </>
                    )}
                  </Box>
                );
              })}
              <AddCommentForm />
            </Box>
          </Paper>
        );
      })}
    </Grid>
  );
};
