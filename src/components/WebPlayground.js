import React from 'react';
import styled from 'styled-components';

const IframeBox = styled.iframe`
  //   margin: auto;
  margin-left: 10%;
  width: 75%;
  height: 50rem;
`;

const WebPlayground = () => {
  return <IframeBox src="https://stackblitz.com/edit/web-platform-rw6def?ctl=1&devtoolsheight=33&embed=1&file=index.html" />;
};

export default WebPlayground;
