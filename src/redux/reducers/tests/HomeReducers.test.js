import
HomeReducer, {
  initialState,
} from '../HomeReducers'
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../../constants'

describe('HomeReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState
    expect(HomeReducer(state, {})).toEqual(expectedResult)
  })

  it('Should handle the GET_POKEMON_LIST_STARTED action', () => {
    const action = {
      type: GET_POKEMON_LIST_STARTED,
    }
    const expectedResult = {
      ...initialState,
      pokemonListIsLoading: true,
    }
    expect(HomeReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_POKEMON_LIST_SUCCESS action', () => {
    const action = {
      type: GET_POKEMON_LIST_SUCCESS,
      payload: 'success test',
    }
    const expectedResult = {
      ...initialState,
      pokemonList: action.payload,
      pokemonListSuccess: true,
      pokemonListIsLoading: false,
    }
    expect(HomeReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_POKEMON_LIST_FAILED action', () => {
    const action = {
      type: GET_POKEMON_LIST_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      pokemonListFailed: true,
      pokemonListIsLoading: false,
      pokemonListError: action.payload,
    }
    expect(HomeReducer(state, action)).toEqual(expectedResult)
  })
})
