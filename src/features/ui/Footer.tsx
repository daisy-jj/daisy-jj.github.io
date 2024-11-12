import styled from "styled-components";
import { GreyText800 } from "./Typography";
import { Button, Stack } from "@mui/material";
import { media, theme } from "@theme";

export default function Footer() {
  return (
    <>
      <FooterWrapper justifyContent="center" alignItems="center">
        <GreyText800>
          빅토림 대표 임보정 사업자등록번호 000-00-0000 <br />
          통신판매업 신고번호 TEL: 070-000-0000 FAX: (02)000-0000 <br />
          주소: (00000) 경기도 성남시 ○○○○○ ○○
        </GreyText800>
        <FooterMenuList direction="row" flexWrap="wrap" justifyContent="center">
          <Button variant="text" color="inherit">
            GICUS 블로그
          </Button>
          <Button variant="text" color="inherit">
            회사소개
          </Button>
          <Button variant="text" color="inherit">
            이용약관
          </Button>
          <Button variant="text" color="inherit" sx={{ fontWeight: 700 }}>
            개인정보처리방침
          </Button>
          <Button variant="text" color="inherit">
            고객센터
          </Button>
        </FooterMenuList>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled(Stack)`
  padding: 30px;
  text-align: center;
  border-top: 1px solid ${theme.grey[200]};

  p {
    font-size: 1.3rem;
  }
`;

const FooterMenuList = styled(Stack)`
  margin-top: 24px;

  ${media.tablet} {
    button {
      padding: 4px 8px;
      font-size: 1.2rem;
    }
  }
`;
