import styled from 'styled-components';
import { Typography } from 'antd';
const { Title } = Typography;

export const FormWrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: table;
  max-width: 650px;
  padding: 3em 2em;
`;

export const FormTitle = styled(Title)`
  font-size: 28px!important;
  margin-bottom: 1em!important;
`;