# Project Title

Fetching github issues of [PHP-FFMpeg/PHP-FFMpeg](https://github.com/PHP-FFMpeg/PHP-FFMpeg)

## Demo link:

Access my site at [Edvolve Assignment - 1](https://edvolve-1.netlify.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App

[Fetching github issues - PHP-FFMpeg/PHP-FFMpeg] is an app that lists all the issues of the repo [PHP-FFMpeg/PHP-FFMpeg] in a table having its contents - Serial number, Issue name, Type of issue.
The app also has pagination with every page having 20 items.
The search functionality in the app, allows us to search as per the issue name, from that particular page.

## Screenshots

![issues Table](https://i.ibb.co/3dRM60R/Screenshot-208.png)

<!-- Picture by [Kelly Sikkema](https://unsplash.com/@kellysikkema) -->

## Technologies

The tech used are:

- Reactjs
- Chakra UI/icons for styling

## Setup

- download or clone the repository
- run `npm install`
- cd assgn-1
- npm start

## Approach

- I started by fetching data from github api by attaching a query parameter searching for the required Repository.
- Pagination is added by updating state, and every time page number is updated, an api call is made to fetch data.
- The search input value is obtained using useRef()(to avoid unnecessary re-rendering).
- Debouncing functionality is added to search a particular issue.

## Status

## Credits

List of contriubutors:

- [HemanthKumar-CN](https://github.com/HemanthKumar-CN)

## License
