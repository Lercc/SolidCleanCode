# CLEAN CODE

## ÍNDICE
1. [DEUDA TÉCNICA](#deuda-técnica)
2. [Polimorfismo](#polimorfismo)
2. [Herencia](#herencia)
3. [Composición](#composición)
3. [STUPID](#stupid)
    - [Singleton](#singleton)
    - [Tight coupling (alto acoplamiento)](#tight-coupling)
        - [Cohesión](#cohesión)
        - [Acoplamiento](#acoplamiento)


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

# Estructura recomendada de una clase
![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/clase-estructura.png)
# STUPID
![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/stupid.png)

### Singleton
- Pros: Garatiza una única instancia de la clase a lo largo de toda la aplicación.
- Contra:
    - Vive en el contexto global.
    - Puede ser modificado por cualquiera y en cualquier momento.
    - No es rastreable.
    - Díficil de testear debido a su ubicación.

### Tight coupling
Lo ideal es tener bajo acoplamiento y buena cohesión.

![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/acoplamiento.png)

Alto acoplamiento:
- Contras:
    - Un cambio en un módulo  por lo general provoca un efecto dominó de los cambios en otros módulos.
    - El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
    - Un módulo en particular puede ser más dificil de reutilizar y/o probar porque se deben incluir módulos dependientes.

Ejemplo:
- ```A``` tiene un atributo que se refiere a ```B```.
- ```A``` llama a los servicios de un objeto ```B```.
- ```A``` tiene un método que hace referencia a ```B```(a través del tipo de retorno o parámetro).
- ```A``` es una subclase de/o implementa la clase ```B```.

#### Cohesión
La cohesión se refiere a lo que la clase o módulo puede hacer.
- La baja cohesión significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debería hacer.
- Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

#### Acoplamiento
Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí.
- En `bajo acoplamiento`, cambiar algo importante en una clase no debería afectar a la otra.
- En `alto acoplamiento`, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

##### Evitar
Evitar alto acoplamiento y baja cohesión
![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/alto-acoplamiento.png)
##### Buscar
Buscar bajo acoplamiento y alta cohesión
![](https://raw.githubusercontent.com/Lercc/SolidCleanCode/main/img/cohesion.png)







