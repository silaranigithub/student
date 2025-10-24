import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

const ReduxToolkitHome = () => {
  return (
    <div>
        <Provider store={store}>
            {/* <child components/> */}
        </Provider>
    </div>
  )
}

export default ReduxToolkitHome