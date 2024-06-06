import { useState } from "react";
import { Up , Stable } from "./src/images";
import { NavButton, NavContainer, NavContent, NavImage, NavText, NavWrapper, ContentText } from "./style"

export default function Navbar() {

    function HandleNav(){
        return setVisible(!visible)
    }
//  controle de estado do content
    const [ visible, setVisible ] = useState(false)

    const handleAngle = visible === false ? Stable : Up

    return(
    <NavWrapper>
     <NavContainer>

        <NavText>Logo</NavText>

        <NavButton onClick={HandleNav}>

            <NavImage src={handleAngle}/>
            
        </NavButton>
     </NavContainer>

     {visible && (
        <NavContent>
            <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro ex error dolores excepturi. Qui eum ea, magnam odio rem vero eveniet quaerat ab nisi sed ipsam ipsum reiciendis modi.</ContentText>
        </NavContent>
     )}
     </NavWrapper>
    );
}