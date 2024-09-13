import React from 'react'

function MyButton(
    {
        children = "hehe, pass children prop",
        type = "button",
        bgColor = "bg-white",
        textColor = "text-orange",
        className,
        ...props

    }
) {
    return (
        <button

            className={`px-6 py-2 bg-orange text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-50  ${className}`} {...props}
        >{children}</button>
    )
}

export default MyButton