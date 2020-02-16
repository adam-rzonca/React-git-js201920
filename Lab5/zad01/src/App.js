import React from "react";
import styles from "./App.module.css";

import styled from "styled-components";

const Box = styled.div`
  background-color: red;
  width: ${props => props.width || 200}px;
  height: ${2 * 100}px;
  text-align: center;
`;

const Text = styled.h2`
  color: white;
`;

function App() {
  return (
    <div>
      {/* CSS Modules */}
      <div className={styles.box}>
        <h2 className={styles.text}>Hello World1!</h2>
      </div>
      {/* Styled Components */}
      <Box width={300}>
        <Text className={styles.text}>Hello World2!</Text>
      </Box>
      <Box>
        <Text className={styles.text}>Hello World3!</Text>
      </Box>
    </div>
  );
}

export default App;
