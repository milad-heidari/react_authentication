import React from 'react'

function Form({children,classes,onSubmit}) {
    return (
        <form onSubmit={onSubmit} className={classes}>
            {children}
        </form>
    )
}

export default Form
