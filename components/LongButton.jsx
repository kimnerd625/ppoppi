import React from "react";
import styled from "styled-components/native";

const LongButton = ({buttonText}) => {
  
  return (
    <>
      <ButtonContainer>
        <ButtonText>
          {buttonText}
        </ButtonText>
      </ButtonContainer>
    </>
  );
};

export default LongButton;


// styled
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  borderRadius: 4px;
  backgroundColor: #303030;
`;

const ButtonText = styled.Text`
  fontSize: 18px;
  fontWeight: 700;
  color: #fff;
`;