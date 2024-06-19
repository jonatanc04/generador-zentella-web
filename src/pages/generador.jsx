import '../styles/Generador.scss'
import lanzer from '../imgs/lanzer.png'
import samguk from '../imgs/samguk.png'
import GeneradorTool from '../comps/Generador';

export default function Generador() {
  return (
    <div className="generador-body container-fluid p-0">
      <div className='d-flex flex-row col-12'>
        <div className='image-container col-3 d-flex align-items-center justify-content-center'><img src={samguk} alt='error' /></div>
        <div className='generator-container col-6 d-flex'>
          <GeneradorTool />
        </div>
        <div className='image-container col-3 d-flex align-items-center justify-content-center'><img src={lanzer} alt='error' /></div>
      </div>
    </div>
  );
}