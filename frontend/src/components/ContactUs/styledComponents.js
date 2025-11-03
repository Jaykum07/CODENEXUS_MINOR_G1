import styled from 'styled-components';

// Main container for the whole page/section
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

// A generic section wrapper
export const Section = styled.section`
  margin-bottom: 60px;
`;

// Main heading for a section
export const Heading = styled.h2`
  font-size: 28px;
  color: #0F0725;
  margin-bottom: 8px;
`;

// Subheading text
export const Subheading = styled.p`
  font-size: 16px;
  color: #6E6E6E;
  margin-bottom: 30px;
`;

// Wrapper for the "Get Involved" section
export const GetInvolvedWrapper = styled.div`
  display: flex;
  gap: 40px;

  // On mobile (like your first screenshot), stack them
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

// Left side of the "Get Involved" section
export const ImageContainer = styled.div`
  flex: 1;
  background-color: #f4f6ff;
  overflow: hidden;
`;

export const IllustrationImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ImageInfoBox = styled.div`
  background-color: #4B0082;
  color: white;
  padding: 20px;
  font-size: 14px;
  line-height: 1.6;
`;

// Right side (the form)
export const Form = styled.form`
  flex: 1;
  display: grid;
  // Two columns on desktop
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  // One column on mobile
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  // Make specific items span both columns
  &.full-width {
    grid-column: 1 / -1;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #0F0725;

  & span {
    color: red; // For the asterisk
  }
`;

// Shared styles for inputs
const inputStyles = `
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4B0082;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Select = styled.select`
  ${inputStyles}
  appearance: none;
`;

export const Textarea = styled.textarea`
  ${inputStyles}
  min-height: 120px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: #E8A509;
  color: #0F0725;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  grid-column: 1 / -1; // Full width

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FormStatusMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

// --- FAQ Section Styles ---

export const FAQItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden; // For the animation
`;

export const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  cursor: pointer;
  background-color: #fafafa;
`;

export const FAQTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

export const FAQContent = styled.div`
  max-height: ${props => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  padding: ${props => (props.isOpen ? '0 18px 18px' : '0 18px')};
  color: #6E6E6E;
  font-size: 15px;
  line-height: 1.6;
  border-top: ${props => (props.isOpen ? '1px solid #e0e0e0' : 'none')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

export const ToggleButton = styled.button`
  background-color: #4B0082;
  color: white;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const AskLink = styled.span`
  color: #4B0082;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;