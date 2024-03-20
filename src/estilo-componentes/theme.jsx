import styled from "styled-components";

export const colors = {
    primary: 'blue',
    seconday: 'darkgray',
    danger: 'red',
    warning: 'yellow',
    rosado: '#c61d56',
    gris: '#333',
    light: '#dff5ff',
};
export const theme={
    fg: '#BF4F74',
    bg: '#DFF5FF'
};
export const invertTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg
});

export const Button = styled.button`
  background: #dff5ff;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  cursor: pointer;
`;