import styled from 'styled-components';

const TEXT_COLOR = "#2d3748";

const Container = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${TEXT_COLOR}; 
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e0; 
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.2s;
  color: ${TEXT_COLOR};

  &:focus {
    border-color: #4299e1; 
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e0; /* Border color */
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.2s;
  color: ${TEXT_COLOR};

  &:focus {
    border-color: #4299e1; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #4299e1; 
  color: #fff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 12rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #3182ce; 
  }
`;

const FormElement = styled.div`
    margin-bottom: 1rem;
    padding: 0 1rem;
`

const Label = styled.label`
    display: block;
    color: #4a5568; 
    font-size: 0.875rem; 
    font-weight: 700;
    margin-bottom: 0.5rem;
`

const TextBox = styled.div`
  text-align: center;
  font-size: 11px;
`

const ErrorMessage = styled(TextBox)`
  color: red;
`;

const SuccessMessage = styled(TextBox)`
  color: teal;
`

export {
  Container,
  Header,
  Input,
  Textarea,
  Button,
  ButtonContainer,
  FormElement,
  Label,
  ErrorMessage,
  SuccessMessage,
};