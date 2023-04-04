import React from "react";

export const Footer = () =>
{
    let footerStyle={
        position:"relative",
        width:"100%",
        bottom:"0",
        // top:"100vh"
    }
    return(
        <footer className="bg-dark text-light py-1 mt-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}