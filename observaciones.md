Euge, Sofi, 

Felicitaciones! No solo por la entrega del TP, sino por haber concluido su camino en Ada como desarrolladoras front end. Que lindo recorrer su github y ver como fueron trabajando en equipo, construyendo sobre lo que hizo la otra. La experiencia que tuvieron juntas como devs, les aseguro, les servira muchisimo cuando comiencen sus carreras. 

Se nota que falto tiempo para este TP, pero me alegra ver que privilegiaron los trazos mas grandes, es decir, entregarme una app que funciona y se puede recorrer, frente a preocuparse por detalles como agregar la lista de generos en el detalle de las peliculas o algunas pequeñeces de estilado. A veces una se obsesiona mucho con cositas asi y pierde tiempo valioso. Privilegiar la funcionalidad fue la decision correcta en este caso. 

Me gusta el toque personal que le dieron al diseño, la pagina se siente de ustedes. Hay algunas cositas a retocar - creo que la imagen del carrousel seria el cambio mas impactante. Si ponemos a la imagen dentro de un div, y le decimos que se posicione centrada respecto a ese div, van a ver la diferencia:

```js
const myStyle = {
  width:'100%',
  height:'500px',
  objectFit: "cover",
  objectPosition: "center"
  };


const PelisCarousel = ({ src }) => {
    return (
      <div>
        <img
          className="object-cover w-full"
          style={myStyle}
          src={`https://image.tmdb.org/t/p/original/${src}`}
          alt="movie poster"
        />
      </div>
    );
  };

  export default PelisCarousel;
  ```

Otros detalles que podrian ir mejorando con el tiempo:
- Necesitan imagenes default para las ocasiones donde no hay imagen en la pelicula (en el buscador esto es mas evidente)
- Para las tabs, creo que la prioridad deberia ser implementar el paginado. 
- Atencion al footer, deberia estar en App asi no lo tienen que repetir en todos lados
- A nivel prolijidad del codigo, dejan muuuchos saltos de linea (enter) y se dificulta entender el codigo. 

Con respecto al codigo, tengo que mencionar lo bien que reutilizan logica y componentes, lo sencillo y eficiente del hook custom, la excelente manera en que manejan la arquitectura. 

El repo de github esta bien, y se nota el esfuerzo por trabajar en equipo, pero necesita urgentemente mejorar ese README asi todos pueden apreciar su trabajo! 

Nota final: 8

