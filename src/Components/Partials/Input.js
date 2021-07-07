import React from 'react'

function Input({classes,type,id,placeholder,formikGetFieldProps}) {
    return (
        <input
            className={classes}
            type={type}
            id={id}
            placeholder={placeholder}
            {...formikGetFieldProps}
        
      />
    )
}

export default Input
