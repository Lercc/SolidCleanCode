(() => {
    /**
     * FUNCIONES: 
     *  "Sabemos que estamos desarollando código limpo
     *   cuando cada función hace exactamente lo que su nombre indica"
     * 
     *  Simplicidad en fundamental
     *  Funciones de tamaño reducido
     *  Funciones de una sola línea sin causar complejidad (deseable)
     *  Evitar el uso del "ELSE"
     *  Prioriza el uso de la condicional ternaria
    */

    /********************************* EJEMPLOS ************************************** */

    // EJEMPLO 1
    // getPayAmount_A : es una función con if else anidados
    const getPayAmount_A = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result;
    }
    // getPayAmount_B: es una funcion refactorizada de la anterior función
    const getPayAmount_B = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }


    // EJEMPLO 2






    function sendEmail( toWhom: string ): boolean {
        // verificar correo
        if ( !toWhom.includes('@') ) return false

        // construir el cuerpo o mensaje

        // enviar correo

        // Si todo sale bien
        return true; 
    } 

    /********************************* PRACTICA ************************************** */
    // función para obtener información de una película por Id
    function getMovie( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActors( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast:           string[];
        description:    string;
        rating:         number;
        title:          string;
    }
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true; 
    }

})();
