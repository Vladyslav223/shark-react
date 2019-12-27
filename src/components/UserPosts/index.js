import { connect } from "react-redux";
import { UserPosts } from "./UserPosts";
import { deleteComment, editComment } from "../../store/actions";

const mapStateToProps = ({ reducer }) => {
  return {
    stateComment: reducer.comment
  };
};

const mapDispatchToProps = {
  deleteComment,
  editComment
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
