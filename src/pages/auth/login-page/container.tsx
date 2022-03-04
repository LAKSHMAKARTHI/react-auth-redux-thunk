/* 
    Developed by LK - Feb 2022 
*/

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthAction} from '../../../state/models/auth-model';
import { loginSubmit } from '../../../state/actions/auth-action';
import { AppState } from '../../../state/reducers/root-reducer';

import LoninComponent from './component';

const mapStateToProps = (state: AppState) => {
  console.log(state)
  return {
    status: state.authReducer.status
  }
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AuthAction>
) => ({
  submitLogin: bindActionCreators(loginSubmit, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoninComponent);