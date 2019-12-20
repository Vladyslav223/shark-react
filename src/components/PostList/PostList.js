import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import PreLoader from "../Preloader";
import "./PostList.scss";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

// const classes = useStyles();

class PostList extends Component {
  componentDidMount() {
    const {
      preLoader,
      loadPostList,
      loadUserList,
      loadContactsData,
      loadCommentList
    } = this.props;
    preLoader();
    loadPostList();
    loadUserList();
    //loadContactsData();
    loadCommentList();
  }

  commentsClickHandle = id => {
    this.props.onClickUser(id);
    this.props.history.push("/user");
  };

  render() {
    const { posts, contacts, userList } = this.props;

    return (
      <div className="home-page">
        {!this.props.isLoading ? (
          <div className="jss246 jss248" tabIndex="-1">
            <div className="MuiPaper-root MuiPaper-elevation1 MuiTableContainer-root MuiPaper-rounded">
              <TableContainer component={Paper}>
                <Table
                  className="MuiTable-root jss462"
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>User ID</TableCell>
                      <TableCell align="right">User</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Nick</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">Website</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userList &&
                      userList.map((user, userIndex) => {
                        // let currentUser = contacts.find(
                        //   (contact, index) => index === userIndex
                        // );

                        return (
                          <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                              {user.id}
                              {/* <img
                                src={currentUser && currentUser.picture.large}
                              /> */}
                              <Button
                                disableElevation
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                  this.commentsClickHandle(user.id)
                                }
                                variant="contained"
                              >
                                Show Comments
                              </Button>
                            </TableCell>
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.username}</TableCell>
                            <TableCell align="right">
                              {user.address.city}
                            </TableCell>
                            <TableCell align="right">{user.website}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        ) : (
          <PreLoader />
        )}
      </div>
    );
  }
}

export default withRouter(PostList);
