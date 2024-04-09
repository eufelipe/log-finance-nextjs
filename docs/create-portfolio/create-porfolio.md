# Create Portfolio Feature Documentation

## Overview

The Create Portfolio feature allows users to add new portfolios to their accounts. This document outlines the implementation details, usage, and testing strategies for this feature.

## Implementation

- **Domain Models**: Includes `Portfolio` and `PortfolioDTO` types.
- **Repository Interface**: `AddPortfolioRepository` abstracts the addition of portfolios.
- **Use Case**: `CreatePortfolioUseCase` encapsulates the business logic.
- **Infrastructure**: `PortfolioPostgreSqlRepository` implements the repository interface using PrismaClient.

## API Endpoint

`POST /portfolios`

### Request Body

```json
{
  "name": "My Portfolio",
  "description": "A brief description of my portfolio.",
  "accountId": "account_id_here"
}
``` 

### Response

Success (200 OK):

```json
{
  "id": "portfolio_id",
  "name": "My Portfolio",
  "description": "A brief description of my portfolio."
}
``` 


### Error (4XX):
```json
{
   "error": "Error message"
}
``` 


## Testing
Unit tests have been added for `PortfolioPostgreSqlRepository`` to ensure functionality. Use `vitest` to run the tests.

## Manual Testing
- 1 - Ensure the database and application are correctly configured.
- 2 - Use the provided endpoint to create a portfolio, supplying the required information.
- 3 - Verify the addition in the database.