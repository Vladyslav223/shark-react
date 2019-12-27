import { connect } from "react-redux";

import UserComments from "./UserComments";

const mapStateToProps = ({ reducer }) => {
  return {
    currentUser: reducer.currentUser,
    posts: reducer.posts,
    userList: reducer.userList,
    isLoading: reducer.isLoading,
    contacts: reducer.contacts,
    comments: reducer.comments
  };
};

export default connect(mapStateToProps)(UserComments);
