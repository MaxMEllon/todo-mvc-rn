import * as React from "react";
import styled from "styled-components";
import { View, Text, Dimensions } from "react-native";

type Props = {
  message: string;
};

const Snackbar: React.FC<Props> = ({ message }) => {
  return (
    <SnackbarContainer>
      <SnackbarText>{message}</SnackbarText>
    </SnackbarContainer>
  );
};

export default Snackbar;

const SnackbarContainer = styled(View)`
  position: absolute;
  top: 20px;
  justify-content: center;
  background: #afa;
  width: ${Dimensions.get("window").width - 60}px;
  height: 30px;
`;
const SnackbarText = styled(Text)`
  font-size: 18px;
  margin-left: 14px;
`;
