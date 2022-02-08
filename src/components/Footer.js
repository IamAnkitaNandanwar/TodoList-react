import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        left: "0",
        bottom: "0",
        width: "100%",

    }
    return (
        <footer className='text-center' style={footerStyle}>
            <p className='text-center' >Copyright &copy; MyTodoList.com</p>
        </footer>
    )
}

export default Footer
