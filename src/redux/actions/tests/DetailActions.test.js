import {
  GetPokemonDetailsStarted,
  GetPokemonDetailsSuccess,
  GetPokemonDetailsFailed,
  GetPokemonEntryStarted,
  GetPokemonEntrySuccess,
  GetPokemonEntryFailed,
} from '../DetailActions'
import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
} from '../../constants'

describe('Login actions', () => {
  it('has a type of GET_DETAILS_STARTED', () => {
    const expected = {
      type: GET_DETAILS_STARTED,
    }
    expect(GetPokemonDetailsStarted()).toEqual(expected)
  })

  it('has a type of GET_DETAILS_SUCCESS', () => {
    const expected = {
      type: GET_DETAILS_SUCCESS,
    }
    expect(GetPokemonDetailsSuccess()).toEqual(expected)
  })

  it('has a type of GET_DETAILS_FAILED', () => {
    const expected = {
      type: GET_DETAILS_FAILED,
    }
    expect(GetPokemonDetailsFailed()).toEqual(expected)
  })

  it('has a type of GET_ENTRY_STARTED', () => {
    const expected = {
      type: GET_ENTRY_STARTED,
    }
    expect(GetPokemonEntryStarted()).toEqual(expected)
  })

  it('has a type of GET_ENTRY_SUCCESS', () => {
    const expected = {
      type: GET_ENTRY_SUCCESS,
    }
    expect(GetPokemonEntrySuccess()).toEqual(expected)
  })

  it('has a type of GET_ENTRY_FAILED', () => {
    const expected = {
      type: GET_ENTRY_FAILED,
    }
    expect(GetPokemonEntryFailed()).toEqual(expected)
  })
})
