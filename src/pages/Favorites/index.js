/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Container } from '@mui/material'
import LoaderComponent from '../../components/Loader'
import PokeCard from '../../components/PokeCard'

import { db, auth } from '../../services/firebase'
import { getUrl } from '../../services/pokeAPI'

export default function Favorites() {
  const [user] = useAuthState(auth)
  const [pokemon, setPokemon] = useState([])
  const [docListener, setDocListener] = useState(0)
  const [favoritesList, setFavoritesList] = useState(null)

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line no-unused-vars
      const unsubscribe = db
        .collection('usuarios')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const list = data.filter(item => item.id === user.multiFactor.user.email)
          setDocListener(list[0]);
        });
    }
  }, [])

  useEffect(() => {
    if (favoritesList) {
      favoritesList.sort((a, b) => a - b)
      favoritesList.reverse().map((poke) => setPokemon(pokemon => [getUrl(poke), ...pokemon]))
    }
  }, [favoritesList])

  useEffect(() => {
    if (docListener) {
      setFavoritesList(docListener.favorites)
    }
  }, [docListener])

  const handleListado = () => {
    if (pokemon && user) {
      return pokemon.map((pokeUrl, idx) => (
        <PokeCard
          user={user.email}
          key={`favorite-${idx}`}
          url={pokeUrl} />
      ))
    }
    return null
  }

  return (
    <Container>
      <LoaderComponent />
      <section className="home">
        {handleListado()}
      </section>
    </Container>
  )
}