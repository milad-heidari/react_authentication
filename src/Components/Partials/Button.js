import React from 'react'

function Button({type,classes,title}) {
    return (
        <button type={type} className={classes}>
            {title}
        </button>
    )
}

export default Button
