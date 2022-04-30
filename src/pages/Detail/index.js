import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Icon from '@material-ui/core/Icon'
import { Container, Button } from '@mui/material'
import LoaderComponent from '../../components/Loader'

import { getPokeEntry, getPokeInfo } from '../../services/pokeAPI'
import IsLogged from '../../utils/IsLogged'

import './Detail.scss'

export default function Detail() {
  const location = useLocation()
  const { pathname } = location
  const [pokemon, setPokemon] = useState(null)
  const [entry, setEntry] = useState(null)
  const [favorite, setFavorite] = useState(location.state?.isFavorite)
  const urlBase = 'https://pokeapi.co/api/v2'

  IsLogged()

  useEffect(() => {
    if (!pokemon) {
      const info = getPokeInfo(`${urlBase}${pathname}`)
      info
        .then(res => setPokemon(res.data))
    }
  }, [])

  useEffect(() => {
    if (pokemon && !entry) {
      const info = getPokeEntry(pokemon.id)
      info
        .then(res => setEntry(res.data))
    }
  }, [pokemon])

  const showTypes = () => (
    pokemon.types.map((type) => <label key={`${type.type.name}`}>{type.type.name}</label>)
  )

  const handleClick = (e) => {
    e.preventDefault()
    if (0) setFavorite(!favorite)
  }

  const handlePokeInfo = () => {
    if (pokemon) {
      const { name, id } = pokemon
      return (
        <Container>
          <LoaderComponent />
          <section className="detail-card container" to={`/${name}`}>
            <div className="detail-card__title">
              <h3>#{id} - {name}</h3>
              <Button
                name={id}
                onClick={(e) => { handleClick(e) }}
              >
                <Icon name={id}>{favorite ? 'favorite' : 'favorite_border'}</Icon>
              </Button>            </div>
            <div className="detail-card__body">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={`logo pokemon #${id}`} />
              <section>
                <div className="detail-card__types">
                  {showTypes()}
                </div>
                {entry &&
                  <h5>
                    {entry.flavor_text_entries[10].flavor_text}
                  </h5>
                }
                {entry &&
                  <h5>
                    Growth rate: {entry.growth_rate.name}
                  </h5>
                }
              </section>
            </div>
          </section>
        </Container>
      )
    }
    return null
  }
  return handlePokeInfo()
}