import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
    ${tw`
       h-12
    `}
`;

const Wrapper = styled.div`
    ${tw`
       py-2.5
       px-5   
       flex
       items-center
       justify-between
    `}
`;

const Left = styled.div`
    ${tw `
        flex-1
        flex
        items-center
    `}
`;

const Language = styled.span`
    ${tw `
        text-sm
        cursor-pointer
    `}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    ${tw `
        flex
        items-center
        ml-6
        p-1.5 
    `}
`;
const Input = styled.input`
    ${tw `
        border-none
        outline-none 
    `}   
`;

const Center = styled.div`
    ${tw `
        flex-1
        text-center
    `}
`;
const Logo = styled.h1`
    font-weight: bold;
    ${tw `
        text-4xl
    `}
`;

const Right = styled.div`
    ${tw `
        flex-1 
        flex
        items-center 
        justify-end 
    `}
`;

const MenuItem = styled.div`
    ${tw `
        text-sm
        cursor-pointer
        ml-6
    `}
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>VICKY.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                       <Badge badgeContent={4} color="primary">
                           <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>  
            </Wrapper>
        </Container>
    )
}

export default Navbar
