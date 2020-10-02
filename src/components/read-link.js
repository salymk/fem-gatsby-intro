import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
  color: black;
  transition: 0.3s;

  :hover {
    color: purple;
  }
`;

export default ReadLink;
