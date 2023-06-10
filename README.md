# Personal account for the payment system LETIpay

Letipay is a web application for students and staff of St. Petersburg Electrotechnical University "LETI" that allows to transfer money between students online and to pay tuition and dormitory fees. Students can track the history of transactions, and accounting staff can review all payments made by students. User-friendly and intuitive interface allows to easily navigate in the application, which combines all information about the student, related to his financial objectives, in one resource.

## Getting Started

1. Clone this repository:

```
git clone https://github.com/nedumayu/LETIpay.git
```

2. Build frontend:

```
cd frontend
npm install
npm start
```

3. Build backend:

Download PostgreSQL.

Create database "letipay" and change your settings in application.properties:
```
spring.datasource.url= jdbc:postgresql://localhost:5432/letipay
spring.datasource.username= your-username
spring.datasource.password= your-password
```
Index pom.xml and run the Application.java.

Open your web browser and go to http://localhost:3030.

## Technologies
The following technologies were used in this project:
* React
* Bootstrap + Axios
* Java Spring + Spring Security
* JSON Web Tokens
* PostgreSQL


## Our team

Full name            | Role
----------------     |----------------------
Сажина Алиса         | Project manager, Frontend, Backend
Баранова Анастасия   | Database
Семенова Эвелина     | Analyst
Кондратюк Ксения     | Tester, UI/UX

## License
This project is licensed under the MIT License.