import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme[props.theme.mainColor].backgroundColor};
  `;

Container.defaultProps = {
    theme: {
      mainColor:"dark",
      light: {
        backgroundColor: '#b9b09c',
        textColor: 'cornflowerblue',
        borderRadius: "90% 6% 93% 5% / 5% 94% 7% 95%",
        borderWidth: "2px 3px 2px 5px"
      },
      dark: {
        backgroundColor: '#282c34',
        textColor: 'palevioletred',
      }
    }
  };
 
  export default Container;