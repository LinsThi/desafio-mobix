import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#838282',
})`
  width: 300px;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 30px;

  font-size: 16px;
  text-align: center;
`;
