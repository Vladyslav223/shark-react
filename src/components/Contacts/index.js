import { connect } from 'react-redux';

import Contacts from './Contacts';
import { loadContactsData, preLoader } from '../../store/actions';

const mapStateToProps = state => {
    return {
        userKeyFlag: state.reducer.userKeyFlag,
        contacts: state.reducer.contacts,
        isLoading: state.reducer.isLoading,
    };
}

const mapDispatchToProps = {
    loadContactsData,
    preLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);