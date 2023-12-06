import styled from 'styled-components';

const TEXT_COLOR = "#2d3748";

const FormElement = styled.div`
    margin-bottom: 1rem;
    padding: 0 1rem;
`;

const Label = styled.label`
    display: block;
    color: #4a5568; 
    font-size: 0.875rem; 
    font-weight: 700;
    margin-bottom: 0.5rem;
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

export { FormElement, Label, Input }