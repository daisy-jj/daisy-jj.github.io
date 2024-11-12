import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { red } from "@mui/material/colors";
import { ChangeEvent, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Clear, Search } from "@mui/icons-material";
import { theme } from "@theme";

export const OutlinedTextInput = styled(OutlinedInput)<{
  width?: string;
  height?: string;
  borderradius?: string;
}>`
  && {
    &.MuiOutlinedInput-root {
      width: ${(props) => props.width};
      height: ${(props) => props.height};
      font-size: 14px;
      background-color: #fff;
      border-radius: ${(props) => props.borderradius};
      overflow: hidden;

      &::placeholder {
        color: ${theme.grey[500]};
      }
      &.Mui-disabled {
        background-color: ${theme.grey[100]};
      }
      & fieldset {
        border-color: ${theme.grey[200]};
      }
      &.Mui-focused fieldset {
        border-color: ${theme.main.blue};
      }
      &.Mui-error fieldset {
        border-color: ${red[500]};
      }
    }
    svg {
      color: ${theme.grey[300]};
    }
  }
`;

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  width?: string;
  height?: string;
  placeholder?: string;
  borderradius?: string;
}

const SearchField = ({
  value,
  setValue,
  // onChange,
  onClear,
  width,
  placeholder,
  height,
  borderradius,
}: SearchFieldProps) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (value) {
      setInput(value);
    }
  }, [value]);

  return (
    <>
      <OutlinedTextInput
        size="small"
        placeholder={placeholder ?? ""}
        width={width ?? "100%"}
        height={height ?? "33px"}
        borderradius={borderradius ?? "4px"}
        fullWidth
        value={input}
        // onChange={onChange}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setValue(input);
            if (onClear) {
              onClear();
            }
          }
        }}
        endAdornment={
          <InputAdornment position="end">
            {input && (
              <IconButton
                aria-label="clear-button"
                edge="end"
                // onClick={onClear}
                onClick={() => {
                  setInput("");
                  setValue("");
                  if (onClear) {
                    onClear();
                  }
                }}
                size="small"
              >
                <Clear sx={{ fontSize: "21px", color: theme.grey[800] }} />
              </IconButton>
            )}
            <IconButton
              aria-label="serach-button"
              edge="end"
              onClick={() => {
                setValue(input);
                if (onClear) {
                  onClear();
                }
              }}
              disabled={input === ""}
            >
              <Search
                sx={{
                  fontSize: "21px",
                  color: input === "" ? theme.grey[800] : "#000 !important",
                }}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchField;
