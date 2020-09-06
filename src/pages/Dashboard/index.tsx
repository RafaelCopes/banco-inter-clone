import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../../components/Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
