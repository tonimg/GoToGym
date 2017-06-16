<center><a href="http://www.skylabcoders.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/skylab.png" width= "128px"></a></center>

<a href="https://mlab.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/mongolab.png" width= "128px"></a> <a href="https://www.mongodb.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/mongodb.png" width= "128px"></a>

<a href="https://www.javascript.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/javascript.png" width= "128px"></a>
<a href="https://www.w3.org/standards/webdesign/htmlcss"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/html5-css3.png" width= "128px"></a>
<a href="http://sass-lang.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Sass.png" width= "128px"></a>
<a href="http://getbootstrap.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Boostrap.png" width= "128px"></a>
<a href="http://jquery.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/jquery_logo.png" width= "128px"></a>
<a href="https://angularjs.org/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/AngularJS.png" width= "128px"></a>
<a href="https://bower.io/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/bower.png" width= "128px"></a>

<a href="https://nodemailer.com"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Nodemailer.png" width= "128px"></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Node.js.png" width= "128px"></a>
<a href="https://www.npmjs.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/npm.png" width= "128px"></a>


<a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" width= "128px"></a>


# GoToGym

This repo contains full-stack project GoToGym in which users can find and search for local gyms and different activities.

GoToGym is made with **NodeJS** and **ExpressJS** for the part of the server, and the client part is made with **AngularJS**.


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:
```
    PORT=3000
```

- Mongodb path and database to use:
```
    DB_URI=mongodb://localhost:27017/NAME_DB
```

- Secret word to encrypt users' passwords:
```
    SECRET=XXXXXXXXXXXXXXXXXXXXXX
```

- Email configuration:
```
    MAIL_ACCOUNT=XXXXX@XXXX.com
    MAIL_PASSWORD=XXXXXXXXX   
```


### To run the server:

```
    npm run dev
```
All dependencies will be installed automatically


## Built with:

* **SublimeText Editor**

* **Front-end**
    - AngularJS 1.6.2
    - Angular-route: 1.6.3
    - Angular-jwt: 0.1.9
    - Ng-table@: 4.0.0
    - Ng-map
    - jquery: 3.2.1
    - Bootstrap: 3.3.7
    - Font-awesome: 4.7.0
    - Smooth-scroll: 11.0.2
    - SweetAlert: 2
    - lightbox2: 2.51

* **Fonst**
    - Oleo+Scripts
    - Asap
    - IM Fell Great Primer SC

* **Back-end**
    - body-parser: 1.17.2
    - bower: 1.8.0
    - dotenv: 4.0.0
    - express: 4.15.3
    - express-jwt: 5.3.0
    - jsonwebtoken: 7.4.1
    - mongoose: 4.10.4
    - Nodemailer: 4.0.1
    - passport: 0.3.2
    - passport-jwt: 2.2.1
    - passport-local: 1.0.0
    - passport-local-mongoose: 4.0.0

## Author
[Toni Marchante](https://github.com/tonimg/)

## References
- [Nodemailer](https://nodemailer.com)
- [Ng-Table](https://unpkg.com/ng-table@3.0.1/bundles/)
- [Ng-Map](https://ngmap.github.io/)
- [SweetAlert2](https://pixelovers.com/sweetalert2-el-mejor-sustituto-de-los-alert/amp/#disqus_thread)
- [Smooth Scroll](https://cferdinandi.github.io/smooth-scroll/index.html)

