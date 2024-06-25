import React, { useState } from 'react';
import './pagecookie.css';
import './pagecookiemobile.css';

function PageCookie() {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    // Aqui você pode definir a lógica para aceitar cookies, como armazenar uma flag no localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };
  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setVisible(false);
    // Aqui você pode implementar a lógica adicional para desabilitar funcionalidades baseadas em cookies
  };

  if (!visible || localStorage.getItem('cookiesAccepted') === 'true') {
    return null;
  }

  return (
    <div className='container__cookie' >
      Este site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você aceita o uso de cookies.
      <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target="_blank" rel="noopener noreferrer" style={{color:'#640f04'}}> Política de Privacidade</a>.
      <br/>
      <button className='btn_cookie' onClick={handleAccept}>Aceitar</button>
      <button className='btn_cookie' onClick={handleDecline}>Recusar</button>
    </div>
  );
}

export default PageCookie;