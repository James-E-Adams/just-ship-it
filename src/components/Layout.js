import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import sailShip from '../assets/favicon.png'
import '../styles/index.css'

// const headerStyles = {
//   background: 'linear-gradient(#ffafbd, #ffc3a0)',
//   position: 'fixed',
// }
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    let header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          // marginTop: 0,
          // display: 'flex',
          borderBottom: '1px solid black',
          background: 'wheat',
          width: '100%',
          height: 50,
          position: 'fixed',
        }}
        className="flex items-center pl-3"
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Justshipit.xyz
        </Link>
      </h3>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          // maxWidth: rhythm(24),
          minHeight: '100vh',
          background: 'linear-gradient(#ffafbd, #ffc3a0)',
        }}
      >
        {header}
        {/* <div
          style={{
            // marginTop: 100,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        > */}
        {children}
        {/* </div> */}
      </div>
    )
  }
}

export default Layout
