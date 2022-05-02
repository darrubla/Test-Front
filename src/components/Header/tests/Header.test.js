import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../../../redux/configureStore'

import Header from '../index'

const { store } = configureStore({
  Filter: {
    filterPokemon: {},
  }
}, undefined)

describe('<Header />', () => {
  it('Should render properly', () => {
    const props = {
      name: 'test',
    }
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header {...props} />
        </BrowserRouter>
      </Provider>
    )
    expect(getByText('test')).toBeTruthy()
  })

  it('Should render and match the snapshot', () => {
    const props = {
      name: 'test',
    }
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header {...props} />
        </BrowserRouter>
      </Provider>
    )
    expect(firstChild).toMatchSnapshot()
  })
})
