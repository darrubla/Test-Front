import React from 'react'
import { render } from '@testing-library/react'

import LoaderComponent from '../index'

describe('<LoaderComponent />', () => {
  it('Should render properly', () => {
    const props = {
      show: true,
    }
    const { getByTestId } = render(<LoaderComponent {...props} />)
    expect(getByTestId('modal')).toBeTruthy()
  })

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<LoaderComponent />)
    expect(firstChild).toMatchSnapshot()
  })
})
