import React from 'react';
import TituloHero from '../assets/diabo-de-cada-dia.png';
import BadgeHero from '../assets/badge-top-10.png';

const Hero = ({ principal }) => {
  return (
    <div
      id="hero"
      class="container-fluid"
      style={{ backgroundImage: `url(${principal.capa})` }}
    >
      <div class="container">
        <div class="row" id="hero_infos">
          <div class="col-6">
            <img class="logo" src={principal.logo} alt="Titulo Hero" />
            <h1 class="text-white">
              <img src={BadgeHero} alt="Badge Hero" />
              Top 1 de hoje no Brasil.
            </h1>
            <p class="text-white">
              {principal.descricao?.substr(0, 190) + '...'}
            </p>
            <br />
            <button class="btn btn-lg btn-custom-white">
              <span class="mdi mdi-play"></span> Assistir
            </button>
            {'   '}
            <button class="btn btn-lg btn-custom-translucent">
              <span class="mdi mdi-information-outline"></span> Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
