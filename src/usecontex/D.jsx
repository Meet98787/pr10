import React from 'react'
import { useContext } from 'react'
import { Fname } from './A'

export default function D() {
    const bname = useContext(Fname)
  return (
    <div>D {bname}</div>
  )
}
