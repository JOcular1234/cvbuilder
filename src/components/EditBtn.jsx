import React from 'react'

export default function EditBtn(props) {
    let editStyle = {
        background:props.color,
        border: 'none',
        padding: '10px 40px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 700,
        // margin:'0 auto',
        textAlign: 'center',
        display:'flex'
    }
  return (
    <div>
        <button type='button' style={editStyle} onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
