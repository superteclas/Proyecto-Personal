Proyecto-Personal

![alvaroponce_logo-fire-(con-fondo)](https://github.com/superteclas/Proyecto-Personal/assets/147168257/794a1b3a-ca8e-4332-899c-5debac7f3c09)


Descripción

Este proyecto es una página web para el músico Álvaro Ponce, creada usando React.js para el frontend y Flask para el backend. Está en construccion.
Características

    Frontend: React.js
    Backend: Flask (Python)
    Base de datos: SQLAlchemy (compatible con SQLite, MySQL, PostgreSQL)
    Manejo de dependencias: Pipenv para Python, npm para Node.js
    Despliegue rápido: Compatible con Heroku y Render.com

Instalación
Backend

    Instalar paquetes: pipenv install
    Crear archivo .env: cp .env.example .env
    Configurar base de datos en .env
    Migrar base de datos: pipenv run migrate y pipenv run upgrade
    Ejecutar la aplicación: pipenv run start

    Backend Populate Table Users
To insert test users in the database execute the following command:

$ flask insert-test-users 5

Frontend

    Instalar paquetes: npm install
    Iniciar servidor de desarrollo: npm run start

Despliegue

Sigue la documentación oficial para desplegar en Heroku o Render.com.
Contribuciones

Este proyecto fue desarrollado como parte del Bootcamp de 4Geeks Academy.
Autor

Álvaro Ponce Keys, músico
Recursos adicionales

    Documentación de 4Geeks Academy
    Curso de Desarrollador Full Stack

Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
