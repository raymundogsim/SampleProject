import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
            Super Deal! Buy now! Pray Later!
    </Container>
  )
}

export default Announcements
