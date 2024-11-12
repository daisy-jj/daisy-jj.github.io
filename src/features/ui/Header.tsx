import styled, { useTheme } from "styled-components";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Popover,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as Logo } from "@image/logo.svg";
import { useNavigate } from "react-router-dom";
import React, { ChangeEvent, useState } from "react";
import { AccountCircle, Clear } from "@mui/icons-material";
import { ReactComponent as SearchIco } from "@icon/search.svg";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { GreyText900 } from "./Typography";
import { OutlinedTextInput } from "./Input";
import { media, theme } from "@theme";

interface SearchFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  width?: string;
  placeholder?: string;
}

const SearchField = ({
  value,
  onChange,
  onClear,
  width,
  placeholder,
}: SearchFieldProps) => {
  const theme = useTheme();
  return (
    <>
      <OutlinedTextInput
        size="small"
        placeholder={placeholder ?? "검색"}
        sx={{
          width: width ?? "100%",
          height: "48px",
          backgroundColor: theme.component.input,
          fontSize: "1.4rem",
        }}
        fullWidth
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <IconButton
                aria-label="clear-button"
                edge="end"
                onClick={onClear}
                size="small"
              >
                <Clear sx={{ fontSize: "21px", color: theme.grey[600] }} />
              </IconButton>
            )}
            <IconButton aria-label="serach-button" edge="end">
              <SearchIco
                style={{
                  fill: theme.palette.primary.main,
                  width: 16,
                  height: 16,
                }}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default function Header() {
  const navigation = useNavigate();
  const isMobile = useMediaQuery(media.mobile);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleSearchClose = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl2);
  const id = open ? "simple-popover" : undefined;

  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <HeaderWrapper
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          disableRipple
          onClick={() => navigation("/")}
          sx={{
            p: 0,
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          logo
          {/* <Logo className="logo" width="auto" height="37px" /> */}
        </IconButton>
        <Stack direction="row" mr="auto" spacing={4} className="menulist">
          <NavButton variant="text" color="inherit">
            홈
          </NavButton>
          <NavButton variant="text" color="inherit">
            MENU1
          </NavButton>
        </Stack>
        {/* {auth ? (
          <UserMenu direction="row" alignItems="center">
            <IconButton
              color="inherit"
              size="small"
              onClick={handleSearchClick}
              className="searchBtn"
            >
              <SearchIco style={{ fill: grey[800] }} />
            </IconButton>
            <Stack direction="row" alignItems="center" gap={0.25}>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="small"
              >
                <UserAvatar
                  sx={{
                    bgcolor: "#F2D747",
                    textTransform: "uppercase",
                  }}
                >
                  J
                </UserAvatar>
              </IconButton>
              <UserName>JJJ</UserName>
            </Stack>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  width: 187,
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonIcon fontSize="medium" />
                </ListItemIcon>
                <GreyText900>마이페이지</GreyText900>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <BookmarkIcon fontSize="medium" />
                </ListItemIcon>
                <GreyText900>북마크</GreyText900>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="medium" />
                </ListItemIcon>
                <GreyText900>로그아웃</GreyText900>
              </MenuItem>
            </Menu>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl2}
              onClose={handleSearchClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiPaper-root": {
                  width: isMobile ? 270 : 300,
                  p: isMobile ? 2 : 3,
                },
              }}
            >
              <SearchField
                value={searchText}
                onChange={(event) => handleInputChange(event)}
                onClear={() => handleClear()}
              />
            </Popover>
          </UserMenu>
        ) : (
          <NavButton variant="text" color="inherit">
            로그인
          </NavButton>
        )} */}
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled(Stack)`
  height: 60px;
  padding: 0 24px;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid ${theme.grey[200]};

  .menulist {
    margin-left: 80px;
  }
  .searchBtn {
    padding: 0;
  }
  .searchBtn svg {
    width: 20px;
    height: 20px;
  }

  ${media.tablet} {
    height: 50px;
    padding: 0 12px;

    .logo {
      width: auto;
      height: 30px;
    }

    .menulist {
      margin-left: 12px;
    }

    .searchBtn svg {
      width: 16px;
      height: 16px;
    }
  }

  ${media.mobile} {
    .logo {
      width: auto;
      height: 22px;
    }
  }
`;

const NavButton = styled(Button)`
  &.MuiButtonBase-root {
    height: fit-content;
    min-width: fit-content;
    font-weight: 700;
    font-size: 14px;

    ${media.tablet} {
      font-size: 14px;
      margin-left: 0px;
    }
  }
`;

const UserMenu = styled(Stack)`
  gap: 24px;
  ${media.tablet} {
    gap: 12px;
  }
`;

const UserName = styled(Typography)`
  font-size: 14px;
  ${media.tablet} {
    display: none;
  }
`;

const UserAvatar = styled(Avatar)`
  && {
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: 600;

    ${media.tablet} {
      width: 24px;
      height: 24px;
    }
  }
`;
