# Circulr Basic Design

## Introduction

Circulr is a marketplace to lend to and borrow from your community at no cost things that you may need once in a while but not often enough you need to buy that thing for yourself. For you individually, it keeps your house from being cluttered with things you hardly use and collectively, we work as a community to share and engage with each other thus building trust with each other and reducing our impact on the environment by keeping things circulr!

## Requirements

1. Users can sign up with their Google account.
1. Users can list products that they wish to lend.
1. A product listing must include details of the product, the pickup location, and when it is available to be borrowed.
1. Users can request to borrow a product for a duration of time and for a specific reason.
1. Requests can be accepted or declined by the lender.
1. Users can see all the bookings where they are lending and borrowing.
1. Users can cancel any type of booking with 1 days notice.

## Design

### Features categories

The feature categories are: auth, products, bookings, users.

### Pages

To meet the requirements we can create the following pages:

- Sign up/Login page: To authenticate with google
- Home page: With all the available product listings
- Product page: For a specific product listing
- Account Profile page: To view and edit account details
- Account Bookings page: To view and edit account bookings to lend or borrow
- Account Listings page: To view and edit products listed by the account

### Technology

We'll implement the project with the Next.JS framework. We will use next auth for authentication and use supabase to store our data and power our application.
