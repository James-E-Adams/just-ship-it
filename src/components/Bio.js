import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
      fontSize: 30,
    }}
  >
    <img
      src={profilePic}
      alt={`James Adams`}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
    />
    Hi! I'm James. I'm a software engineer from intermittently sunny Melbourne.
  </div>
)

export default Bio
