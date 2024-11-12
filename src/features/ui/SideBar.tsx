import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { SideBarContainer } from "./Container";
import React, { useState } from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { ReactComponent as HomeIco } from "@icon/ico_home.svg";
import { ReactComponent as ListIco } from "@icon/ico_list.svg";
import { ReactComponent as SideMenuOnIco } from "@icon/ico_side_on_menu.svg";
import { ReactComponent as SideMenuOffIco } from "@icon/ico_side_off_menu.svg";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLocation, useNavigate } from "react-router-dom";
import { theme } from "@theme";

const SideBar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sideOpen, setSideOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => {
    setSideOpen(!sideOpen);
  };

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {/* <SideMenuButton onClick={toggleSidebar} sideOpen={sideOpen}>
        {sideOpen ? <SideMenuOffIco /> : <SideMenuOnIco />}
      </SideMenuButton> */}
      <SideBarContainer sideOpen={sideOpen}>
        <CustomList>
          <CustomListItemButton
            selected={location.pathname === "/"}
            onClick={() => navigate("/")}
          >
            <ListItemIcon>
              <HomeIco className="ico_home" />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </CustomListItemButton>
          <CustomListItemButton
            onClick={() => handleClick(0)}
            selected={openIndex === 0}
          >
            {openIndex === 0 ? (
              <ArrowDropUpOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <ArrowDropDownOutlinedIcon sx={{ fontSize: 18 }} />
            )}
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText primary="COMPONENTS" />
          </CustomListItemButton>
          <Collapse in={openIndex === 0} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SubListItemButton
                selected={location.pathname === "/input"}
                onClick={() => navigate("/input")}
              >
                <ListItemText primary="Input" />
              </SubListItemButton>
              <SubListItemButton
                selected={location.pathname === "/tab"}
                onClick={() => navigate("/tab")}
              >
                <ListItemText primary="Tab" />
              </SubListItemButton>
              <SubListItemButton
                selected={location.pathname === "/btn"}
                onClick={() => navigate("/btn")}
              >
                <ListItemText primary="Button" />
              </SubListItemButton>
            </List>
          </Collapse>
          <CustomListItemButton
            onClick={() => handleClick(1)}
            selected={openIndex === 1}
          >
            {openIndex === 1 ? (
              <ArrowDropUpOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <ArrowDropDownOutlinedIcon sx={{ fontSize: 18 }} />
            )}
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText primary="UI" />
          </CustomListItemButton>
          <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SubListItemButton
                selected={location.pathname === "/sign-in"}
                onClick={() => navigate("/sign-in")}
              >
                <ListItemText primary="로그인" />
              </SubListItemButton>
              <SubListItemButton
                selected={location.pathname === "/sign-up"}
                onClick={() => navigate("/sign-up")}
              >
                <ListItemText primary="회원가입" />
              </SubListItemButton>
              <SubListItemButton
                selected={location.pathname === "/faq"}
                onClick={() => navigate("/faq")}
              >
                <ListItemText primary="FAQ" />
              </SubListItemButton>
              <SubListItemButton
                selected={location.pathname === "/list"}
                onClick={() => navigate("/list")}
              >
                <ListItemText primary="LIST" />
              </SubListItemButton>
            </List>
          </Collapse>
          {/* <CustomListItemButton
            onClick={() => handleClick(2)}
            selected={openIndex === 2}
          >
            {openIndex === 2 ? (
              <ArrowDropUpOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <ArrowDropDownOutlinedIcon sx={{ fontSize: 18 }} />
            )}
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText primary="혁신장터" />
          </CustomListItemButton>
          <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SubListItemButton>
                <ListItemText primary="조달업체 등록방법" />
              </SubListItemButton>
            </List>
          </Collapse>
          <CustomListItemButton
            onClick={() => handleClick(3)}
            selected={openIndex === 3}
          >
            {openIndex === 3 ? (
              <ArrowDropUpOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <ArrowDropDownOutlinedIcon sx={{ fontSize: 18 }} />
            )}
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText primary="종합쇼핑몰" />
          </CustomListItemButton>
          <Collapse in={openIndex === 3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SubListItemButton>
                <ListItemText primary="조달업체 등록방법" />
              </SubListItemButton>
            </List>
          </Collapse>
          <CustomListItemButton
            onClick={() => handleClick(4)}
            selected={openIndex === 4}
          >
            {openIndex === 4 ? (
              <ArrowDropUpOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <ArrowDropDownOutlinedIcon sx={{ fontSize: 18 }} />
            )}
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText primary="학교장터" />
          </CustomListItemButton>
          <Collapse in={openIndex === 4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SubListItemButton>
                <ListItemText primary="조달업체 등록방법" />
              </SubListItemButton>
            </List>
          </Collapse> */}
        </CustomList>
      </SideBarContainer>
    </>
  );
};

export default SideBar;

const SideMenuButton = styled(IconButton)<{ sideOpen: boolean }>`
  && {
    position: absolute;
    z-index: 1;
    top: 24px;
    left: ${(props) => (props.sideOpen ? "0" : "236px")};
    width: 48px;
    height: 48px;
    background-color: ${theme.main.blue};
    opacity: 0.7;
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
    svg {
      font-size: 3rem;
    }
    &:hover {
      opacity: 1;
      background-color: ${theme.main.blue};
    }
  }
`;

const CustomList = styled(List)`
  && {
    width: 100%;
    padding: 30px 0;
  }
`;

const CustomListItemButton = styled(ListItemButton)<{ selected: boolean }>`
  & .MuiTypography-root {
    font-weight: 700;
    color: ${theme.grey[700]};
    font-size: 14px;
  }
  &.MuiButtonBase-root:first-child {
    padding-left: 34px;
  }
  &.MuiButtonBase-root {
    font-size: 1.6rem;
    padding: 4px 12px;
    &.Mui-selected {
      background-color: transparent;
      color: ${theme.main.blue};
    }
    &.Mui-selected .MuiTypography-root {
      color: ${theme.main.blue};
      background-color: transparent;
    }
    &.Mui-selected .MuiListItemIcon-root svg {
      fill: ${theme.main.blue};
    }
    &.Mui-selected .MuiListItemIcon-root svg.ico_home {
      stroke: ${theme.main.blue};
    }
    & .MuiListItemIcon-root {
      min-width: 25px;
      svg {
        fill: ${theme.main.blue};
      }
      svg.ico_home {
        stroke: ${theme.main.blue};
      }
    }
    & .MuiSvgIcon-root {
      margin-right: 6px;
    }
  }
`;

const SubListItemButton = styled(ListItemButton)`
  & .MuiTypography-root {
    font-size: 14px;
  }
  &.MuiButtonBase-root {
    padding-left: 65px;

    &.Mui-selected {
      background-color: transparent;
      color: ${theme.main.blue};
    }
    &.Mui-selected .MuiTypography-root {
      color: ${theme.main.blue};
      background-color: transparent;
    }
  }
`;
