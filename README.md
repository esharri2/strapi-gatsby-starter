# WIP Gatsby + Strapi Starter Project

A boilerplate setup for websites using the [Gatsby](https://www.gatsbyjs.org/)
React framework and [Strapi](https://strapi.io/) CMS.

Also incudings instructions for deployment across a suite of free tools.

## Details

### Tools

- React front end: Gatsby
- CSS: styled-components
- CMS: Strapi
- DB: MongoDB

### Deployment

- Netlify - front end
- Heroku - back end
- mLab - database

## Set up steps

1. Install Node and MongoDB, and install Gatsby globally.
1. Download this repo and create a new Git repo for it.
1. Run `npm install` in the root and in the `client` directory.
1. Open `/config/environments/development/database.json` and update
   `connections.default.settings.database` with whatever you want to call your
   db for your project.
1. Start MongoDB.
1. Run `npm start` in the root to start the Strapi server.
1. Go to http://localhost:1337/admin.
1. At this point you can refer to Strapi's documentation for getting started.

   Note that there is only one page component in the Gatsby front end and it has
   the following GraphQL query:

   ```
   query {
       allStrapiRestaurant {
       edges {
           node {
                id
                name
                description
           }
       }
       }
   }
   ```

   If you want to do a quick test to ensure Gatsby is pulling data from the CMS,
   create a content type called `Restaurant` and add name and description text
   fields to it. Add a couple restaurants. You can then `cd client` and run
   `gatsby develop`. You should see the restaurants listed on the page.

   ### Notes

   - Global styles variables are included here and can be imported as needed:
     `client/src/utils/styles.js`.
   - Global styles are here: `client/gatsby-browser.js`.

## Deployment steps

### Backend

1. Go to [mlab.com](https://mlab.com/) and create a db. Make sure to create a
   user for the db.
1. Go to [Heroku](https://dashboard.heroku.com/apps) and create a new app.
1. Go into the app's settings and set the following config vars:

   - DATABASE_HOST
   - DATABASE_PORT
   - DATABASE_NAME
   - DATABASE_USERNAME
   - DATABASE_PASSWORD
   - DATABASE_URI
   - NETLIFY_BUILD_HOOK

   Use values from your mLab db.

1. Deploy your code to Heroku.
1. Author some content like you did on your local Strapi instance. Don't forget
   to add public read (find / findone) permissions to your CMS in the **Roles
   and Permissions** section.

### Frontend

1. Go to [Netlify](https://www.netlify.com/).
1. Create a new site from Git and use the following values during setup:
   - Build command: npm run build
   - Publish directory: public
   - Environment variables:
     - API_URL - included url of your Heroku app.
     - NODE_VERSION - this is optional, but if you run into build issues, it
       could be due to incompatibility between Netlify's Node version and what
       you need for the libraries.
1. When you're done, your site will start deploying, but it will fail.
1. Go to **Deploys** > **Build Settings** and set the base directory to
   `client`. This will effectively change the publish directory to
   `client/public`.
1. Deploy again and you should be up and running.

## TODO
