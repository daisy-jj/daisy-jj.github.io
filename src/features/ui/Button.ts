import { Button } from "@mui/material";

import styled from "styled-components";

export const SolidGrayButton = styled(Button)`
  && {
    background-color: #f5f5f6;
    &:hover {
      background-color: #e8e8eb;
    }
    &:active {
      background-color: #d5d5da;
    }
  }
`;

export const SolidSoftButton = styled(Button)`
  && {
    background-color: #ebf4fa;
    &:hover {
      background-color: #cae1f1;
    }
    &:active {
      background-color: #96ccf1;
    }
  }
`;
