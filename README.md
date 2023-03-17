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