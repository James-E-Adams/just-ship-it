import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import sailShip from '../assets/favicon.png'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: '#1F3B89',
            textAlign: 'center',
          }}
        >
          <img
            src={sailShip}
            alt={`Sail ship`}
            style={{
              marginRight: rhythm(1),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          // maxWidth: rhythm(24),
          minHeight: '100vh',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          background: 'linear-gradient(#ffafbd, #ffc3a0)',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
