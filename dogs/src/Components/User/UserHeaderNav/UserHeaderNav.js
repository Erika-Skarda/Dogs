import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../../UseContext/UserContext';
import { ReactComponent as MinhasFotos } from  '../../../Assets/feed.svg';
import { ReactComponent as Estatísticas } from  '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from  '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from  '../../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useUser();
  const [mobile, setMobile] = useState(null);
  return (
      <nav className={styles.nav}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
            {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatísticas/>
            {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AdicionarFotos />
          {mobile && 'Adicionar Fotos'}        
        </NavLink>

        <button onClick={userLogout}>
          <Sair />  
          {mobile && 'Sair'} 
        </button>
      </nav>
  );
}

export default UserHeaderNav;