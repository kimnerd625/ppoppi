import React from 'react';
import styled from 'styled-components/native';

const Header = ({text}) => {

    return (
        <Container>
            <HeaderText>
                {text}
            </HeaderText>
        </Container>
    )
}

export default Header;

//styled
const Container = styled.View`
    width: 100%;
    height: 10%;
    padding: 10px;
    marginTop: 100px;
`;

const HeaderText = styled.Text`
    fontSize: 20px;
    fontWeight: 600;
    textAlign: center;
`