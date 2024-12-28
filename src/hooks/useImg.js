// hooks/useImg.js
import { useMemo } from 'react';
import img1 from '../img/img1.PNG';  // Importa la imagen
import img2 from '../img/img2.PNG';  
import img3 from '../img/img3.PNG';  
import img4 from '../img/img4.PNG';  
import img5 from '../img/img5.PNG';  
import img6 from '../img/img6.PNG';  
import img7 from '../img/img7.PNG';  
import img8 from '../img/img8.PNG';  
import img9 from '../img/img9.PNG';  
import img10 from '../img/img10.PNG';  

const useImg = (id) => {
  return useMemo(() => {
    // Retorna la imagen correspondiente según el id
    if (!id) return null;
    switch(id) {
      case '1':
        return img1;
      case '2':
        return img2;
      case '3':
        return img3;
      case '4':
        return img4;
      case '5':
        return img5;
      case '6':
        return img6;
      case '7':
        return img7;
      case '8':
        return img8;
      case '9':
        return img9;
      case '10':
        return img10;
      default:
        return null;
    }
  }, [id]);
};

export default useImg;
