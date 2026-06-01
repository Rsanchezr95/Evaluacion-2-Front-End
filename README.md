Proyecto evaluación 2 FrontEnd

Este proyecto consistió en una pagina web desarrollada con HTML, Bootstrap y JavaScript. Permite administrar los proyectos en una interfaz donde el usuario puede agregar, modificar, finalizar y eliminar proyectos.

Los proyectos activos, se muestran en la sección principal, y al marcar un proyecto como terminado, se mueve automáticamente a la sección de abajo, llamada: "Proyectos terminados".

Funcionalidad:

Agregar proyectos
-Modificar nombre de proyectos
-Modificar categoría de proyectos
-Eliminar proyectos
-Marcar proyectos como terminados
-Mostrar proyectos en la página
-Validar formulario
-Prevención básica de XSS
-Uso de arreglos y objetos para almacenar información.

Estructuras utilizadas

Objetos:

Cada proyecto se guarda como un objeto que se conforma por:
-Id, nombre, categoría e imagen

Arreglos:
-proyectos
-proyectosTerminados

Los métodos de arreglos que utilizamos fueron:
map()
filter()
find()


Uso de la IA
Utilizamos ChatGPT como apoyo para mejorar la organización del código, aplicar las validaciones, aplicar medidas básicas de seguridad (XSS) y seleccionar métodos buenos y eficientes para trabajar junto a arreglos y objetos

Prompts usados

"Como puedo prevenir un ataque XSS básico en JavaScript al mostrar los datos que ingresa el usuario"
"Como puedo utilizar los métodos de arreglos, cómo map(), find(), etc. En un proyecto web con JavaScript"
"Como organizo el código JavaScript para usar funciones reutilizables y cumplir"
"Como puedo validar el formulario en HTML utilizando JavaScript"

Conclusión
La ayuda de la IA permitió mejorar la calidad del código, ordenarlo y que sea fácil de mantener. Ademas, ayudo a implementar validaciones, medidas de seguridad y usar de manera correcta los métodos para arreglos, cumpliendo con la rubrica
