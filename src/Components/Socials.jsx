import { Icon } from '@iconify/react'
import React from 'react'
import {Link} from "react-router-dom"

const Socials = ({icon, name, link}) => {
  return (
    <Link to={link} target="_blank">
    <div className='flex items-center space-x-3 m-5 cursor-pointer hover:text-gray-300'>
       <Icon icon={icon} fontSize={30} /> 
       <div>{name}</div>
    </div>
    </Link>
  )
}

export default Socials