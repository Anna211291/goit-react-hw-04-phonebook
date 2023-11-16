import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 60px;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h2`
  width: 460px;
  display: flex;
  margin: 0 auto;
  gap: 20px;
  color: #7eb101;
  font-size: 28px;
  font-weight: 700;
`;

export const ContactsWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  border: 2px solid #7eb101;
  padding: 16px;
`;
