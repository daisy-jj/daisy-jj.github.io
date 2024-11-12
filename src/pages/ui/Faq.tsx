import {
  Button,
  Divider,
  Input,
  MenuItem,
  Modal,
  Stack,
  Tabs,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import { PageContainer } from "@features/ui/Container";
import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CloseIcon from "@mui/icons-material/Close";
import { Clear, Search } from "@mui/icons-material";
import { TextInput } from "@features/ui/Input";
import { ModalBody, ModalBox, ModalFoot, ModalTitle } from "./Modal";
import SearchField from "./SearchField";
import {
  BlueButton,
  GradientButton,
  GreyButton,
  RedLineButton,
} from "./Button";
import { Title } from "./Common";
import { theme } from "@theme";
import { GreyText900 } from "@features/ui/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.grey[200]}`,
  "&:not(:last-child)": {},
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowDropDownIcon sx={{ fontSize: 21, color: theme.grey[700] }} />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: "24px 0",
  },
  "& p:first-of-type": {
    fontSize: 16,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "0 0 24px",

  "& p:first-of-type": {
    fontSize: 14,
  },
}));

const DomainBtn = styled.button<{ selected: boolean }>`
  font-size: 14px;
  padding: 4px 12px;
  background-color: ${(props) => (props.selected ? theme.main.blue : "#fff")};
  border: 1px solid ${theme.main.blue};
  color: ${(props) => (props.selected ? "#fff" : theme.main.blue)};
`;

export interface Faq {
  answer: string;
  category: string;
  faq_id: number;
  question: string;
}

