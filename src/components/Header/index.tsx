import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';

import { BancoInter } from '../../assets/index';

import { User } from './Header';

import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import Gradient from './Gradient';

const Header: React.FC = () => {
  const user: User = {
    name: 'Rafael Copes',
  }

  return (
    <>
      <Container>
        <Wrapper>
          <LeftNav>
            <BancoInter />
            Internet Banking
          </LeftNav>
          <RightNav>
            <Button variant='secondary'>
              Simulador de renda fixa
            </Button>
            <AccountDropdown user={user} />
          </RightNav>
        </Wrapper>
      </Container>
      <Gradient />
    </>
  );
}

export default memo(Header);


