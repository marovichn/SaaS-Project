"use client"

import { FC } from 'react'
import {Toaster} from 'react-hot-toast'


interface ToasterProviderProps {
  
}

const ToasterProvider: FC<ToasterProviderProps> = ({}) => {
  return <Toaster/>
}

export default ToasterProvider