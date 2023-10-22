# codere-test

## Table of contents

-[Description](#description)

-[Architecture](#architecture)

-[Running locally](#running-locally)

## Description

Codere test is a application to show in a dashboard a list of TV shows grouped by genre, displaying his rating and showing the tv show detail.

## Architecture

The architecture of the application is based on the Clean, Hexagonal, Screaming and Vertical Slice Architecture and Code patterns with the objective of separating the System Domain by modules, allowing it to be scalable over time and independent of adjacent systems. In the same way, the logic of the application will be segmented by business capabilities and within each of them, as many classes can be generated based on the business needs that exist in each one, allowing the different classes that are necessary to achieve the objective to be encapsulated by capacity. of each one. Finally, each class of infrastructure must meet the sole objective of being the port or adapter of an interaction with an external system of the solution (Storage, Services, Data Streams, etc...)

- [Hexagonal](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c)
- [Screaming](https://medium.com/@kristofferolsson/screaming-architecture-and-a-focus-on-the-use-cases-11eb8003210)
- [Vertical Slice](https://www.jimmybogard.com/vertical-slice-architecture/)

Each of these modules uses the NgRx library for state management and communication with the backend.

![NgRx architecture](https://www.ifourtechnolab.com/pics/A_complete_guide_on_NgRx_Store_Architecture_using_Angular.webp)

## Running locally

- Run `npm install`
- Run `ionic serve`
- Access to http://localhost:8100

## Testing

For testing, the project are using jest.

- For run unit test do `npm run test`
