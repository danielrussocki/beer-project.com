## Librerías

- axios & vue-axios: Lo utilicé para la comunicación con la API
- vue-router: Para las rutas de la App
- eslint & eslint-plugins: Para arreglar problemas de código de acuerdo a mis necesidades
- sass & sass-loader: Para utilizar SCSS en la App y poder estilizar de forma más rápida
- lodash: Para utilizar la función debounce y hacer un watcher para los inputs de forma más inteligente y no estar activando los watchers cada que cambie el texto, en cambio lo hace después de un segundo del último caracter ingresado y hacer menos peticiones mejorando así el rendimiento

### Preguntas técnicas

- ¿Has aplicado los principios SOLID?

```
Sí, lo más que pude
```

- ¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?

```
Para los tests no ocupé tanto tiempo, lo hice lo más sencillo posible para evitarme errores que me quitaran mucho tiempo, en otras situaciones podría haber trabajado con algún framework para testing (no soy muy conocedor de estar herramientas, suelo hacer debug a la antigua)
```

¿Cómo mejorarías la API que has usado?

```
Agregaría mejores imágenes porque por las imágenes me costó elaborar un diseño que combinara con el estilo de las imágenes :[

También agregaría la manera de obtener datos de la cerveza con más parámetros, como el del ph que vi que no se podía filtrar con ese parámetro y con otros más
```

¿Crees que esta API soporta peticiones CORS?

```
Por lo que vi no había problema con las cors, pero se podría implementar
```

¿Cómo has llegado a esa conclusión?

```
Porque no tuve que configurar las cors para usar la API
```

¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna vez has tenido que hacerlo?

```
Las herramientas de SpeedTest como woorank, google speed test o speed insight (creo que así se llamaba xd no recuerdo bien del todo)
```

Descríbete a ti mismo en formato JSON.

```
{
  "id": "1",
  "name": "Daniel Rojas",
  "nickname": "Dan",
  "general_data": {
    "age": "22",
    "birth_date": "07/09/1999",
    "height": {
      "unit": "meters",
      "value":"1.75"
    }
  },
  "location_data": {
    "city": "Guadalajara",
    "state": "Jalisco"
  },
  "hobbies": [
    "Comer",
    "Viajar",
    "Ver series",
    "Salir a pasear",
    "Salir de fiesta",
    "Escuchar música",
    "Jugar videojuegos,
  ],
  "qualities": [
    "Inteligente",
    "Carismático",
    "Social",
    "Agradable",
    "Tapatío",
    "Ambicioso",
    "Creativo",
    "Talentoso",
    "Innovador"
  ],
  "bad-qualities": [
    "olvidadizo :["
  ]
}
```
