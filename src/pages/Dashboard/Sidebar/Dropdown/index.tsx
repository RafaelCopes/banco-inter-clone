import React, { ReactNode } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

interface DropdownProps {
  icon: ReactNode;
  sectionName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ icon, sectionName }) => {
  return (
    <Container>
      <div>{icon}</div>
      {sectionName}
      <FiChevronDown />
    </Container>
  );
}

export default Dropdown;
