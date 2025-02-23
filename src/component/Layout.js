import React from "react";
import FooterBottom from "./Footer";
import Heading from "./Header";
import SignInOrSignUp from "./SignIn";
import ProductCart from "./Cart";
import LogOut from "./SignOut";
import { Outlet } from "react-router-dom";
import "./Project.css";

function ProjectLayout(){
    
    return(
        <>
        <header>
            <Heading/>
            <SignInOrSignUp/>
            <ProductCart/>
            <LogOut/>
        </header>
        <section>
            <article>
            <Outlet />
            </article>
        </section>            
        <footer>
            <FooterBottom/>
        </footer>        
        </>
    );
} export default ProjectLayout;