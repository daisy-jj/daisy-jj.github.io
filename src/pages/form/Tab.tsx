import { Divider, Stack, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { SubTap } from "@features/ui/SubTab";
import React from "react";
import { PageContainer } from "@features/ui/Container";
import styled, { css } from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { theme } from "@theme";

export const BasicTab = styled.div<{ selected: boolean }>`
  ${(props) =>
    props.selected
      ? css`
          color: #343a40;
          font-weight: 600;
          &:after {
            position: absolute;
            inset: auto 0 0 0;
            content: "";
            display: block;
            height: 1px;
            background: linear-gradient(
              356.61deg,
              #2774ff 5.59%,
              #2fdac5 94.41%
            );
          }
        `
      : css`
          color: #6c757d;
          font-weight: 400;
        `}

  position:relative;
  padding: 8px 24px;
  font-family: "Pretendard";
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  box-sizing: content-box;
`;

export const BasicTab2 = styled.div<{ selected: boolean }>`
  ${(props) =>
    props.selected
      ? css`
          color: #2774ff;
          font-weight: 600;
          svg {
            color: #2774ff;
          }
          &:after {
            position: absolute;
            inset: auto 0 0 0;
            content: "";
            display: block;
            height: 2px;
            background: #2774ff;
          }
        `
      : css`
          color: #6c757d;
          font-weight: 400;
          svg {
            color: #6c757d; /* 비선택 상태에서 아이콘 색상 */
          }
        `}

  position:relative;
  padding: 8px 24px;
  font-family: "Pretendard";
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  box-sizing: content-box;
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수직 정렬 */
  gap: 8px; /* 아이콘과 텍스트 간격 */
`;

export const CustomBtn = styled.button<{ selected: boolean }>`
  font-size: 14px;
  padding: 4px 12px;
  background-color: ${(props) => (props.selected ? "#2BADBF" : "#fff")};
  border: 1px solid #2badbf;
  color: ${(props) => (props.selected ? "#fff" : "#2BADBF")};
  cursor: pointer;
`;

export default function Tab() {
  type TabType = "Tep1" | "Tep2" | "Tep3";
  const [tapMode, setTapMode] = useState<TabType>("Tep1");
  const tabLabels: TabType[] = ["Tep1", "Tep2", "Tep3"];

  // 탭 레이블과 아이콘 설정
  const tabLabels2: { label: TabType; icon: JSX.Element }[] = [
    { label: "Tep1", icon: <PhoneIcon /> },
    { label: "Tep2", icon: <FavoriteIcon /> },
    { label: "Tep3", icon: <PersonPinIcon /> },
  ];

  return (
    <PageContainer>
      <Stack gap={8}>
        <Stack
          direction="row"
          sx={{
            borderBottom: `1px solid #E9ECEF`,
            position: "sticky",
            top: 60,
            zIndex: 10,
            background: "#fff",
            width: "100%",
          }}
        >
          {tabLabels.map((tabLabel, i) => (
            <BasicTab
              key={i}
              onClick={() => setTapMode(tabLabel)}
              selected={tapMode === tabLabel}
            >
              {tabLabel}
            </BasicTab>
          ))}
        </Stack>
        <Stack
          direction="row"
          sx={{
            borderBottom: `1px solid #E9ECEF`,
          }}
        >
          {tabLabels2.map((tab, i) => (
            <BasicTab2
              key={i}
              onClick={() => setTapMode(tab.label)}
              selected={tapMode === tab.label}
            >
              {tab.icon} {/* 탭에 해당하는 아이콘 표시 */}
              {tab.label}
            </BasicTab2>
          ))}
        </Stack>
        <Stack direction="row">
          {tabLabels.map((tabLabel, i) => (
            <SubTap
              key={i}
              onClick={() => setTapMode(tabLabel)}
              selected={tapMode === tabLabel}
            >
              {tabLabel}
            </SubTap>
          ))}
        </Stack>
        <Stack direction="row" gap={1}>
          {tabLabels.map((tabLabel, i) => (
            <CustomBtn
              key={i}
              onClick={() => setTapMode(tabLabel)}
              selected={tapMode === tabLabel}
            >
              {tabLabel}
            </CustomBtn>
          ))}
        </Stack>
        {/* {tapMode === "Tep1" && (
          <>
            <Stack
              border="1px solid #f1f1f1"
              p={3}
              borderRadius="0 0 8px 8px"
              gap={1}
              mt="-1px"
            >
              <Typography fontSize={16}>tab 1</Typography>
            </Stack>
          </>
        )}
        {tapMode === "Tep2" && (
          <>
            <Stack
              border="1px solid #f1f1f1"
              p={3}
              borderRadius="0 0 8px 8px"
              gap={1}
              mt="-1px"
            >
              <Typography fontSize={16}>tab 2</Typography>
            </Stack>
          </>
        )} */}
      </Stack>
      <Divider
        sx={{
          borderColor: theme.line,
          my: 3,
        }}
      />
    </PageContainer>
  );
}
