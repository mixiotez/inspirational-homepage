[![Netlify Status](https://api.netlify.com/api/v1/badges/88349ec2-788e-4e58-a5de-5208a3d06758/deploy-status)](https://app.netlify.com/sites/mixiotez-inspirational-homepage/deploys)

You can access the live site [here](https://inspirational-homepage.miguel-tellez.dev)

# Inspirational Homepage

## Description
A homepage that displays a random set of inspirational images, the current local weather forecast, and a random inspirational quote. It also lets you add daily goals to a list.

## Preview
<img width="600" alt="Inspirational Homepage screenshot" src="https://github.com/mikempala/inspirational-homepage/assets/16872893/0e3f8a99-7798-40f8-a153-e63324cef929">

## Installation
```bash
yarn install && yarn dev
```

## Features
* Fetches and displays five landscape-oriented nature images using **Unsplash**'s API, with side buttons for navigation and a label with the author's credits. These are lazy loaded and a Blurhash is displayed while they load.
* Fetches and displays a random inspirational quote from **Quotable**'s API, including the author's name.
* Fetches local weather forecast using **OpenWeather**'s API, with location determined by geolocation or **IPinfo**'s API as a fallback. Displays the forecast, icon, location, and temperature in Celsius.
* Manages fetch failures with notifications and displays loading animations while fetching.
* Provides a form to create new goals and a list of default goals. Goals can be marked as done (with a confetti animation) or deleted.
* Stores goals in `localStorage`, re-adding default goals if none remain after a page reload.
* Mobile responsive with breakpoints for desktop, tablet, and cellphone layouts.
* Prevents fetch race conditions in `useEffect` callbacks.
* Uses semantic HTML elements and accessibility labels.
* Uses commit conventions to label new features and bugfixes, and a squash merge strategy to avoid cluttering.

## Technologies Used
* HTML
* CSS
* JavaScript
* TypeScript
* React
* Styled Components
* Git
* GitHub
* Netlify

## Approach
Created a raw outline of general goals and a general roadmap and went from there:

<img width="456" alt="image" src="https://github.com/mikempala/inspirational-homepage/assets/16872893/43ac28c3-12e1-448e-9a3a-6b777b57d5ee">


## Limitations
APIs are demo-only, allowing limited fetches per hour or month.

## Improvements
* Create UI first, then hook components to their API.
* Create a better-defined wireframe before starting to develop.
