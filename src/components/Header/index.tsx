import {
  HeaderContainer,
  HeaderWrapper,
  UserInfo
} from './styles';

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from 'react-router-dom';
import UserCircle from '../UserCircle';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate('/');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img
          src={logoInter}
          width={172}
          height={61}
          alt="Logo inter"
        />

        <UserInfo>
          <UserCircle
            initials="AN"
          />

          <div>
            <p>Olá. <span className="primary-color font-bold">Adson</span></p>
            <strong>61263128313-2</strong>
            <br />
            <a href="#" onClick={handleLogoff} >Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;