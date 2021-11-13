# Realization

## Technologies choosen

I choose Next.JS framework to build this prototype, it's a famouse framework using typescript and react to build single web page application.

And for design part i choose :

- TailwindCSS to build the design of our own components with classes predefined.
- Fontawesome icons to have plenty icons available.

## Separation of the page

We can define 3 big parts for each page of this project :

- Header with logo and the menu
- Body with the core of the marketplace
- Footer with the logo and some credentials

So i create a Layout component to regroup this three parts and only have to put body part inside it to have the design for each page.
