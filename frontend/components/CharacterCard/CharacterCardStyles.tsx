import styled from 'styled-components';

const Container = styled.div`
    background-color: #f8fafc;
    color: #333333;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;

    > span:first-child {
        font-weight: 700;
    }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding: 1rem 0;

    > img {
      max-height: 150px;
    }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  };

  td:first-child, th:first-child {
    font-weight: 700;
  };

  td:last-child {
    text-align: right; 
  };
`;

export {
  Container,
  Row,
  ImageContainer,
  Table,
}