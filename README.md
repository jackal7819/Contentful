# Contentful Headless CMS Integration - React Project

This project integrates a React application with Contentful, a headless CMS, to manage content. The goal is to showcase a collection of projects using Contentful's API.

## Project Link

[Contentful React Project](https://contentful-oxmj.onrender.com)

## Project Structure

The project is structured around two main components:

### Hero Component

The `Hero` component is responsible for rendering the landing page's hero section.

### Projects Component

The `Projects` component retrieves and displays a collection of projects from Contentful.

## Nice Images

The project leverages [Undraw](https://undraw.co/) for high-quality illustrations to complement the UI.

## Headless CMS

### Contentful Account Setup

1. Create a Contentful account using [Contentful](https://www.contentful.com/).
2. Configure content types and create entries for projects.

### Explore Contentful API

Explore Contentful's API to retrieve your Space ID and Access Token, which are essential for using Contentful's SDK.

### Installation of Contentful SDK

Install the Contentful SDK using the command `npm install contentful`.

### Retrieve Entries with SDK

Utilize the Contentful SDK to fetch entries and output the response in the console:

```javascript
import { createClient } from 'contentful';

const client = createClient({
  space: 'qz00uzgg3leh',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

### Custom Hook for Data Handling

Create a custom hook to manage loading state and projects data.

### Parsing Data

Format the retrieved data into a projects array.

### Rendering Projects Component

Use the projects array to render content in the `Projects` component.