export default function Faq() {
  const exampleListDatas = [
    {
      faq_id: 1,
      category: "회원 및 계정",
      question: "회원가입은 어떻게 하나요?",
      answer:
        "회원가입은 홈페이지 상단의 회원가입 버튼을 클릭하여 진행할 수 있습니다.",
    },
    {
      faq_id: 2,
      category: "회원 및 계정",
      question: "비밀번호를 잊어버렸어요.",
      answer: "비밀번호 찾기를 통해 새로운 비밀번호를 설정할 수 있습니다.",
    },
    {
      faq_id: 3,
      category: "요금 및 결제",
      question: "결제 방법에는 어떤 것이 있나요?",
      answer: "결제 방법으로는 신용카드, 계좌이체, 간편결제가 지원됩니다.",
    },
    {
      faq_id: 4,
      category: "요금 및 결제",
      question: "환불은 어떻게 진행되나요?",
      answer:
        "환불 요청은 고객센터를 통해 가능합니다. 단, 일부 상품은 환불이 제한될 수 있습니다.",
    },
    {
      faq_id: 5,
      category: "이용 안내",
      question: "서비스 이용시간은 어떻게 되나요?",
      answer: "서비스는 24시간 연중무휴로 이용 가능합니다.",
    },
    {
      faq_id: 6,
      category: "이용 안내",
      question: "계정을 삭제하려면 어떻게 해야 하나요?",
      answer:
        "계정 삭제는 설정 페이지에서 '계정 삭제하기' 버튼을 통해 진행할 수 있습니다.",
    },
  ];

  type FaqType = "회원 및 계정" | "요금 및 결제" | "이용 안내";
  const faqLabels: FaqType[] = ["회원 및 계정", "요금 및 결제", "이용 안내"];
  const [listDatas, setListDatas] = useState<Faq[]>(exampleListDatas);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [clickedDomain, setClickedDomain] = useState<FaqType>("회원 및 계정");
  const [clickedItem, setClickedItem] = useState<Faq | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmOpen2, setConfirmOpen2] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [question2, setQuestion2] = useState("");
  const [answer2, setAnswer2] = useState("");

  const editFAQList = async (faqId: number) => {};
  const deleteFAQList = async (faqId: number) => {};

  useEffect(() => {
    setExpanded([]);
    setSearchText("");
  }, [clickedDomain]);

  useEffect(() => {
    if (confirmOpen2 && clickedItem) {
      setQuestion2(clickedItem.question);
      setAnswer2(clickedItem.answer);
    }
  }, [confirmOpen2, clickedItem]);

  const handleExpandChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prev) =>
        isExpanded ? [...prev, panel] : prev.filter((p) => p !== panel)
      );
    };

  const filteredList = listDatas.filter(
    (faq) =>
      faq.category === clickedDomain &&
      (faq.question.toLowerCase().includes(searchText.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchText.toLowerCase()))
  );

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuestion2(event.target.value);
  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setAnswer2(event.target.value);

  const handleSaveEdit = () => {
    if (!question2 || !answer2) {
      alert("질문과 답변을 모두 입력해 주세요.");
      return;
    }
    editFAQList(clickedItem?.faq_id as number);
  };

  return (
    <>
      <Modal open={confirmOpen2}>
        <ModalBox width="690px" height="auto">
          <ModalTitle style={{ paddingBottom: 0 }}>
            FAQ 수정하기
            <CloseIcon
              onClick={() => {
                setConfirmOpen2(false);
                setQuestion2(clickedItem?.question as string);
                setAnswer2(clickedItem?.answer as string);
              }}
            />
          </ModalTitle>
          <ModalBody style={{ gap: 20 }}>
            <Stack gap={1.5}>
              <GreyText900
                fontWeight={700}
                style={{ fontSize: 14 }}
                fontSize="1.4rem"
              >
                질문
              </GreyText900>
              <TextInput
                type="text"
                value={question2}
                onChange={handleQuestionChange}
                placeholder="질문을 입력해 주세요"
              />
            </Stack>
            <Stack gap={1.5}>
              <GreyText900
                fontWeight={700}
                style={{ fontSize: 14 }}
                fontSize="1.4rem"
              >
                답변
              </GreyText900>
              <TextInput
                value={answer2}
                onChange={handleAnswerChange}
                placeholder="답변을 입력해 주세요"
              />
            </Stack>
          </ModalBody>
          <ModalFoot>
            <GreyButton
              onClick={() => {
                setConfirmOpen2(false);
              }}
            >
              취소
            </GreyButton>
            <BlueButton onClick={handleSaveEdit}>저장</BlueButton>
          </ModalFoot>
        </ModalBox>
      </Modal>
      <PageContainer>
        <Title>FAQ</Title>
        <Stack gap={3}>
          <Stack direction="row" gap={1}>
            {faqLabels.map((label, i) => (
              <DomainBtn
                key={i}
                onClick={() => setClickedDomain(label)}
                selected={clickedDomain === label}
              >
                {label}
              </DomainBtn>
            ))}
          </Stack>
          <SearchField
            value={searchText}
            setValue={setSearchText}
            // onChange={(e) => handleInputChange(e)}
            // onClear={() => handleClear()}
            placeholder="검색"
            width="258px"
          />
          <Stack>
            {filteredList.length > 0 ? (
              filteredList.map((faq, i) => (
                <Accordion
                  key={i}
                  expanded={expanded.includes(`panel${i}`)}
                  onChange={handleExpandChange(`panel${i}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${i}d-content`}
                    id={`panel${i}d-header`}
                  >
                    <Typography>
                      <span style={{ color: theme.main.blue }}>Q.</span>{" "}
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ whiteSpace: "pre-wrap" }}>
                      {faq.answer}
                    </Typography>
                    <Stack gap={1} direction="row" ml="auto" mt={1}>
                      <RedLineButton
                        color="error"
                        variant="outlined"
                        onClick={() => deleteFAQList(faq.faq_id)}
                      >
                        삭제하기
                      </RedLineButton>
                      <GreyButton
                        onClick={() => {
                          setClickedItem(faq);
                          setConfirmOpen2(true);
                        }}
                      >
                        수정하기
                      </GreyButton>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Stack
                my={20}
                gap={2}
                alignItems="center"
                justifyContent="center"
              >
                <GreyText900>검색결과가 없습니다.</GreyText900>
              </Stack>
            )}
          </Stack>
          <GradientButton onClick={() => setConfirmOpen(true)}>
            <b>항목 추가하기</b>
          </GradientButton>
        </Stack>
      </PageContainer>
    </>
  );
}
