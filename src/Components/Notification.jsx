import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;
`

const Notification = () => {
  return (
    <Container>
        Hey now, hey now! Don't dream it's over!
    </Container>
  )
}

export default Notification
