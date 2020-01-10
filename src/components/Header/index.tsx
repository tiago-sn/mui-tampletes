import React from 'react';
import useStyles from './styles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Telzir Fale Mais</h1>
      <h2 className={classes.h2}>
        Planos de 30, 60 e 120 minutos para chamadas de longa distância
      </h2>
      <p className={classes.p}>Você só paga os minutos excedentes</p>
      <hr />
      <h3 className={classes.h3}>Faça a simulação abaixo</h3>
    </header>
  );
};

export default Header;
