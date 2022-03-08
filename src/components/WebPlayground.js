import React from 'react';
import styled from 'styled-components';

const IframeBox = styled.iframe`
  //   margin: auto;
  margin-left: 10%;
  width: 75%;
  height: 50rem;
`;

const WebPlayground = () => {
  return (
    <IframeBox src="https://codesandbox.io/embed/web-playground-gb19cm?fontsize=14&hidenavigation=1&theme=dark" />
  );
};

export default WebPlayground;
