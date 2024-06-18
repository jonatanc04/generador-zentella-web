import '../styles/Generador.scss'
import lanzer from '../imgs/lanzer.png'
import samguk from '../imgs/samguk.png'

export default function Generador() {
  return (
    <div className="generador-body container-fluid m-0 p-0">
      <div className='d-flex flex-row col-12'>
        <div className='image-container col-3 d-flex align-items-center justify-content-center'><img src={samguk} alt='error' /></div>
        <div className='generator-container col-6 d-flex align-items-center justify-content-center'>
          <h3>Generador Zentella 6.0</h3>
        </div>
        <div className='image-container col-3 d-flex align-items-center justify-content-center'><img src={lanzer} alt='error' /></div>
      </div>
    </div>
  );
}