import
DetailReducer, {
  initialState,
} from '../DetailReducers'
import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
} from '../../constants'

describe('DetailReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('returns the initial state', () => {
    const expectedResult = initialState
    expect(DetailReducer(state, {})).toEqual(expectedResult)
  })

  it('Should handle the GET_DETAILS_STARTED action', () => {
    const action = {
      type: GET_DETAILS_STARTED,
    }
    const expectedResult = {
      ...initialState,
      pokemonDetailsIsLoading: true,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_DETAILS_SUCCESS action', () => {
    const action = {
      type: GET_DETAILS_SUCCESS,
      payload: 'success test',
    }
    const expectedResult = {
      ...initialState,
      pokemonDetails: action.payload,
      pokemonDetailsSuccess: true,
      pokemonDetailsIsLoading: false,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_DETAILS_FAILED action', () => {
    const action = {
      type: GET_DETAILS_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      pokemonDetailsFailed: true,
      pokemonDetailsIsLoading: false,
      pokemonDetailsError: action.payload,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_ENTRY_STARTED action', () => {
    const action = {
      type: GET_ENTRY_STARTED,
    }
    const expectedResult = {
      ...initialState,
      pokemonEntryIsLoading: true,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_ENTRY_SUCCESS action', () => {
    const action = {
      type: GET_ENTRY_SUCCESS,
      payload: 'success test',
    }
    const expectedResult = {
      ...initialState,
      pokemonEntry: action.payload,
      pokemonEntrySuccess: true,
      pokemonEntryIsLoading: false,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })

  it('Should handle the GET_ENTRY_FAILED action', () => {
    const action = {
      type: GET_ENTRY_FAILED,
      payload: 'error test',
    }
    const expectedResult = {
      ...initialState,
      pokemonEntryFailed: true,
      pokemonEntryIsLoading: false,
      pokemonEntryError: action.payload,
    }
    expect(DetailReducer(state, action)).toEqual(expectedResult)
  })
})
