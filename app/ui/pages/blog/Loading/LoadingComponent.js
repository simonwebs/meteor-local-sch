// @ts-nocheck
import React from 'react';
import { css } from '@emotion/react';
import { RiseLoader } from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const LoadingComponent = () => <RiseLoader color="red" loading css={override} size={90} />;

export default LoadingComponent;
