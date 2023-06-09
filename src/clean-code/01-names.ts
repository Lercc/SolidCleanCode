(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 

    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.filter( file => file.flagged );

    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const currentDay = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

    // CONTABLES - NUMÉRICOS
    /** BAD */
    const fruits = 3;
    const cars = 5;
    /** BETTER*/
    const maxFruits = 5;
    const minFruits = 1;
    const totalFruits = 3;
    const totalOfCars = 4;

    // FUNCIONES
    /** BAD */
    function createUserIfNotExists() {};
    function updateUserIfNotEmpty() {};
    function sendEmailIfFieldsValid() {};
    /** BETTER : verb + noun*/
    function createUser() {};
    function updateUser() {};
    function sendEmail() {};

    /**
     * CLASES : 
     *      formados por sustantivos o frases de sustantivo en UpperCamelCase
     * 
     *      ¿Qué exactamente hace la clase?
     *      ¿Cómo exactamente esta clase realiza cierta tarea?
     *      ¿Hay algo específico sobre su ubicación?
     */
    /** BAD */
    class Manger {};
    class Data {};
    class Info {};
    class Individual {};
    class Processor {};
    class SpecialMonsterView {};
    /** BETTER */
})();


