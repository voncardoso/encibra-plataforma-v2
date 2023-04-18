import styled from "styled-components";

export const Nav = styled.aside`

    a{
        position: relative;
        top: 5px;
        &.active{
            letter-spacing: 0.2px;
            font-weight: 500;
            color: #E2942F;
            padding-bottom: 4px;
            border-bottom: solid 2px #E2942F;
        }
    }
`;