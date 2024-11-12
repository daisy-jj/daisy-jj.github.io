import { FormControl, OutlinedInput, TextField } from "@mui/material";
import { theme } from "@theme";
import styled from "styled-components";

export const TextInput = styled(TextField)`
  && {
    & .MuiInputBase-root {
      font-size: 1.4rem;

      &::placeholder {
        color: ${theme.grey[500]};
      }
      &.Mui-disabled {
        background-color: ${theme.grey[100]};
      }
    }
    & fieldset {
      border-color: ${theme.grey[200]};
    }
    svg {
      color: ${theme.grey[500]};
    }
  }
`;

export const OutlinedTextInput = styled(OutlinedInput)`
  && {
    &.MuiInputBase-root {
      font-size: 1.4rem;

      &::placeholder {
        color: ${theme.grey[500]};
      }
      &.Mui-disabled {
        background-color: ${theme.grey[100]};
      }
    }
    & fieldset {
      border-color: ${theme.grey[200]};
    }
    & .MuiFormHelperText-root {
      font-size: 1.2rem;
    }
    svg {
      color: ${theme.grey[500]};
    }
  }
`;

export const CustomFormControl = styled(FormControl)`
  && {
    .MuiFormHelperText-root {
      font-size: 1.2rem;
      margin: 8px 0 0;
    }
  }
`;
