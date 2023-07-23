# Resource

1. [Build and Deploy 4 Modern React Apps and Get Hired as a Web Developer | Full 10-Hour Course | 6:32:14](https://youtu.be/tllZWCQZ9_0?t=23534)
2. [project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
3. [Free Logo Maker](https://logo.com/)
4. [React 3 fiber docs](https://docs.pmnd.rs/)
5. [Free 3d models](https://free3d.com/3d-models/)
6. [sketchfab (best)](https://sketchfab.com/)
7. [turbosquid](https://www.turbosquid.com/)

## checkpoint

[8:16:40](https://youtu.be/tllZWCQZ9_0?t=24294)

## Steps

1. Install (see in readme.md for setup installation)
2. Install additional dependencies
   - **nb**: the correct command is `npm install three @types/three @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion`
   - from source : `npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion`
   - `--legacy-peer-deps` -> one of packages we'll be using, specifically `react-tilt` uses older versions of react, this is something you'll use often when using some older packages
   - `@react-three/fiber` -> react based 3js library that's allow us to create 3js code in a react fashion
   - `@react-three/drei`
   - `maath` for math utility functions
   - `react-tilt` -> provide some animation when hovering over our cards
   - `react-vertical-timeline-component` -> for experience similar timeline to the one on LinkedIn
   - `@emailjs/browser`
   - `framer-motion`
   - `react-router-dom` -> since we're using Next.Js, we don't need to install this
3. next -> setup starting assets & file -> public (3d-models & images), layout & page, components, constant, styles, utils, tailwind.config.js
4. Logo & Navigation (Mobile & Desktop)
5. Hero Section
   - additional packages: `npm install three @types/three`
6. About Section
7. Experience Section. <!-- FIXME: Warning: Extra attributes from the server: style at html app-index.js:31-->
8. Tech Section
9. Next: Works Section
