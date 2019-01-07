import React from 'react'
import { Link } from 'gatsby'

import sailShip from '../assets/favicon.png'

const Nav = ({ location, title }) => (
  <div className="flex items-center pt-3 pl-3 fixed w-full bg-red">
    <img src={sailShip} className="w-10 h-10 mr-2" />
    <Link className="mr-4 no-underline text-2xl" to={'/'}>
      {title}
    </Link>
    <div>About me | Projects | Talks</div>
  </div>
)

export default Nav
