import styled from "styled-components";

export const StyledRecipeList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

export const StyledRecipeItem = styled.li`
  background-color: white;
  width: 30%;
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 9px gray;

  @media (max-width: 850px) {
    width: 45%;
  }

  @media (max-width: 850px) {
    width: 45%;
  }

  @media (max-width: 650px) {
    width: 90%;
  }
`;
