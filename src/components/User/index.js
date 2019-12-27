import { connect } from "react-redux";

import User from "./User";
import {
  loadPostList,
  loadUserList,
  loadContactsData,
  onClickUser,
  loadCommentList,
  preLoader
} from "../../store/actions";

const mapStateToProps = ({ reducer }) => {
  return {
    posts: reducer.posts,
    userList: reducer.userList,
    isLoading: reducer.isLoading,
    contacts: reducer.contacts,
    comments: reducer.comments
  };
};

const mapDispatchToProps = {
  loadPostList,
  loadUserList,
  loadCommentList,
  onClickUser,
  loadContactsData,
  preLoader
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
