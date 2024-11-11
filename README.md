# React

recursos:

https://github.com/midudev/aprendiendo-react
https://devdocs.io/react/

IMPORTANTE: para el boton usar plugin ES7 de react

-Vamos a usar useState, nos permite cambiar los estados del componeentes

en useState inicializamos que todo tenga el valor de data, y el settask sirve para cambiar los valores

**Pasos a seguir para crear el front:**

-Vamos a crear un componente hijo llamado taskList

-a este le vamos a pasar el array de tasks o tareas

-esta funcion tasklist mapeara este array mandando a la funcion taskItem donde devolvera el assignment del item

-dentro de task item creamos una funcion que devolvera el style de cada item

-luego creamos el checkbox y decimos que esta completo dependiendo de si la tarea esta o no completada

-agregamos una funcion que escuche si cambia el checkbox y envie el task a la funcion onComplete

-en esta funcion se mapeara los tasks y si coincide con el id enviado se creara una copia y en la parte de completed se definira como lo opuesto al valor original

-luego creamos el boton para borrar las tareas

-creamos un evento que nos envie a la funcion deleteItem y le enviamos el id del task 

-en esta funcion iteramos la lista tasks y le decimos que si alguno de los tasks tiene el id distinto se queda afuera, hasta que encontrremos el que tiene el mismo id

 

---

Input

-primero creamos la funcion TaskFormn donde agregamos un input y un button task- y al input le damos el valor userInput

-luego creamos que cuando el evento on sbmit nos envie a la funcion handle subimt y que si la variable no esta vacia nos envie a la funcion addtaask y mande el input del usuario, y que 

-luego en la funcion addtask creamos el nuevo item, con su id y sus atributo

---

Contador

-en el contador primero creamos la variable pending task count, esta filtrara por todos los task que no estan completados y con length veremos la cantidad de tareas pendientes

-luego ceamos el h2 donde mostrara las tareas pendientes. este estara a la derecha de la pantalla
