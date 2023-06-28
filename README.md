# Vulpo

## Description
Vulpo is a project that utilizes Nuxt.js framework for building a web application. It includes several components and features for creating a user interface.

## URL

The project is deployed on Vercel and can be accessed at the following URL: https://vulpi.vercel.app/

## Project Structure
The project structure is organized as follows:

```bash
├── assets
│ ├── fonts
│ └── icons
│ └── images
├── components
│ ├── Button.vue
│ ├── HeaderPage.vue
│ ├── Map.vue
│ ├── MapFooter.vue
│ ├── MenuPopup.vue
│ ├── Notification.vue
│ ├── NotificationPopup.vue
│ ├── PageFooter.vue
│ ├── ReportingPopup.vue
│ └── WarningPopup.vue
├── node_modules
├── pages
│ ├── index.vue
│ ├── map.vue
│ └── notifications.vue
├── plugins
│ ├── mapbox.client.js
│ └── websocket.client.js
├── public
├── server
├── stores
│ ├── alerts.ts
│ ├── map.ts
│ ├── menu.ts
│ ├── popup.ts
│ └── user.ts
├── .gitignore
├── .npmrc
├── app.vue
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Arthur-MONNET/Vulpo.git
    ```
2. Install the dependencies:
    ```bash
    cd Vulpo
    npm install
    ```
3. Set up environment variables:
Create a .env file in the root directory of the project and define the following variables:
    ```bash
    WS_HOST=your_websocket_host
    MAPBOX_TOKEN=your_mapbox_token
    ```
    
## Usage
1. Run the project:
    ```bash
    npm run dev
    ```
2. Open your browser and visit http://localhost:3000 to view the application.

## Dependencies
- [Nuxt.js](https://nuxt.com/)(v3.5.2)
- [Vue.js](https://vuejs.org/)
- [Mapbox](https://www.mapbox.com/)