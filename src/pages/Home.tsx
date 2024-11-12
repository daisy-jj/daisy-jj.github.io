import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ContainerInner, PageContainer } from "../features/ui/Container";
import styled from "styled-components";
import { useState } from "react";
import TopBannerBg from "@image/main_topbg.png";

export default function Home() {
  return (
    <PageContainer>
      <ContainerInner>
        <TopBanner>{/* <img src={TopBannerBg} /> */}</TopBanner>
      </ContainerInner>
    </PageContainer>
  );
}

const TopBanner = styled(Stack)`
  img {
    width: 100%;
    height: auto;
  }
`;
