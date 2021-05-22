import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #5e8e65;
  padding: 1rem;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-right: 30px;
`;

export const StyledCheckoutCart = styled.div`
  position: relative;
  p {
    top: -20px;
    right: -10px;
    position: absolute;
    background-color: white;
    color: #5e8e65;
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 10px;
  }
`;
