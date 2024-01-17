import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Home = () => {
  return (
    <Container>
      <Navbar/>
    </Container>
  )
}

export default Home
