import {
  GetPokemonListStarted,
  GetPokemonListSuccess,
  GetPokemonListFailed,
} from '../HomeActtions'
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../../constants'

describe('Login actions', () => {
  it('has a type of GET_POKEMON_LIST_STARTED', () => {
    const expected = {
      type: GET_POKEMON_LIST_STARTED,
    }
    expect(GetPokemonListStarted()).toEqual(expected)
  })

  it('has a type of GET_POKEMON_LIST_SUCCESS', () => {
    const expected = {
      type: GET_POKEMON_LIST_SUCCESS,
    }
    expect(GetPokemonListSuccess()).toEqual(expected)
  })

  it('has a type of GET_POKEMON_LIST_FAILED', () => {
    const expected = {
      type: GET_POKEMON_LIST_FAILED,
    }
    expect(GetPokemonListFailed()).toEqual(expected)
  })
})
