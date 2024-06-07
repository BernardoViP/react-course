import { useState } from "react"
import * as S from "./style"
import DropdownMenu from "../Menu"

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const listpages = [
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
      ];

    return (
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Nav>
                <S.Link>Link 1</S.Link>
                <S.Link>Link 2</S.Link>
                <S.Link>Link 3</S.Link>
                <S.Link>Link 4</S.Link>
                {
                     open && <DropdownMenu pages={listpages}/>
                }
                <S.ContainerButton>
                    <S.Button>Button</S.Button>
                    <S.Button bgColor="black">Button</S.Button>
                </S.ContainerButton>
            </S.Nav>
        </S.Container>
    )
}