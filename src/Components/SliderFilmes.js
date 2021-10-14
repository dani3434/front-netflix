import React from 'react';
import FilmeSliderItem from './FilmeSliderItem';

const SliderFilmes = ({ secoes }) => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5 class="text-white">{secoes[0]?.generos[0]}</h5>
          </div>
        </div>
      </div>

      <div className="col-12">
        <ul class="filme_lista">
          {secoes?.map((item) => (
            <FilmeSliderItem item={item} key={item._id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SliderFilmes;
