<br />
<p align="center">
  <a href="https://github.com/LifeJunkieRaj/FullstackSoloProjectGuruud">
    <img src="react-app/src/site-images/Logo_-_revision_01-removebg-preview.png" alt="Logo" width="80" height="80" style="">
  </a>

  <h3 align="center">It's Time to get GURUUD!!!</h3>

  <p align="center">
 Guruud allows aspiring entrepreneurs to sign up as a basic user to ask questions in a number of entrepreneurial categories and then receive responses from site users who have a certification badge in that category of entrepreneurship. Regular users can also leave comments, but those comments are subject to upvotes and downvotes from all users in order to screen the validity of their comments.
    <br />
    <a href="https://github.com/LifeJunkieRaj/FullstackSoloProjectGuruud/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://guruud.herokuapp.com/login">View Site</a>
    ·
    <a href="https://github.com/LifeJunkieRaj/FullstackSoloProjectGuruud/issues/6">Report Bug</a>
    ·
    <a href="https://github.com/LifeJunkieRaj/FullstackSoloProjectGuruud/issues/6">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
[Click here to view Guruud live on the web!](https://guruud.herokuapp.com/)
<br>
   <img src="react-app/src/site-images/LandingPage.jpg"/>
   <img src="react-app/src/site-images/LoginPage.jpg"/>
   <img src="react-app/src/site-images/SignUp Form.jpg"/>
   <img src="react-app/src/site-images/HomePage.jpg"/>
</br>


### Built With

* [JavaScript]()
* [Python]()
* [React]()
* [Redux]()
* [Flask]()
* [SQLAlchemy]()
* [Docker]()
* [CSS]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Brewd.

  * npm
  ```sh
  npm install npm@latest -g
  ```
  * pipenv
  ```
  pipenv install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tedjanton/Brewd
   ```
2. Install NPM packages in the React App
   ```sh
   npm install
   ```
3. Install Dependencies
   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

4. Add a '.env' with your environment variables to the root of your local directory

5. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB
    ```
6. Create your database
    ```sh
   CREATE DATABASE <<database name>> WITH OWNER <<your username>>
    ```
7. Start a pipenv virtual environment
   ```bash
   pipenv shell
   ```
8. Migrate and seed your database
    ```sh
    flask db migrate
    ```
    ```bash
   flask db upgrade
   ```
   ```bash
   flask seed all
   ```
   ```bash
   flask run
   ```
9. Start your local development server in the React App
   ```bash
   npm start
   ```
## Obstacles

### SQLAlchemy Querying

Because of how we built our lean database, we needed to create unique ways to query data due to interdependent relationships. We defined the necessary relationships between tables and created new methods that allowed us to return information pertaining to multiple tables without running into major conflicts.


### Likes

We had issues with React updating and rendering the state of a like without refreshing our entire page. Through hours of debugging and collaboration, we realized we overcomplicated the issue from the start.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/LifeJunkieRaj/FullstackSoloProjectGuruud/issues/6) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact & Acknowledgements

* Rajiv Hudek - [LinkedIn](https://www.linkedin.com/in/raj-hudek-026b051b1/) - [Github](https://github.com/LifeJunkieRaj)

Project Link: [https://github.com/tedjanton/Brewd](https://github.com/tedjanton/Brewd)


<!-- ACKNOWLEDGEMENTS -->
