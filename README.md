# PhotEye

#### Responsive photography website developed with html, css and javascript.

## Running PhotEye locally

### Prerequisites
The following items should be installed in your system:

* Python 3.10 or newer
* MariaDB
* HeidiSQL 

  * It must have a connection that has permission to perform all actions (EXECUTE, SELECT, ...), that has 'iissi_user' as user and 'iissi$user' as password, creating a database, got   the following query:
  ```
  CREATE DATABASE PhotEyeDB;
  ```
* Silence 1.2.4
  * To install it, once you have python, run the following command on the command line:
  ```
  pip install Silence==1.2.4
  ```
* git command line tool (https://help.github.com/articles/set-up-git)

### Steps:

On the command line:

```
git clone https://github.com/migromarj/PhotEye.git
cd PhotEye
silence createdb
silence run
```

Visit http://localhost:8080 in your browser.

## Web images

<div class="row" align="center">
  <img width="1000" alt="Website home page without being logged in" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/Home.PNG">
  <img width="1000" alt="Photo uploaded by a user" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/Photo.PNG">
  <img width="1000" alt="User profile" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/Profile.PNG">
  <img width="1000" alt="Website home page while logged in" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/HomeLoggedIn.PNG">
  <img width="1000" alt="Publish photo form" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/PublishPhoto.PNG">
  <img width="1000" alt="User account information" src="https://github.com/migromarj/Readme-Images/blob/master/PhotEye/Account.PNG">
  
</div>
