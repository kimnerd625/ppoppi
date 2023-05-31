import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { database } from '../firebaseConfig';
import { ref, set } from "firebase/database";

const PostButton = ({text}) => {

    const onPress = () => {
        const date = new Date();
        postTestData(Date.now(), date.toLocaleString());
    }

    const postTestData = (key, value) => {
        set(ref(database, 'test/' + key.toString()), value);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <InnerText>{text}</InnerText>
            </Container>
        </TouchableOpacity>
    )
}

export default PostButton;

//styled
const Container = styled.View`
    width: auto;
    height: auto;
    padding: 10px;
    marginTop: 20px;
    borderRadius: 10%;
    backgroundColor: royalblue;
`;

const InnerText = styled.Text`
    color: white;
    fontSize: 20px;
    textAlign: center;
`