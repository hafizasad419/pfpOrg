import React from 'react'

function MyButton(
    {
        children = "hehe, pass children prop",
        type = "button",
        bgColor = "bg-white",
        textColor = "text-orange",
        className = "",
        ...props

    }
) {
    return (
        <button

            className={`${className} ${bgColor} ${textColor} px-8 py-2 text-xl rounded-full hover:bg-transparent hover:border-orange border-2 duration-300  `} {...props}
        >{children}</button>
    )
}

export default MyButton