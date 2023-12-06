import styled from 'styled-components';

const ExpandIcon = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 8px;
  transition: transform 0.3s ease;
  float: right;
  margin-right: 8px;
  cursor: pointer;
`;

const Row = styled.div`
    height: 24px;
    margin-top: 4px;
`;

export {
    ExpandIcon,
    Row,
}