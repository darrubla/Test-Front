import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import Icon from '@material-ui/core/Icon'

import { logout } from '../../services/firebase'

import './Layout.scss'

const url = [
  '/home',
  '/favorites'
]

export default function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = useState(url.indexOf(location.pathname))

  useEffect(() => {
    if ([0, 1].includes(value)) {
      navigate(url[value])
    } else if (parseInt(value, 10) === 2) {
      logout()
      navigate('/')
    }
  }, [value]);

  return (
    <section className="layout">
      {children}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Home" icon={<Icon>home</Icon>} />
        <BottomNavigationAction label="Favorites" icon={<Icon>favorite</Icon>} />
        <BottomNavigationAction label="Logout" icon={<Icon>logout</Icon>} />
      </BottomNavigation>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired
}
