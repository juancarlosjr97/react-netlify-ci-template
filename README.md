# React Netlify CI Template

[![Automated tests](https://github.com/juancarlosjr97/react-netlify-ci-template/actions/workflows/tests.yml/badge.svg)](https://github.com/juancarlosjr97/react-netlify-ci-template/actions/workflows/tests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8943b9a2-b9a9-4e7d-8945-a45b10af708e/deploy-status)](https://app.netlify.com/sites/react-netlify-ci-template/deploys)

This project is to demonstrate how to set up a project using [React](https://react.dev/) as a web application with Netlify with automated deployments, preview deployments, and running checks for measuring the quality of web pages deployed using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).

## Demo

The project demo is available on the following [URL](https://react-netlify-ci-template.netlify.app/).

## Prerequisites

The following services are require for development:

- [GIT](https://git-scm.com/)
- [nvm](https://github.com/nvm-sh/nvm)
- Netlify Account

## Netlify

The site of the project runs on Netlify with the following configuration:

| Feature        | Description                                                                                                  | Documentation                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Build          | Publish automatically the changes of the project from the default branch to a live site                      | [Link](https://docs.netlify.com/configure-builds/overview/)         |
| Deploy Preview | This feature allows experience changes to any part of the site without having to publish them to production. | [Link](https://docs.netlify.com/site-deploys/deploy-previews/)      |
| Lighthouse     | This plugin runs on every deployment of any kind and evaluate the deployed                                   | [Link](https://github.com/netlify/netlify-plugin-lighthouse#readme) |

## Project Setup

### Dependencies

1. Fork the project and clone your GitHub project

   ```bash
   git clone https://github.com/${USER_NAME}/react-netlify-ci-template
   ```

2. Install node and npm version of the project

   ```bash
   nvm use
   npm install -g npm@${NPM_VERSION}
   ```

3. Install project dependencies

   ```bash
   npm ci
   ```

### Netlify Project Setup using CLI

The setup of the Netlify project has been abstracted from the official [Netlify](https://docs.netlify.com/cli/get-started/#installation) documentation

1. Authenticate with Netlify

   ```bash
   npx netlify-cli login
   ```

   A window will be prompted to log in and grant authorization to the local environment.

2. Initialize the project

   The projects used the `./netlify.toml` for the configuration of the site

   ```bash
   npx netlify-cli init
   ```

3. Use the following configuration

   ```bash
   ? What would you like to do? Create & configure a new site
   ? Team: Select your team
   ? Site name (leave blank for a random name; you can change it later): react-netlify-ci-template-${USER_NAME}
   ? Your build command (hugo build/yarn run build/etc): npm run build
   ? Directory to deploy (blank for current dir): build
   ```

   If the terminal returns "Success! Netlify CI/CD Configured!" the Netlify site has been configured successfully.

## Netlify Project Setup using Netlify UI

These are the list of steps to follow to add a project using the Netlify UI for continuous deployments and enabling deployment previews when a Pull Request has been raised.

### Prerequisites for Netlify UI Setup

- Netlify Account Created

### Netlify Setup Checklist

- [ ] Link the project to Netlify Team, wait for the first deployment to be completed successfully and update the site name

- [ ] Create a Pull Request with a visual change to test the deployment-preview

If all the checkboxes have been ticked, then have fun with Netlify!

### Advance Configuration

In order to enhance an advance configuration with Netlify a `netlify.toml` configuration file is required within the project.

The default branch of the project, usually main or master, must contain the `netlify.toml` configuration.

The following configuration can be used as a starting point https://github.com/juancarlosjr97/react-netlify-ci-template/blob/main/netlify.toml.

#### Netlify Configuration File Explanation

The Netlify configuration is based on a React Node project bootstrapped from [Create React App](https://create-react-app.dev/) by Facebook.

1. The file contains the following configuration for node and npm:

   - Node version 18.16.0
   - NPM version 9.5.1

2. The command to build the project by default is `npm run build`

3. The base directory for the website to deploy using Netlify is the root of the project

4. The output of the build command of the built website is the `build` directory

5. The Google Lighthouse plugin has been enabled to analyze the built website on Netlify

### Netlify and GitHub Setup

Netlify can be integrated tightly with GitHub and to activate this integration the following [Netlify](https://github.com/apps/netlify) app needs to be configured.

With the Netlify app enabled the Netlify drawer is enabled for Netlify Deploy Preview connected to a PR on GitHub.

### Start the React app

To start the React app run the following command:

```bash
npm run start
```

The app will be running on the port `3000` and accessible in `http://localhost:3000`

## Automated Tests

To run the automated tests execute the following command:

```bash
npm run test
```

The project on every commit runs a pipeline to build and tests the web app.

For more information see here the [GitHub Actions](https://github.com/juancarlosjr97/react-netlify-ci-template/actions).

## Development with Codespaces

The app has a predefined Codespaces configuration available at `.devcontainer/devcontainer.json` as this web app has been developed using Codespaces.

Follow this [guide](https://docs.github.com/en/codespaces/getting-started/quickstart) on how to get started with Codespaces.

## Acknowledgment

The project has been bootstrapped from [Create React App](https://create-react-app.dev/) by Facebook.

## Contributing

Make sure to follow the [contributing guide](./CONTRIBUTING.md)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file.

## Support Information

- [CHANGELOG](./CHANGELOG.md)
- [CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md)
- [CONTRIBUTING](./CONTRIBUTING.md)
- [LICENSE](./LICENSE.md)
