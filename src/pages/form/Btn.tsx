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
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SolidGrayButton, SolidSoftButton } from "@features/ui/Button";
import { useState } from "react";
import { SubTap } from "@features/ui/SubTab";
import {
  CustomFormControl,
  OutlinedTextInput,
  TextInput,
} from "@features/ui/Input";
import React from "react";
import { Clear, Search } from "@mui/icons-material";
import { PageContainer } from "@features/ui/Container";
import { theme } from "@theme";
import {
  BlueAniButton,
  BlueButton,
  BlueLineButton,
  BlueTextButton,
  GradientButton,
  GradientLineButton,
  GreyButton,
  GreyLineButton,
  GreyTextButton,
  RedButton,
  RedLineButton,
  RedTextButton,
} from "../ui/Button";
import { ReactComponent as IconPlusSmall } from "../../assets/svgs/ico_plus_small.svg";

export default function Btn() {
  const [text, setText] = React.useState("");
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

  return (
    <PageContainer>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        <Button
          sx={{
            p: 1,
            color: "#fff",
            backgroundColor: "Grey",
            borderRadius: 1.5,
            fontSize: 14,
            ":hover": { backgroundColor: "black" },
          }}
        >
          Custom Button
        </Button>
        <Button
          sx={{
            p: 1,
            color: "black",
            borderColor: "black",
            borderRadius: 1.5,
            fontSize: 14,
            ":hover": { borderColor: "black" },
          }}
          variant="outlined"
        >
          Custom Button Outlined
        </Button>
        <Button
          sx={{
            p: 1,
            color: "#fff",
            backgroundColor: "Grey",
            borderRadius: 1.5,
            fontSize: 14,
            ":hover": { backgroundColor: "black" },
          }}
          variant="contained"
        >
          Custom Button Contained
        </Button>
        <Button
          sx={{
            p: 1,
            color: "#333",
            borderRadius: 1.5,
            fontSize: 14,
            ":hover": { backgroundColor: "#eee" },
          }}
          variant="text"
        >
          Custom Button Text
        </Button>
      </Stack>
      <Divider
        sx={{
          borderColor: theme.line,
          my: 3,
        }}
      />
      <Stack gap={2}>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <RedButton>contained</RedButton>
          <GreyButton>contained</GreyButton>
          <BlueButton>contained</BlueButton>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <RedLineButton>outlined</RedLineButton>
          <GreyLineButton>outlined</GreyLineButton>
          <BlueLineButton>outlined</BlueLineButton>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <RedTextButton>text</RedTextButton>
          <GreyTextButton>text</GreyTextButton>
          <BlueTextButton>text</BlueTextButton>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <RedLineButton startIcon={<DeleteIcon />}>startIcon</RedLineButton>
          <GreyLineButton startIcon={<DeleteIcon />}>startIcon</GreyLineButton>
          <BlueLineButton startIcon={<DeleteIcon />}>startIcon</BlueLineButton>
          <RedButton startIcon={<DeleteIcon />}>startIcon</RedButton>
          <GreyButton startIcon={<DeleteIcon />}>startIcon</GreyButton>
          <BlueButton startIcon={<DeleteIcon />}>startIcon</BlueButton>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <RedLineButton endIcon={<DeleteIcon />}>endIcon</RedLineButton>
          <GreyLineButton endIcon={<DeleteIcon />}>endIcon</GreyLineButton>
          <BlueLineButton endIcon={<DeleteIcon />}>endIcon</BlueLineButton>
          <RedButton endIcon={<DeleteIcon />}>endIcon</RedButton>
          <GreyButton endIcon={<DeleteIcon />}>endIcon</GreyButton>
          <BlueButton endIcon={<DeleteIcon />}>endIcon</BlueButton>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <GradientButton>
            <b>Gradient Button</b>
          </GradientButton>
          <GradientLineButton>
            <IconPlusSmall />
            <span>Gradient Line Button</span>
          </GradientLineButton>
          <BlueAniButton style={{ width: "100%" }}>Animate Style</BlueAniButton>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
