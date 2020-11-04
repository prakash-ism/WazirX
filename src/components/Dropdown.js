import React from 'react';
import Select from 'react-select'

export default function Dropdown(props){
    const options = [
        { value: 'usdt', label: 'Tether USD' },
        { value: 'btc', label: 'Bitcoin' },
        { value: 'xrp', label: 'Ripple' },
        { value: 'ltc', label: 'Litecoin' },
        { value: 'trxvanilla', label: 'Tron' },
      ]
    
    return (
        <Select options={options} onChange={props.handleChange} />
    )
}