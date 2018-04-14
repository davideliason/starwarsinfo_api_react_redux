import App from '../../src/App.js';
import {connect} from 'react-redux';

function mapStateToProps(state){
	return {
		planet: state.planet
		}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;