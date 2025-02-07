import React from 'react'

export default function SaveBtn(props) {
    let saveStyle = {
        background:props.color,
        border: 'none',
        padding: '10px 40px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 700,
        margin:'0',
        textAlign: 'center',
        display:'flex'
    }
  return (
    <div>
         <button type='button' style={saveStyle} onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
