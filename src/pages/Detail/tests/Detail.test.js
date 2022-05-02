import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../../../redux/configureStore'

import Detail from '../index'

const { store } = configureStore({
  Detail: {
    pokemonDetails: {
      name: 'Bulbasaur',
      types: [
        {
          type: {
            name: 'grass'
          }
        },
        {
          type: {
            name: 'sand'
          }
        }
      ]
    },
    isloading: false,
    pokemonEntry: {
      flavor_text_entries: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { flavor_text: 'test' }],
      growth_rate: { name: 'fast' }
    }
  }
}, undefined)

describe('<Detail />', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    )
    expect(getByText('test')).toBeTruthy()
  })

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    )
    expect(firstChild).toMatchSnapshot()
  })
})
