// @ts-nocheck
import React from "react";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export const LoadingComponent = () => {
  return <RiseLoader color="red" loading={true} css={override} size={90} />;
};

