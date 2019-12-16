import { connect } from 'react-redux';

import HomePage from './HomePage';
import { loadFacebookData, preLoader } from '../../store/actions';

const mapStateToProps = ({ reducer }) => {
    return {
        userKeyFlag: reducer.userKeyFlag,
        info: reducer.info,
        isLoading: reducer.isLoading,
    };
}

const mapDispatchToProps = {
    loadFacebookData,
    preLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);