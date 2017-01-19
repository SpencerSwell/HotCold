require('babel-polyfill');
import * as actions from './actions/index'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux';
import store from './store'
import MainContainer from './components/'


//subscribe is a method that listens for changes on the store
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

const jsx = <MainContainer/>
const d = document.getElementById('app');

// store.dispatch(actions.newGame())
//
// store.dispatch(actions.addGuess(43))
// store.dispatch(actions.addGuess(81))
// store.dispatch(actions.newGame())

ReactDOM.render(
	<Provider store={ store }>
		<MainContainer />
	</Provider>, d
);


unsubscribe();