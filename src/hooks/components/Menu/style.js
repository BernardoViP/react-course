import styled from "styled-components"

// Menu

export const Container = styled.div`
    width: 408px;
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding:24px ;
`

export const Content = styled.div`
    display: flex;
    padding: 8px 0;
    gap: 12px;
`

export const Image = styled.img`
    width: 24px;
    height:24px;
`

export const ContentText = styled.div`
    display:flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 600;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
`
