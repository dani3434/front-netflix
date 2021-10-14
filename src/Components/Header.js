import React from 'react';
import logo from '../assets/logo.png';

const Header = ({ hideMenu }) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
  }, []);

  const deslogar = () => {
    localStorage.removeItem('@user');
    window.location.reload();
  };

  return (
    <div class="container-fluid">
      <header class="row">
        <div class="col-2">
          <img src={logo} />
        </div>
        {!hideMenu && (
          <div class="col-8">
            <ul class="menu_list col-10">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Séries</a>
              </li>
              <li>
                <a href="#">Filmes</a>
              </li>
              <li>
                <a href="#">Mais Recentes</a>
              </li>
              <li>
                <a href="#">Minha lista</a>
              </li>
            </ul>
          </div>
        )}
        {!hideMenu && (
          <div className="col-2 text-right">
            <a href="#" onClick={deslogar} className="text-white">
              Olá {user.nome}, Sair?
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
