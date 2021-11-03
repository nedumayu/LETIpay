LETI pay
=====================
Технологический стек
---------
Backend         | Frontend
----------------|----------------------
Java            | JavaScript
Spring MVC      | HTML + CSS
Spring Security | React
Spring Data JPA | Router Dom + Bootstrap
PostgreSQL      | Axios 



Установка
----
1. Скачать репозиторий:
   ```git clone https://github.com/nedumayu/LETIpay.git```
2. Открыть папки **frontend** и **backend** как отдельные проекты 
3. В postgreSQL создать базу данных letipay
4. Изменить `username` и `password` в application.properties
   ``` 
   spring.datasource.url= jdbc:postgresql://localhost:5432/letipay
   spring.datasource.username= your-username
   spring.datasource.password= your-password
   ```
5. Установить зависимости: 
* **Backend**: проиндексировать pom.xml 
* **Frontend**: в терминале запустить `npm install`
6. Запустить **backend** через Application.java
7. Запустить **frontend** через терминал: `npm start`
8. Открыть в браузере http://localhost:3030






