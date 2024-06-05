import { Down, Up } from "./src/svg"
import { AccordionButton, AccordionContainer, AccordionImage, AccordionText } from "./style"


export default function Accordion() {
    return(
     <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton>
            <AccordionImage src={Up}/>
        </AccordionButton>
     </AccordionContainer>
    )
}