import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 10px;
  text-align: left;
  font-size: 1.3rem;
  line-height: 1;
  min-width: 26px;
  min-height: 26px;

  color: #182026;
  background-color: #f5f8fa;
  background-image: linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0));
  box-shadow: inset 0 0 0 1px rgba(16,22,26,.2),inset 0 -1px 0 rgba(16,22,26,.1);

  &:hover {
    background-clip: padding-box;
    background-color: #ebf1f5;
    box-shadow: inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1);
  }

  &:active {
    box-shadow: inset 0 0 0 1px rgba(16,22,26,.2), inset 0 1px 2px rgba(16,22,26,.2);
    background-color: #d8e1e8;
    background-image: none;
  }

  & + & {
    margin-left: 8px;
  }
`;
