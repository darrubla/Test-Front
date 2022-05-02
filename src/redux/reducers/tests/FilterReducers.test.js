import
FilterPokemonReducer, {
  initialState,
} from '../FilterReducers'
import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../../constants'

describe('FilterPokemonReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState
    expect(FilterPokemonReducer(state, {})).toEqual(expectedResult)
  })

  it('Should handle the FILTER_STARTED action', () => {
    const action = {
      type: FILTER_STARTED,
    }
    const expectedResult = {
      ...initialState,
      filterPokemonIsLoading: true,
    }
    expect(FilterPokemonReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the FILTER_SUCCESS action', () => {
    const action = {
      type: FILTER_SUCCESS,
      payload: 'success test',
    }
    const expectedResult = {
      ...initialState,
      filterPokemon: action.payload,
      filterPokemonSuccess: true,
      filterPokemonIsLoading: false,
    }
    expect(FilterPokemonReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the FILTER_FAILED action', () => {
    const action = {
      type: FILTER_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      filterPokemonFailed: true,
      filterPokemonIsLoading: false,
      filterPokemonError: action.payload,
    }
    expect(FilterPokemonReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the CLEAR_FILTER action', () => {
    const action = {
      type: CLEAR_FILTER,
    }
    const expectedResult = {
      ...initialState,
    }
    expect(FilterPokemonReducer(state, action)).toEqual(expectedResult)
  })
})
