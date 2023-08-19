import styled from '@emotion/styled';

const ErrorText = styled.small`
  font-size: 12px;
  color: red;
`;

export default ({ label }: { label: string }) => <ErrorText>{label}</ErrorText>;
