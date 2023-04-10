(() => {
    // REFACTOR of B
    // Aplicando el Principio de Responsabilidad única
    // Priorizar la composición frente a la herencia, evitar usar EXTENDS

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {
        
        public email        : string;
        public lastAccess   : Date;
        public role         : string;

        constructor({
            email,
            role
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps ) {
            this.lastOpenFolder   = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    // Crear una nueva clase: UserSettings que tenga como objetivo ser una composición de las otras clases.

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        } : UserSettingsProps ) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
        }

    }


    // 
    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });

})()