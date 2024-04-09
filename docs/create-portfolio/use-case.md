# Use Case: Create Portfolio

## Overview

This document outlines the process of creating a portfolio through the application, encompassing user input validation and automatic association of the portfolio with the user's account. The goal is to offer a seamless and secure way for users to manage their portfolios by leveraging their existing account information.

## Success Flow

### User Initiates Portfolio Creation

- [ ] **Start:** The user selects the "Create Portfolio" option within the application.
- [ ] **Input Submission:** The user fills in the portfolio creation form, providing the necessary information (e.g., portfolio name, description).
- [ ] **Validation:** The application validates the provided input against predefined criteria (e.g., the name is not empty).

### Portfolio Creation in the Database

- [ ] **Database Check:** The application checks the user's account validity and permissions for creating a new portfolio.
- [ ] **Portfolio Record Creation:** Assuming validation success and the user has the necessary permissions, the application creates a new portfolio record associated with the user's account in the database.
- [ ] **Successful Creation:** The user receives confirmation of the portfolio creation and is redirected to the portfolio management page.



## Exceptions

- [ ] **Input Validation Failure:** If user input fails validation (e.g., empty portfolio name), the application notifies the user to correct the information.
- [ ] **Unauthorized Creation Attempt:** If the user attempts to create a portfolio without proper permissions or when not logged in, the application prevents the creation and may log the attempt.
- [ ] **Database Creation Failure:** If there's an issue during the portfolio record creation in the database (e.g., connection issues, constraints violation), the application logs the error and informs the user to try again later.

## Security

- The application ensures the security of the portfolio creation process, employing best practices for user authentication and authorization.
- Sensitive user information is protected, and the application only requests the minimum necessary data for portfolio creation.
