import { Stack, Typography } from "@mui/material";
import { theme } from "@theme";
import styled, { css } from "styled-components";

export const ModalBox = styled(Stack)<{ width: string; height: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  border-radius: 16px;
  overflow: auto;
  max-height: 900px;
`;

export const ModalTitle = styled(Typography)`
  && {
    position: sticky;
    top: 0px;
    z-index: 999;
    padding: 24px 24px 16px;
    font-weight: 700;
    font-size: 2rem;
    background-color: #fff;

    & > svg {
      z-index: 9999;
      cursor: pointer;
      fill: ${theme.grey[800]};
      position: absolute;
      top: 28px;
      right: 24px;
      font-size: 2rem;
    }
  }
`;

export const ModalSubTitle = styled(Typography)`
  && {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const ModalBody = styled(Stack)<{ $isborder?: boolean }>`
  flex: 1;
  padding: 24px;
  gap: 16px;
  ${(props) =>
    props.$isborder &&
    css`
      border-bottom: 1px solid ${theme.line};
      margin: 0 0 24px 0;
    `}
`;

export const ModalFoot = styled(Stack)`
  && {
    padding: 0px 24px 24px;
    margin: auto 0 0 auto;
    gap: 8px;
    flex-direction: row;
  }
`;

export const ModalFoot2 = styled(Stack)`
  && {
    padding: 0px 24px 16px;
    margin: auto 0 0 0;
    gap: 8px;
    flex-direction: row;
  }
`;
