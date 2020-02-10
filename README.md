# TopicosTelematica
¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?

Para este proyecto se desarrolló una aplicación IoT web que permite el registro de medidas de sensores de temperatura y humedad, 
la problemática que se intenta resolver es la dificultad y consumo de tiempo que presenta el registro manual de los datos.

¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
Requisitos Funcionales del Sistema
El sistema debe permitir registrar los datos proporcionados por sensores de temperatura y humedad desde un dispositivo arduino.
El sistema debe permitir a los usuarios visualizar los datos proporcionados por los sensores de temperatura y humedad desde un dispositivo arduino.
El sistema debe permitir a los usuarios realizar un registro manual de los datos proporcionados por los sensores de temperatura y humedad desde un dispositivo arduino.
El sistema debe permitir a los usuarios editar y eliminar los datos que considere pertinentes.
El sistema debe permitir usuarios ingresar al sistema a través de un login.

¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?

El sistema debe registrar menos de 2 fallas/hora, con un entrenamiento base de 2 horas(Eficiencia)
Métrica: Fallas/hora.
El sistema debe ajustarse a las relaciones de aspecto(16:9, 17:9, 18:9) y resoluciones(480p-4K)(Portabilidad)
Métrica: Relación y resolución.
El sistema debe ser compatible con la última versión de Google Chrome, Mozilla Firefox, Opera. Debido a que estos son los navegadores web más comunes.(Portabilidad)
El sistema debe estar disponible el 99% (712.8 horas) del tiempo mensual, el 1% restante se empleará para mantenimiento.(Disponibilidad) Métrica:Horas


¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?

Full stack MEAN Mongodb, Express js, Angular js y Node js.

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?

Para las rutas del sensor creamos 4 rutas, todas se acceden mediante la direccion raiz por los métodos: get, post, put y delete.

La ruta con el método get ejecuta una función getMedidas. La cual obtiene todas las medidas de los sensores alojadas en la base de datos
y las envia al frontend para su visualización.

La ruta con el método post ejecuta una función createMedida. Esta ruta recibe parámetros con los cuales crea y guarda en la base de 
datos una nueva medida.

La ruta con el método put ejecuta una función editMedida. Esta ruta recibe un parámetro id el cuál le indica que medida se actualizará.

La ruta con el método delete ejecuta una función deleteMedida. Esta ruta recibe un parámetro id el cual le indica que medida eliminar.

Para las rutas de los usuarios creamos 2 rutas, ambas con el método post.

Una ruta sigup la cual recibe parámetros de un nuevo usuario para agregarlo a la base de datos. Y una ruta sigin la cual
recibe parámetros para darle acceso a un usuario que intenta loguearse.

¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?

Realicé una autenticación mediante token usando jwt. La cual genera un token para cada usuario el cual cambia cada 7 dias.

¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?

La realización del frontend en el framework Angualar JS ya que la curva de aprendizaje de este framework es bastante compleja, 
los conceptos desconocidos más relevantes durante la realización del proyecto fue el manejo de los tokens y el framework angular.
Hay una falencia en cuanto al manejo de tokens en el frontend y su almacenamiento en la memoria local.

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?

Considero que una de las principales habilidades que obtuve fue acerca de node Js, JavaScript y Mongoose. Por otro lado logré identificar
cada una de las capas del patrón MVC en el framework tanto del backend como del frontend; lo cual me dió un mayor entendimiento acerca de
la escalabilidad, extensibilidad y mantenibilidad del software gracias al uso de este patrón de diseño.

