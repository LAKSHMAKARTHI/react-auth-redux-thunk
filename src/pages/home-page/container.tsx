/* 
    Developed by LK - Feb 2022 
*/

import { connect } from 'react-redux';
import HomeComponent from './component';
import { AppState } from '../../state/reducers/root-reducer';

const mapStateToProps = (state: AppState) => {
	return {}
}

const mapDispatchToProps = () => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);