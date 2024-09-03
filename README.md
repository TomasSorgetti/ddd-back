# How to start

First check if you have installed node and npm, if dont, install first

```bash
node --version
npm --version
```

If you have allready install node and npm, go to your folder with the bash and clone the repository

```bash
cd your_folder
git clone project_github
```

Create a .env file in root folder with your credentials, check the .env.example file to copy the variables.
Enter mysql and create a database with the same name in your .env file

```bash
mysql -u root -p
CREATE DATABASE your_db_name;
```

Go to the project folder, install all dependences and start the server.

```bash
cd project_name
npm install
npm run start:dev
```

## Project architecture

Domain-Driven Design (DDD)
Why Domain-Driven Design?

- Enfoque en el negocio: DDD facilita que el código refleje el negocio real, haciendo que el software sea más intuitivo y adaptable a los cambios de negocio.
- Enfoque en el negocio: DDD facilita que el código refleje el negocio real, haciendo que el software sea más intuitivo y adaptable a los cambios de negocio.
- Mantenimiento: Facilita el mantenimiento a largo plazo, ya que cada capa tiene una responsabilidad clara y delimitada.

project/
│
├── src/
│ ├── config/ # Configuraciones de la aplicación (DB, variables de entorno, etc.)
│ │ └── config.js
│ ├── domain/ # Lógica del dominio y entidades
│ │ └── user/
│ │ ├── entities/ # Entidades del dominio (User, etc.)
│ │ ├── valueObjects/ # Objetos de valor (Email, Password, etc.)
│ │ ├── repositories/ # Interfaces de repositorios (UserRepository)
│ │ ├── services/ # Servicios del dominio (UserService)
│ │ └── factories/ # Fabricas para crear entidades/objetos de valor
│ ├── infrastructure/ # Implementaciones concretas de repositorios, proveedores de servicios, etc.
│ │ ├── database/
│ │ │ ├── models/ # Modelos de datos (Sequelize, Mongoose)
│ │ │ └── repositories/ # Implementaciones de repositorios
│ │ ├── http/
│ │ │ ├── controllers/ # Controladores que manejan las peticiones HTTP
│ │ │ ├── routes/ # Definición de rutas y asignación a controladores
│ │ │ └── middlewares/ # Middlewares
│ │ └── utils/ # Utilidades y helpers (loggers, etc.)
│ ├── application/ # Casos de uso y lógica de aplicación
│ │ ├── useCases/ # Casos de uso (CreateUser, UpdateUser, etc.)
│ │ ├── dtos/ # Data Transfer Objects (DTOs) para la comunicación entre capas
│ │ └── services/ # Servicios de aplicación que coordinan casos de uso
│ ├── app.js # Configuración principal de la aplicación
│
├── tests/ # Pruebas unitarias y de integración
│ └── user/
│ ├── userService.test.js
│ └── userController.test.js
│
├── server.js # Punto de entrada del servidor
├── .env # Variables de entorno
├── .gitignore # Archivos a ignorar por git
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto
