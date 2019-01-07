import React from 'react'

import '../styles/index.css'
import Nav from './Nav'
import DummyText from './DummyText'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(#ffafbd, #ffc3a0)',
        }}
      >
        <Nav location={location} title={title} />
        <DummyText className="pt-20" />
        {/* {children} */}
      </div>
    )
  }
}

export default Layout
