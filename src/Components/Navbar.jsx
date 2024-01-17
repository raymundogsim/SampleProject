import { Search } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`



const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
`

const Center = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
`

const Navbar = () => {
  return (
<Container>
    <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainter>
              input
              <Search/>
          </SearchContainter>
        </Left>
        <Center>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis ipsum amet unde sapiente provident nam voluptatum ratione quidem atque eius obcaecati vel ab ipsa repudiandae odit, quisquam dolores fugiat!</Center>
        <Right>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque debitis, perferendis illum numquam deserunt animi nihil optio aliquam a vero excepturi ipsum officiis tenetur blanditiis corrupti incidunt? Dolorem, earum?</Right>
    </Wrapper>
</Container>
  )
}

export default Navbar
