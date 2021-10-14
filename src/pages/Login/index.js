import React from 'react';
import Header from '../../Components/Header';
import api from '../../services/api';

const Index = () => {
  const [credenciais, setCredenciais] = React.useState({
    email: '',
    senha: '',
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      localStorage.setItem('@user', JSON.stringify(res.usuario));
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      class="container-fluid bg_filmes"
      style={{ position: 'fixed', height: '100%' }}
    >
      <Header hideMenu />
      <div id="caixa_login" class="col-4 offset-4">
        <h1 class="text-white">Entrar</h1>
        <br />
        <form onSubmit={login}>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Email ou número de telefone"
            onChange={({ target }) =>
              setCredenciais({
                ...credenciais,
                email: target.value,
              })
            }
          />
          <br />
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Senha"
            onChange={({ target }) =>
              setCredenciais({
                ...credenciais,
                senha: target.value,
              })
            }
          />
          <br />

          <button class="btn btn-lg btn-block btn-danger">Entrar</button>

          <div class="row mt-4">
            <div class="col text-muted">
              <input type="checkbox" /> Lembrar de mim.
            </div>
            <div class="col text-right">
              <a href="#" class="text-muted">
                Precisa de ajuda?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
