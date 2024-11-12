import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SolidGrayButton, SolidSoftButton } from "@features/ui/Button";
import { ChangeEvent, useState } from "react";
import { SubTap } from "@features/ui/SubTab";
import {
  CustomFormControl,
  OutlinedTextInput,
  TextInput,
} from "@features/ui/Input";
import React from "react";
import { Clear, Search } from "@mui/icons-material";
import { PageContainer } from "@features/ui/Container";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlueAniButton } from "./Button";

export const SignBox = styled(Stack)`
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #dee0e2;
  gap: 40px;
  width: 422px;
`;

export default function SignIn() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [text, setText] = React.useState("");
  const [password, setPassword] = useState<string>("");
  const [pwError, setPwError] = useState(false);
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [error, setError] = React.useState(true);
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text !== e.target.value) setText(e.target.value);
  };

  const [searchText, setSearchText] = useState("");
  const handleClear = () => {
    setSearchText("");
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function getPwErrMessage(password: string) {
    if (/[^A-Za-z\d@$!%*?&#^]/.test(password)) {
      return "특수문자는 (!@#$%^&*)만 사용할 수 있습니다.";
    }
    if (password.length < 8) {
      return "8자 이상으로 입력해 주세요.";
    }
    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      return "영문+숫자 조합으로 입력해 주세요.";
    }
    return "비밀번호 8자리 이상, 영문+숫자 조합";
  }

  function isValidPassword(password: string) {
    // 비밀번호가 8자리 이상이며, 영문자와 숫자가 반드시 포함되고, 특수 기호는 선택 사항
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#^]{8,}$/;
    return regex.test(password);
  }

  const handleWithdraw = async () => {
    if (password === "") {
      setPwError(true);
      setPwErrorMessage("비밀번호를 입력해 주세요.");
      return;
    }
    // 비밀번호 유효성 검사
    if (!isValidPassword(password)) {
      setPwError(true);
      setPwErrorMessage(getPwErrMessage(password));
    }

    await navigate("/sign-in");
  };

  return (
    <PageContainer justifyContent="center" alignItems="center">
      <SignBox>
        <Typography fontSize={14}>로그인</Typography>
        <Stack gap={3} flex={1}>
          <TextInput
            /* disabled */
            value={text}
            placeholder="아이디 입력"
            onChange={changeText}
            autoComplete="new-password"
          />
          <Stack direction="row" gap={3}>
            <TextInput
              placeholder="비밀번호 입력"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              error={pwError}
              helperText={pwErrorMessage}
              autoComplete="new-password"
              sx={{
                "& .MuiFormHelperText-root": { fontSize: 12 },
              }}
            />
          </Stack>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color="#44464F" variant="body1" fontSize={14}>
            비밀번호를 잊으셨나요?
          </Typography>
          <Button
            variant="text"
            onClick={() => navigate("/sign-in")}
            sx={{ fontSize: 14 }}
          >
            비밀번호 찾기
          </Button>
        </Stack>
        <BlueAniButton onClick={handleWithdraw} style={{ width: "100%" }}>
          로그인
        </BlueAniButton>
      </SignBox>
    </PageContainer>
  );
}
