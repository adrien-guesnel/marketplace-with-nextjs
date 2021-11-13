# Recommendations

In this document, some recommendations to put this in production.

# Design / UI

It will be better to separate design components into a separate library. It will be more usefull and better for reusability of them.

It could be a good move to put inside this UI library a Storybook to see easily all the components available.

# Database

For the POC, i mocked the return of API, but it could be a critical part of the success of the project.

Especially we need to choose a good and reliable database, my favorite is Postgre SQL but others databases could be better.

It needs more reflexion to know if SQL or NoSQL and which solution is better in performance, price and accessibility.

# SEO / Accessibility

Again for this POC, i don't focus on accessibility and SEO. It could be good to fix all problems and improve the SEO and accessibility of the components.

# Tests

A reliabel project is a project that have a good code coverage.
No tests are implemented here, so we can do some Cypress tests for e2e interactions and some Jest tests for utilities.
We can impelment tools like sonarcloud to impose some code coverage and good practices for each new devs.

# Monitoring

It's very important to monitor all problems can be happen. So we need to thinking about tools like new relic or datadog to retain logs errors.

# How to Scale this ?

It's very important to separate different parts and factorize the maximum of code.

I could see three projects :

- Ui library : the project with all react components that could be usefull inside each marketplace
- The marketplace : it could be a template that we duplicate each time but it will be a big problem to maintain all versions in the future. Maybe think about something that could be personnalizable by domain. So like this we could have a core front project and think about personalization and we are always up to date. I think it's the more critical part to think. We need to have something personnalizable but not to time consuming to maintain.
- The api : it's the backend that answer about all requirements of marketplace. It contains all the businness logic inside it, separated from the front.

So with this architecture, we can have two thinking about organization :

- Feature team : one team of 3 or 4 people that be in charge of all projects. The team will be in charge to develop each functionnalites from the back to the front. Here the ressources are always used with the focus on a functionnalities from A to Z. But maybe we can loose some specifications and interests, maybe people prefer front and some back.

- Project team : two team of 2 people, one front, one end. The front will be in charge of ui library and the markeplace and the back of the api. This organization tends to specialize people in their part, the problems are to see others project like a black box (we don't know how they works) but is it really mandatory to know all projects ? And maybe sometimes a team need to wait other team to develop something.

I think 3 or 4 people can be a good start. And if i need to choose an organization i think feature team is better when we beginning to have the best effort and maybe after a project team to increase the specialization and the quality.
