## Context
1. Carousel app is a Angular app which displays a carousel.
2. user-profile-react is a React + Vite app which exports a single component 'User Menu'. This dispalys an avatar , which on click displays options like Orders, Settings, Payments.
3. Finally, dashboard is a Host app in React + Vite . It imports User Menu and displays it in the Toolbar on the top left. It also imports Carousel app as a Web component.
4. This Repo demonstrates Micro frontends on a basic Amazon like Home Page.

## How to run the Apps

1. If you are using VS Code, open 3 different windows for all the 3 apps.
2. Build all the apps and run them.
3. For dashboard app, run npm run build, npm run dev (Runs on port 5173)
4. For carousel-app, run npm run build and then ng serve --port 4200
5. For user-profile-react, run npm run build and npm run dev (Runs on port 5174)
