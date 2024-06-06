import { useState } from "react";
import { Down, Up } from "./src/svg"
import { AccordionButton, AccordionContainer, AccordionContent, AccordionImage, AccordionText, AccordionWrapper, ContentText } from "./style"


export default function Accordion() {

    function HandleAccordion (){
        return setVisible(!visible)
    }
//  controle de estado do content
    const [ visible, setVisible ] = useState(false)
// validação da direção da seta
    const handleAngle = visible === false ? Down : Up

    return(
    <AccordionWrapper>
     <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton onClick={HandleAccordion}>
            <AccordionImage src={handleAngle}/>
        </AccordionButton>
     </AccordionContainer>

     {visible && (
        <AccordionContent>
            <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro ex error dolores excepturi. Qui eum ea, magnam odio rem vero eveniet quaerat ab nisi sed ipsam ipsum reiciendis modi.</ContentText>
        </AccordionContent>
     )}
     </AccordionWrapper>
    );
}