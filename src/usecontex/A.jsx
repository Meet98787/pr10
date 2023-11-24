import React from 'react'
import B from './B '
import { createContext } from 'react'
const Fname = createContext()
const name = "meet"
export default function A() {
  return (
    <div>A
        <Fname.Provider value={name}>
        <B/>
        </Fname.Provider>
        
    </div>
  )
}
export {Fname}
