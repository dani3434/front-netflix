import React from 'react';

const FilmeSliderItem = ({ item }) => {
  const selectFilme = () => {
    const event = new CustomEvent('selectdFilme', {
      detail: item,
    });

    window.dispatchEvent(event);
  };

  return (
    <li
      class="filme"
      onClick={selectFilme}
      data-toggle="modal"
      data-target="#modal-filme"
    >
      <img class="img-fluid" src={item.thumb} alt="thumbnail" />
      <div class="filme_info">
        <div class="col-12">
          <a href="#" class="btn-custom-round btn btn-light rounded-circle">
            <span class="mdi mdi-play"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-thumb-up text-white"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-thumb-down text-white"></span>
          </a>
          <a
            href="#"
            class="btn-custom-round border-white btn rounded-circle opacity-50"
          >
            <span class="mdi mdi-plus text-white"></span>
          </a>
        </div>
        <p>
          T3:EP5 <text>"Meu Episódeo"</text>
        </p>
      </div>
    </li>
  );
};

export default FilmeSliderItem;
