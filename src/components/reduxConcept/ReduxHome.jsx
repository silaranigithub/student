import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import { Provider } from 'react-redux'
import {counterstore} from "./redux/store"

const ReduxHome = () => {
  return (
    <div>
      <Provider store={counterstore}>
        <Page1/>
        <Page2/>
        <Page3/>
        </Provider>
    </div>
  )
}

export default ReduxHome


// npm install redux react-redux
// redux: is a third  party state management library , global-state management library
// in store.js we scan the actual data
// redux: middlewarex
// redux vs reduxtoolkit