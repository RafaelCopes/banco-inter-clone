import React from 'react';

import {BarChartIcon, DollarSignIcon, PieChartIcon, ShieldIcon, SmartphoneIcon, UmbrellaIcon } from '../assets/images/icons';

export default {
  'Conta digital': {
    icon: <SmartphoneIcon />,
  },
  Crédito: {
    icon: <DollarSignIcon />,
  },
  Investimentos: {
    icon: <BarChartIcon />,
  },
  IDTVM: {
    icon: <PieChartIcon />,
  },
  Seguros: {
    icon: <UmbrellaIcon />,
  },
  'Recarga de celular': {
    icon: <SmartphoneIcon />,
  },
  'Sua segurança': {
    icon: <ShieldIcon />,
  },
} as const;
