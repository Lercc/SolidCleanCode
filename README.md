## DEUDA TÉCNICA
Falta de calidad en el código, falta de documentación, falta de pruebas y deudas de refactorización.

- ¿Qué es la deuda técnica? : La deficiente calidad del código resulta en una deuda técnica que tendrá implicaciones económicas a futuro, por ejemplo gastos económicos de:
    - Tiempo en realizar mantenimientos.
    - Tiempo en refactorizar código.
    - Tiempo en comprender el código.

    ![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/esquema-deuda-tecnica.png)
    > Esquema de deuda técnica de Martin  Fowler

- ¿Cómo se paga la deuda técnica? : Realizando refactorización del código.

- Refactorización : Proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios. 

- Variables : Nombres pronunciables y expresivos

- Funciones :
    - Simplicidad en fundamental
    - Funciones de tamaño reducido
    - Funciones de una sola línea sin causar complejidad (deseable)
    - Evitar el uso del "ELSE"
    - Prioriza el uso de la condicional ternaria

- Ejercicios de refactorizacion

- Principio DRY: Don't Repeat Yourself
    - Evitar duplicidad de código
    - Simplifica pruebas
    - Ayuda a centralizar procesos

- Herencia problemática
    - Aplicar el principio de responsabilidad única en la herencia es casi imposible de hacer porque cada una de las clases debería realizar una tarea de manera independiente es decir una única responsabilidad, pero al heredar extendiendo de otra clase, se rompe con ello.

# Polimorfismo
Es la ```relajación del sistema de tipos```, de tal manera que una referencia a una clase (como  atributo, declaración de variable o parámetro) acepte tambien instancias de sus clases derivadas además de instancias de la misma clase.
```
class Vehiculo {}

class Moto extends Vehiculo {}
class Bus extends Vehiculo {}
class Auto extends Vehiculo {}

Moto miMoto = new Moto()
Auto miAuto = new Auto()
Bus miBus = new Bus()

class cochera {
    function  estacionar(Vehiculo miVehiculo) {...}
}

cochera.estacionar(miMoto)
cochera.estacionar(miBus)
cochera.estacionar(miAuto)
```


# Herencia
 ```Una de las características de las herencias es que son unidireccionales y solo los subtipos de las superclases pueden comportarse igual que los tipos de quienes están heredando.``` Si bien muchas veces esto nos permite ampliar fácilmente el código y obtener extensiones independientes, otras veces genera complejidad en la elaboración del mismo.
    
- La herencia es atractiva porque permite reutilizar código de una manera rápida y sencilla.
- La herencia es poderosa porque permite jugar con el polimorfismo con facilidad.
- La herencia me permite sobrescribir métodos.

# Composición
```La composición es un tipo de relación donde un objeto más complejo está compuesto por otros objetos, es decir una clase que contiene instacias de otras clases.``` Con lo cual, nos permite delegar responsabilidades a otros objetos y así poder estar más alineado al SRP de SOLID.

- La principal ventaja que tiene trabajar con la composición es la practicidad y facilidad con la cual podemos reutilizar nuestro código siempre y cuando se encapcule adecuadamente.
- Además, al trabajar aplicando la letra D (inversión de dependecias) de los principios SOLID contaremos con un bajo acoplamiento en el código fuente, lo que nos permitirá disminuir el número de refactorizaciones y obtener una mayor facilidad de mantenimiento, expansión, cambiabilidad e incluso implementar la ejecución de pruebas menos complicadas

![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/herencia-composicion.png)
> Herencia vs composición