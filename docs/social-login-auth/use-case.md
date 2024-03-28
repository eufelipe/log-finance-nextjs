# Use Case: Social Login with Google

## Overview

This document describes the process of social login using Google authentication, including automatic registration of new users and the logout process. The aim is to provide a quick and secure login experience for users by leveraging their existing Google accounts.

## Success Flow

### Existing User Login

- [x] Start: The user selects the "Login with Google" option on the login screen.
- [x] Authentication: The user is redirected to the Google login page to authorize the application to access their basic profile information.
- [ ] Database Verification: The application checks if the user already exists in the database using the unique identifier provided by Google.
- [x] Successful Login: The user is authenticated and redirected to the homepage.

### New User Registration and Login

- [x] Start: The user selects the "Login with Google" option on the login screen.
- [x] Authentication: The user is redirected to the Google login page to authorize the application.
- [ ] Database Verification: The application checks if the user exists in the database.
- [ ] Automatic Registration: Since the user does not exist, the application automatically
- [ ] creates a new record in the database using the information provided by Google.
- [ ] Successful Login: The new user is authenticated and redirected to the homepage.

### Logout

- [x] Logout Initiation: The user selects the "Sign Out" option in the application.
- [x] Session Termination: The user's session is ended, and they are redirected to the login screen.

### Exceptions

- [ ] Google Authentication Failure: If there is a failure in authentication with Google (for example, the user does not grant permission or there is a technical error on Google's side), the application should inform the user about the problem and suggest trying again later.
- [ ] User Creation Failure: If there is a problem creating a new user record in the database (for example, database connection failure or constraint violations), the application should log the error and possibly notify the technical team, while informing the user to try again later.

### Security

- The application must ensure the security of user information, using best practices for authentication and authorization.
- The application should not store sensitive user information that is not necessary for profile creation or authentication.
