# Authentication and Security 

This repository inform you how to secure user information for your project at various levels and about authentication.

---
<p align="center">
    <sup><em>For anyone who are interested in trying this project</em></sup>
</p>

## Install

```sh
$ npm install 
```
<sup> This will install all the necessary packages and libs </sup>

---

## Levels 
| Level  | Name                    | Description                                                                                                                                                                                                                                                                                                                                                    | Packages                                                                          |
|------- |------------------------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |---------------------------------------------------------------------------------- |
| I      | `Security`              | Basic Email and Password storing inside the database.<br>This project is using `MongoDB` using `mongoose ODM`                                                                                                                                                                                                                                                  | ``` npm i mongoose ```                                                            |
| II     | `Encryption`            | The password can be easily viewed in DB, so adding <br>encryption using a key. This project makes use of `mongoose-encryption` <br>and storing the key inside the `.env` file using package `dotenv`.                                                                                                                                                          | ``` npm i mongoose-encryption dotenv ```                                          |
| III    | `Hashing`               | The above encryption can easily be decrypted by a hacker,<br>so a more secure way is using `Hashing`. A hash function converts<br> your user password using some mathematical equations,<br>which takes a substantial amount of time reverts it.<br>                                                                                                           | ``` npm i md5 ```                                                                 |
| IV     | `Salting and Hashing`   | A long String is added (appended) to your data known as `Salt`,<br>then the Hash function is applied. Then this generated hash is appended<br>with Salt passed through the hash function, this process is known as <br>`Salt Round`. There can be n number of salt rounds. This project is <br>using `bcrypt` for salting and hashing.                         | ``` npm i bcrypt ```                                                              |
| V      | `Cookies and Sessions`  | Using Cookies and Sessions we can add a basic level of authentication.<br>As this project is built using `node.js` and `express` hence we are using <br>[passportjs](https://www.passportjs.org/concepts/authentication/downloads/html/)                                                                                                                       |  ```npm i passport passport-local passport-local-mongoose express-session```  |
| VI     | `OAuth`                 | OAuth stands for `Open Authorisation`, provided by third parties like `google, Facebook, LinkedIn, GitHub`, etc. This project Implements the<br> [google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2/) .<br>Create your account on [Google Console](https://console.cloud.google.com/) to build your project using Google OAuth....      |   ``` npm i mongoose-findorcreate```                                               

## Personal Suggestion 

Utilize OAuth more often as big-tech businesses have a large team of engineers working to safeguard your data. And it increases the security of the project and protects user passwords.
