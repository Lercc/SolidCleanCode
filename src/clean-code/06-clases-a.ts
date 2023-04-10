(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F'

    class Person {
        constructor(
            public name:        string,
            public gender:      Gender,
            public birthdate:   Date,
        ){}
    }

    // const personaUno = new Person('Luis', 'M', new Date('1999-01-18'))
    // console.log({ personaUno });
0

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email:           string,
            public role:            string,
            // 
            name:                   string,
            gender:                 Gender,
            birthdate:              Date,
        ){
            // Se tiene que mandar a llamar al constructor del padre.
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true
        }
    }

    // const asd = new User()

    class UserSettings extends User {
        constructor(
            public workingDirectory:    string,
            public lastOpenFolder:      string,
            //
            email:                      string,
            role:                       string,
            // 
            name:                       string,
            gender:                     Gender,
            birthdate:                  Date,
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSett = new UserSettings(
        '/sss/asd',
        'asd',
        'sdsa@dasd.com',
        'admin',
        'luis',
        'M',
        new Date("1999-01-18")
    )

    console.log({ userSett });

    // Esta clase UserSettings no está cumpliendo con el principio de responsabilidad única,
    // porque hace muchas cosas, maneja sus propios atributos y además maneja los atributos
    // de la lase User y la clase Person

    // Aplicar el principio de responsabilidad única en la herencia es casi imposible de hacer
    // porque cada una de las clases debería realizar una tarea de manera independiente
    // es decir una única responsabilidad, pero al heredar extendiendo de otra clase, se rompe con ello.
})()