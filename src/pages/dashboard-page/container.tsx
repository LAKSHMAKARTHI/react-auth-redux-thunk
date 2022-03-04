/* 
    Developed by LK - Feb 2022 
*/

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import DashboardComponent from './component';
import { AppState } from '../../state/reducers/root-reducer';
import { TaskAction} from '../../state/models/task-model';
import { getTaskRequest } from '../../state/actions/task-action';

const mapStateToProps = (state: AppState) => {
    return {
      loading: state.authReducer.loading || state.taskReducer.loading,
      taskList: state.taskReducer.list
    }
  };
  
  const mapDispatchToProps = (
    dispatch: ThunkDispatch<AppState, {}, TaskAction>
  ) => ({
    getTaskRequest: bindActionCreators(getTaskRequest, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);