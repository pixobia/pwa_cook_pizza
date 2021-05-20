import styled from "styled-components";

export const StyledRecipe = styled.div`
  border-radius: 20px;
  position: relative;
  background-color: white;
  h2 {
    color: #5e8e65;
  }
  h3 {
    color: black;
  }
  p {
    color: black;
  }
`;

export const StyledFoodImg = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const StyledImgContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  right: 10px;
  bottom: 170px;
  cursor: pointer;
`;

export const StyledCartImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledTextarea = styled.div`
  padding: 2rem;
`;
