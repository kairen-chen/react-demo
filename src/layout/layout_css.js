import styled from "styled-components";

const colorConfig = {
  primary: "cornflowerblue",
  primary_1: "palevioletred",
};

// layout用container
const Container = styled.div`
  background-color: ${(props) =>
    props.theme[props.theme.mainColor].backgroundColor};
`;

Container.defaultProps = {
  theme: {
    mainColor: "dark",
    light: {
      backgroundColor: "#b9b09c",
      textColor: colorConfig.primary,
      borderRadius: "90% 6% 93% 5% / 5% 94% 7% 95%",
      borderWidth: "2px 3px 2px 5px",
      borderColor: colorConfig.primary,
    },
    dark: {
      backgroundColor: "#282c34",
      textColor: colorConfig.primary_1,
      borderColor: colorConfig.primary_1,
    },
  },
};

export default Container;
