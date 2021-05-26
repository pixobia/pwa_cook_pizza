import styled from "styled-components";

export const StyledShare = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a,
  h1 {
    color: white;
    text-size: 20px;
    display: inline;
    text-decoration: none;
  }
  h1 {
    padding-right: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
