import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img src={profilePic} alt={`James Adams`} />
        Hi! I'm James. I'm a programmer from intermittently sunny Melbourne.
      </div>
    )
  }
}

export default Bio
