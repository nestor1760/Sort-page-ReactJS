import React from "react";
import cl from './MySelect.module.css'

const MySelect = ({options, defaultvalue, value, onChange}) => {
    return (
        <select
            className={cl.mySelect}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultvalue}</option>
            {options.map(option =>
                <option className={cl.option} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export {MySelect}