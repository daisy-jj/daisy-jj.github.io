import { Button } from "@mui/material";
import styled from "styled-components";
import { SolidSoftButton } from "./Button";
import { theme } from "@theme";

export const SubTap = styled(SolidSoftButton)<{
  selected: boolean;
}>`
  && {
    width: 100px;
    height: 48px;
    font-size: 1.4rem;
    color: ${(props) => (props.selected ? theme.grey[900] : theme.grey[500])};
    background-color: ${(props) => (props.selected ? null : "transparent")};
    border: ${(props) =>
      props.selected ? `1px solid ${theme.grey[200]}` : null};
    border-bottom: ${(props) => `1px solid ${theme.grey[200]}`};
    border-radius: 8px 8px 0px 0px;
    font-weight: ${(props) => (props.selected ? 600 : 400)};
  }
`;
