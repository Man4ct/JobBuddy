# Job Tracker Web App

## Try it Now!

Experience the Job Tracker web app by trying it on Render. Click [here](https://dashboard.render.com/web/srv-cmj97t7qd2ns73888on0) to access the live demo.

## Overview

Welcome to the Job Tracker web app! This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application designed to help you keep track of job applications. The app provides a user-friendly interface to save details about jobs you have applied for, complete with authentication, filtering options, and a sleek night mode.

## Features

- **User Authentication**: Securely register an account or log in to an existing one to access your personalized job tracking dashboard.

- **Job Entry**: Easily add new job applications with key details such as job title, company name, application status, and more.

- **Filter and Aggregation**: Effortlessly organize your job applications with powerful filtering and aggregation options. Group jobs by status, company, or any other relevant criteria.

- **Night Mode and Light Mode**: Customize your experience with the option to switch between night mode and light mode, ensuring a comfortable browsing experience at any time.

## Getting Started

Follow these steps to get the Job Tracker web app up and running on your local machine:

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/your-username/job-tracker.git
    cd job-tracker
    ```

2. **Install Dependencies**:
    ```bash
    cd client
    npm install
    cd ../
    npm install
    ```

3. **Set Up MongoDB**:
    - Ensure you have MongoDB installed and running.
    - Create a `.env` file in the `server` directory with the following content:
        ```
        MONGODB_URI=your-mongodb-uri
        SECRET_KEY=your-secret-key
        ```

4. **Run the App**:
    ```bash
    npm start
    cd client
    npm start
    ```

5. Visit `http://localhost:5173` in your browser to access the Job Tracker web app.

## Technologies Used

- **Frontend**:
    - React.js
    - Styled Components 

- **Backend**:
    - Node.js
    - Express.js
    - MongoDB 

- **Authentication**:
    - JSON Web Tokens (JWT)

- **Other Tools**:
    - Axios 
    - React Router 


## License

This project is licensed under the [MIT License](LICENSE.md).


Happy job tracking! 🚀
