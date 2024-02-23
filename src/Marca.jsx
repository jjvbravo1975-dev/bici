import Dueno from './dueno';
import './style.css'
import Button from 'react-bootstrap/Button';
import image1 from './images/bici1.jpeg';
import image2 from './images/bici2.jpeg';

function Marca() {
  return (
    <>
    <h1> esto es un purueba de componentes</h1>
    <p>|Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ullam, sapiente atque odio quam id vero porro cum deserunt distinctio nesciunt quae et reprehenderit fuga vel maxime excepturi ipsa repellat.</p>
    <button>Primer boton
    <div><img src={image1} /></div>
    <div> <img src={image2}></img></div>
   

    </button>
    <button className="my-button">Haz clic aquí</button>
    <button className="my-button">otro boton</button>
    <Dueno></Dueno>
    <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      

    </>
  );
}

export default Marca;