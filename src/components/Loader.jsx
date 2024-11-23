/* eslint-disable no-unused-vars */
import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loader() {
  return (
    <div style={{
        width:'100%',
        height:'90vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <PacmanLoader color='yellow' size={90}/>
    </div>
  )
}

export default Loader