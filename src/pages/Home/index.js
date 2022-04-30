import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Container } from '@mui/material'
import ButtonComponent from '../../components/Button'
import PokeCard from '../../components/PokeCard'
import LoaderComponent from '../../components/Loader'

import { getListado } from '../../services/pokeAPI'
import { auth } from '../../services/firebase'
import notify from '../../utils/notifyToast'
import IsLogged from '../../utils/IsLogged'

import './Home.scss'

function Home() {
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
      <LoaderComponent />
      <section className="home">
        {user && handleListado()}
      </section>
      <div className="home__nav-buttons">
        <ButtonComponent
          name="back"
          onClick={({ target }) => handleClick(target)}
          variant="contained"
          text="< Back" />
        <ButtonComponent
          name="next"
          onClick={({ target }) => handleClick(target)}
          variant="contained"
          text="Next >" />
      </div>
    </Container>
  )
}
export default Home