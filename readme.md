# SMS-MANAGER

The SMS Management system helps to manage the sending of sms which consists of the sender and receiver

## Technologies Used

* NodeJS
* Express
* PostgreSQL
* Sequelize
* Babel
* Eslint

## Installation

```bash

1. Git clone this repository `https://github.com/clintfidel/SMS-MANAGER.git`
2. Change your directory `cd Sms-Manager`
3. Install all dependencies using `npm install`
4. Create .env file which will be used to load environment variables see sample in `.env.example` file in the project root directory
6. Migrate `sequelize db:migrate`
7. Start the app `npm start-server` for development 
8. Navigate to `localhost:3800` in your browser

```

## Endpoints
* [POST] /api/v1/contact/create - To create location
* [GET] /api/v1/contact/allContacts - Get all contacts
* [GET] /api/v1/contact/oneContact/:contactId - Get one one contact
* [PUT] /api/v1/contact/update/:contactId- To update contact data
* [DELETE] /api/v1/contact/delete/:contactId- To delete contact data
* [POST] /api/v1/sms/send/:senderId - To send sms to a contact
* [GET] /api/v1/sms/all - To get all sms sent
* [DELETE] /api/v1/sms/delete - To delete sms sent



## Coding Style

- Airbnb: Airbnb is a coding style guide that guides developers to write clean codes


## How to Contribute

```bash

- Fork this repository.
- Clone it.
- Create your feature branch on your local machine with ```git checkout -b your-feature-branch```
- Push your changes to your remote branch with ```git push origin your-feature-branch```
- Open a pull request to the master branch, and describe how your feature works

Ensure your codes follow <a href="https://github.com/airbnb/javascript">AirBnB Javascript Styles Guide</a>

```

## Author

-  Fidelis Clinton

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details
