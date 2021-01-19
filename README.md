# aaoiaf

**An Aplication Of Ice And Fire by Alejandro Quintana**

# Teconolgías ocupadas.
* Windows 10
* React.js
* Node.js
* Aws cloud9
* Visual Studio Code
* Github
* Extensión de navegador: React Developer Tools

## Propuesta de Solución.
Mi idea luego de leer el documento proporcionado con los requerimientos y la documentación de la API era crear una aplicación que mostrara las primeras 25-30 "Casas", donde al final de la página habrian botones para avanzar a una página siguiente o previa, o a la primera o ultima, con la información pedida para cada una de estas "Casas" y si es que en el atributo "Current Lord" no estaba vacío entonces al hacer click sobre este se abriría una ventana emergente del tipo "Sweet Alert" mostrando la información asociada a este tipo de entidad, y si en la información de esta entidad contenia "Casas" o "Pesonajes" estos tambien podrian ser Clickeables abriendo otra ventana emergente en caso de ser clickeadas y asi sucesivamente.

## Problemas en el desarrollo/ejecución del software
* Al hacer el fetch() de los personajes entraba en un loop infinito, supongo falta uso adecuado de useEffect
* Ahora, pensandolo mejor, debí haber probado el código haciendo fetch de una sola "Casa" y no de a 20-25, de esta forma habria sido más fácil debugear
* Hasta el momento solo funciona la carga inicial de las "Casas" con su información y en el background se realizan constantes peticones de la API.
* El programa compila sin errores, solo unos warnings sobre variables no utilizadas
* En la ejecución del programa aparecen varios warnings, y eventualmente errores.
* Si se deja corriendo el programa luego al intantar ejecutarlo nuevamente es probable que falle ya que se realizaron demasiadas peticiones a la API.


## Pruebas Unitarias (según criterio).
* El método usado fue a prueba y error, ocupando la consola del Sistema Operativo y la "herramienta para desarrolladores" del navegador. Esto se debe principalmente a que no tengo mucha experiencia realizando pruebas unitarias, y como el usuario tiene una interacción "limitada" con la aplicación no hay demasiados casos limites que tener en cuenta, aunque si se me ocurren pruebas que tomen en cuenta caminos críticos del código o bien revisando que las expresiones condicionales sean accedidas cuando corresponda y que no queden casos que no estén consideraras dentro de ninguna de estas expresiones.
* Habia tomando un electivo sobre pruebas de software este semestre pero tuve que botarlo ya que habia tomado demasiados ramos este semestre, pero alcance a ver distintas estrategias para realizar pruebas, y comprendiendo la importancia de integrarlas en el desarrollo del software.


## Mejoras (Qué faltó) 
* Manejo de excepciones (try - catch).
* Manjeo de sesiones: Cookies que permitan volver a donde una estaba buscando antes.
* Manejo de estilos: Página (más) responsiva y más "bonita".
* Dejar una IP pública accesible desde cualquier lugar hacia la aplicación web.
* Guardar en el Caché info pedida recientemente.
* Implentantar todas las funcionalidades mencionadas en la propuesta de solución.
