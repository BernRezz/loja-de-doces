import styled from "@emotion/styled";

export const Navbar = styled.nav`

    position: sticky;
    top: -0.1%;
    z-index: 999;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(90deg, rgba(255, 250, 133, 1) 0%, rgba(255, 114, 249, 1) 100%);
    box-shadow: rgba(0, 0, 0, 0.086) 0px -2px 4px;
    height: 50px;
    width: 100%;
    align-items: center;

.navItems {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    width: 100%;
}

.navItem {
    padding: 10px;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 100%;
    user-select: none;
} 

.navItem:hover {
    cursor: pointer;
    background-color: #ffffff39;
    color: #ff72f9;
    transition: 0.2s;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.086) 1px 4px;
}

.burgerNavSection {
    display: none;
}

#login {
    background: rgba(255, 255, 255, 0.193);
    height: 40px;
    width: 70px;
    border: rgb(218, 245, 220) solid 1px;
    user-select: none;
    z-index: 4;
    margin-right: 5px;
    align-items: center;
    color: white;
}

#login:hover {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.3s;
    background-color: #ffffffb7;
    color: #ff72f9;
    transition: 0.1s;
    user-select: none;
}

@media (max-width: 426px) {

 .navItems {
    display: none;
 }

 .one,.two,.three {

    background-color: white;
    box-shadow: #0000007e 0px 0px 3px;
    height: 3px;
    width: 100%;
    margin: 6px auto;
    transition: 0.3s;
}

 .burgerNavSection{
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 50px;

    .burgerNavItems {
        display: none;
    }
 }

 .burgerNavSection.on {
    
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 110vh;
    z-index: 999;
    background-color: rgba(245, 231, 195, 0.942);
    display: flex;
    justify-content: center;

    .burgerNav {

        position: absolute;
        right: 15px;
        top: 0;
    }

    .burgerNav .one {
        transform: rotate(45deg) translate(7px, 7px);
        background-color: black;
    }

    .burgerNav .two {
        opacity: 0;
    }

    .burgerNav .three {
        transform: rotate(-45deg) translate(5px, -6px);
        background-color: black;
    }

    .burgerNavItems {
        position: relative;
        top: 20%;
        width: 98%;
        display: block;
    }

    .burgerNavItem.on {

        color: #05dfdf;
        font-family: 'Lobster', cursive;
        text-shadow: crimson 0px 3px 1px;
        font-size: 2.6rem;
        background-color: #fbfbfb96;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        padding: 5px;
        transition: 0.5s;

        &::first-letter {
            color: #ffee8f;
            font-size: 110%;
            margin-right: 1px;
        }

    }

    .burgerNavItem {

        color: #353535;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        width: 100%;
        background-color: #fbfbfb1b;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 4px;
        transition: 0.5s;
    }
    
 }

 .burgerNav{
    width: 35px;
    height: 40px;
    margin-left: 10px;
    margin-top: 15px;

    :hover{
        cursor: pointer;
    }
 }

}

`
