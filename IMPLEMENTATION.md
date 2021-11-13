# Implementation

## Technologies chosen

I choose Next.JS framework to build this prototype, it's a famous framework using Typescript and React to build single web page application.

And for design part i chose :

- TailwindCSS to build the design of our own components with classes predefined.
- Fontawesome icons to have plenty icons available.

## Separation of the page

We can define 3 big parts for each page of this project :

- Header with logo and the menu
- Body with the core of the marketplace
- Footer with the logo and some credentials

So i create a Layout component to regroup this three parts and only have to put body part inside it to have the design for each page.

## Marketplace

For the POC, i choose to reproduce an interface with only two functionnalities:

- Search field: to filter the items by the searching value
- Price fields: to filter the items by min price and max price

Precision : items are mocking with fix values inside an api route accessible by http://localhost:3000/api/items

For the components separation, i only separate the item card and pagination but it will be better to separate filters too.
