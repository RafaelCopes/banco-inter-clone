import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../../components/Header';
import Sidebar from './Sidebar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
        </Wrapper>
      </Container>
    </>
  );
}

export default Dashboard;
