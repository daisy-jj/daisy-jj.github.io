import { theme } from "@theme";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        accent-color: ${theme.main.blue};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;      
    }

    html {
        font-size: 62.5%; //1rem = 10px;
    }

    body{
        font-family: 'Pretendard', 'Poppins', sans-serif !important;
        font-size: 1.4rem;
        min-width: 280px;
    }

    p,span{
        font-family: 'Pretendard', 'Poppins', sans-serif !important;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

   
    button{
    width: fit-content;
    border: 0;
    border-radius: 12px;
    padding: 12px 16px;
    outline: none;
    white-space: nowrap;
    font-family: "Pretendard";
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    &:hover {
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    }

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }

    ol, ul, li {
        list-style: none;
    }
	
`;

export default GlobalStyle;
