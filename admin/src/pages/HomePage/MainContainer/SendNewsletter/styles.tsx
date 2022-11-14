import styled from "styled-components";
import { Typography } from "@strapi/design-system";
import ReactQuill from "react-quill";

export const StyledTypography = styled(Typography)`
  font-weight: 600;
  color: #32324d;
  font-size: 0.75rem;
  line-height: 1.33;
  margin-left: 3px;
`;

export const StyledQuill = styled(ReactQuill)`
  margin-top: 4px;

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
`;
