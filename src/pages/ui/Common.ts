import { grey } from "@mui/material/colors";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #212529;
  letter-spacing: 0em;
  text-align: left;
  white-space: pre-wrap;
  z-index: 1;
  margin-bottom: 24px;
`;
export const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: ${grey[900]};
  white-space: pre-wrap;
  z-index: 1;
  margin-bottom: 16px;
`;
