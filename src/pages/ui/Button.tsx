import { Button } from "@mui/material";
import { theme } from "@theme";
import { ButtonHTMLAttributes, FC, useRef, useState } from "react";
import { styled } from "styled-components";

const BasicButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px 16px;
    border-radius: 12px;
    font-family: "Pretendard";
    font-size: 14px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;
export const GradientLineButton = styled.button`
  overflow: hidden;
  position: relative;
  font-size: 16px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: 1px solid transparent;
  background-image: linear-gradient(#fff, #fff), ${theme.main.gradient};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: #fff;

  & svg {
    z-index: 2;
  }
  & span {
    color: transparent;
    background-clip: text !important;
    background: ${theme.main.gradient};
    z-index: 2;
  }
  /* &:hover {
    background-image: linear-gradient(#e6f1fa, #e6f1fa), ${theme.main.gradient};
  } */
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    transition: all 0.3s;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background: #e6f1fa;
  }
  &:hover::before {
    width: 100%;
  }
`;

export const GradientButton = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  font-size: 16px;
  padding: 0px;
  height: 43px;
  border-radius: 12px;
  outline: none;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(#fff, #fff), ${theme.main.gradient}`
      : `${theme.main.gradient}`};
  color: #fff;
  border: ${({ selected }) => (selected ? `1px solid transparent` : "0")};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  font-family: "Pretendard";
  &:hover {
    opacity: 0.8;
  }
  & span {
    color: ${({ selected }) => (selected ? `transparent` : "#fff")};
    background-clip: text !important;
    background: ${theme.main.gradient};
  }
`;

export const RedTextButton = styled(BasicButton)`
  && {
    color: ${theme.error.main};
    &:hover {
      background-color: rgba(211, 47, 47, 0.04);
    }
  }
`;

export const BlueTextButton = styled(BasicButton)`
  && {
    color: ${theme.main.blue};
    &:hover {
      background-color: #e6f1fa;
    }
  }
`;

export const GreyTextButton = styled(BasicButton)`
  && {
    color: ${theme.grey[800]};
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const RedLineButton = styled(BasicButton)`
  && {
    color: ${theme.error.main};
    border: 1px solid ${theme.error.main};
    &:hover {
      background-color: rgba(211, 47, 47, 0.04);
    }
  }
`;

export const BlueLineButton = styled(BasicButton)`
  && {
    color: ${theme.main.blue};
    border: 1px solid ${theme.main.blue};
    &:hover {
      background-color: #e6f1fa;
    }
  }
`;

export const GreyLineButton = styled(BasicButton)`
  && {
    color: ${theme.grey[800]};
    border: 1px solid ${theme.grey[800]};
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const GreyButton = styled(BasicButton)`
  && {
    color: ${theme.grey[800]};
    background-color: ${theme.grey[200]};
    &:hover {
      background-color: ${theme.grey[400]};
    }
  }
`;

export const RedButton = styled(BasicButton)`
  && {
    color: #fff;
    background-color: ${theme.error.main};
    &:hover {
      background-color: ${theme.error.dark};
    }
  }
`;

export const BlueButton = styled(BasicButton)`
  && {
    color: #fff;
    background-color: ${theme.main.blue};
    &:hover {
      background-color: #006dbf;
    }
  }
`;

export const BlueAniButton = styled.button`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  background-color: ${theme.main.blue};

  &::before {
    content: "";
    position: absolute;
    inset: -50px -150px 0 0;
    margin: auto;
    width: 50%;
    height: 100px;
    border-radius: 50%;
    scale: 0;
    z-index: -1;
    background-color: #ffffff15;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover::before {
    scale: 4;
  }

  &:hover {
    scale: 1;
  }

  &:active {
    scale: 1;
  }
`;
