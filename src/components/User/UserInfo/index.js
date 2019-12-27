import { connect } from "react-redux";

import UserInfo from "./UserInfo";

const mapStateToProps = ({ reducer }) => {
  return {
    user: reducer.user,
    posts: reducer.posts,
    userList: reducer.userList,
    isLoading: reducer.isLoading,
    contacts: reducer.contacts,
    comments: reducer.comments
  };
};

export default connect(mapStateToProps)(UserInfo);
