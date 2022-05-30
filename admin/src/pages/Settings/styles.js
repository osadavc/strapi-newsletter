import styled from "styled-components";
import { Typography, Alert } from "@strapi/design-system";

export const InputContainer = styled.div`
  margin-top: 35px;

  & > div {
    margin-bottom: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 15px;

  button {
    margin-right: 0.8rem;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 15px;
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 30px;
`;
