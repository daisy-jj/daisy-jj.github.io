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
import { theme } from "@theme";

export default function Input() {
  const navigate = useNavigate();
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

  return (
    <PageContainer>
      <Stack>
        <Stack gap={2}>
          <Stack direction="row" gap={3}>
            <TextInput
              /* disabled */
              value={text}
              placeholder="아이디 입력"
              onChange={changeText}
              sx={{ width: "240px" }}
              autoComplete="new-password"
            />
          </Stack>
          <Stack direction="row" gap={3}>
            <Stack>
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
                  width: "240px",
                  "& .MuiFormHelperText-root": { fontSize: 12 },
                }}
              />
            </Stack>
          </Stack>
          <Divider
            sx={{
              borderColor: theme.line,
              my: 2,
            }}
          />

          <CustomFormControl sx={{ width: "240px" }} variant="outlined">
            <OutlinedTextInput
              placeholder="검색"
              value={searchText}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  {searchText && (
                    <IconButton
                      aria-label="clear-button"
                      edge="end"
                      onClick={handleClear}
                    >
                      <Clear sx={{ fontSize: "21px" }} />
                    </IconButton>
                  )}
                  <IconButton aria-label="serach-button" edge="end">
                    <Search sx={{ fontSize: "21px" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* <FormHelperText sx={{ color: theme.palette.error.light }}>
                  FormHelperText
                </FormHelperText> */}
          </CustomFormControl>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
