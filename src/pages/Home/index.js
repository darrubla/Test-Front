import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from '@mui/material'
import ButtonComponent from '../../components/Button'
import PokeCard from '../../components/PokeCard'
import LoaderComponent from '../../components/Loader'

import { getListado } from '../../services/pokeAPI'
import { auth } from '../../services/firebase'
import notify from '../../utils/notifyToast'
import IsLogged from '../../utils/IsLogged'

import './Home.scss'

function Home({ filterPokemon, filterPokemonIsLoading }) {
  const [user] = useAuthState(auth)
  const [listado, setListado] = useState(null)
  const [offSet, setOffset] = useState(null)

  IsLogged()

  useEffect(() => {
    const lista = getListado(offSet)
    lista
      .then(res => setListado(res.data.results))
      .catch(() => {
        notify('error', '¡Upps, parece que la base de datos de la pokedex está en actualización, prueba más tarde!', 'getListadoError')
      })
  }, [offSet])

  useEffect(() => {
    if (Object.values(filterPokemon)?.length >= 1) {
      const { name } = filterPokemon
      setOffset(0)
      setListado([{
        name,
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
      }])
    }
  }, [filterPokemon])

  const handleListado = () => {
    if (listado && user) {
      return listado.map(pokemon => (
        <PokeCard
          user={user.email}
          key={pokemon.name}
          url={pokemon.url} />
      ))
    }
    return null
  }

  const handleClick = ({ name }) => {
    if (name === 'next') setOffset(offSet + 20)
    if (name === 'back') setOffset(offSet - 20)
  }

  return (
    <Container>
      <LoaderComponent show={filterPokemonIsLoading} />
      <section className="home">
        {user && handleListado()}
      </section>
      {listado?.length >= 20 && (
        <div className="home__nav-buttons">
          <ButtonComponent
            name="back"
            id="Back-btn"
            action={({ target }) => handleClick(target)}
            variant="contained"
            text="< Back" />
          <ButtonComponent
            name="next"
            id="Next-btn"
            action={({ target }) => handleClick(target)}
            variant="contained"
            text="Next >" />
        </div>
      )}
    </Container>
  )
}

Home.propTypes = {
  filterPokemon: PropTypes.object.isRequired,
  filterPokemonIsLoading: PropTypes.bool.isRequired,
}

function mapStateToProps({ Filter: { filterPokemon, filterPokemonIsLoading } }) {
  return {
    filterPokemon,
    filterPokemonIsLoading
  }
}

export default connect(mapStateToProps)(Home)