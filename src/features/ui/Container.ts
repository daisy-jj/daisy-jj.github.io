import { Stack } from "@mui/material";
import { media, theme } from "@theme";
import styled from "styled-components";

export const PageContainer = styled(Stack)`
  width: 100%;
  min-height: calc(100% - 60px);

  ${media.tablet} {
    min-height: calc(100% - 50px);
  }
`;

export const BlackContainer = styled(PageContainer)`
  background-color: black;
`;

export const RootContainer = styled(Stack)`
  && {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    flex-direction: row;
    ${media.tablet} {
      min-height: calc(100% - 50px);
    }
  }
`;

export const SideBarContainer = styled(Stack)<{ sideOpen: boolean }>`
  && {
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    left: ${(props) => (props.sideOpen ? "-260px" : "0")};
    width: ${(props) => (props.sideOpen ? "0" : "260px")};
    min-width: ${(props) => (props.sideOpen ? "0" : "260px")};
    min-height: calc(100% - 60px);
    border-right: 1px solid ${theme.grey[200]};
    transition: all 0.5s ease-in-out;
    ${media.tablet} {
      min-height: calc(100% - 50px);
    }
  }
`;

export const FlexContainer = styled(Stack)`
  flex: 1;
  padding: 24px 30px;
`;

export const ContainerInner = styled(Stack)`
  flex: 1;
  margin: 0 auto;
`;
