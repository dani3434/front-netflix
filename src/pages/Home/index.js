import React from 'react';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Modal from '../../Components/Modal';
import SliderFilmes from '../../Components/SliderFilmes';
import api from '../../services/api';

const Index = () => {
  const [principal, setPrincipal] = React.useState({});
  const [sliders, setSliders] = React.useState([]);

  const getHome = async () => {
    try {
      const response = await api.get('/home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return null;
      }

      setPrincipal(res.principal);
      setSliders(res.secoes);
    } catch (err) {
      alert(err.message);
    }
  };

  React.useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <Modal />
      <Header />
      <Hero principal={principal} />
      <div id="main-content">
        {sliders.map((slider) => (
          <SliderFilmes key={slider._id} secoes={slider} />
        ))}
      </div>
    </>
  );
};

export default Index;
