import {
  FilterPokemonStarted,
  FilterPokemonSuccess,
  FilterPokemonFailed,
  ClearFilter,
} from '../FilterActions'
import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../../constants'

describe('Login actions', () => {
  it('has a type of FILTER_STARTED', () => {
    const expected = {
      type: FILTER_STARTED,
    }
    expect(FilterPokemonStarted()).toEqual(expected)
  })

  it('has a type of FILTER_SUCCESS', () => {
    const expected = {
      type: FILTER_SUCCESS,
    }
    expect(FilterPokemonSuccess()).toEqual(expected)
  })

  it('has a type of FILTER_FAILED', () => {
    const expected = {
      type: FILTER_FAILED,
    }
    expect(FilterPokemonFailed()).toEqual(expected)
  })

  it('has a type of CLEAR_FILTER', () => {
    const expected = {
      type: CLEAR_FILTER,
    }
    expect(ClearFilter()).toEqual(expected)
  })
})
