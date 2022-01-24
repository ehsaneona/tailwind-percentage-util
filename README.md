# tailwind-percentage-util

This plugin add new utilities classes so you can use from 0% to 100%!

# Get Started

### Install the npm package into your project

    npm i tailwind-percentage-util || yarn add tailwind-percentage-util

### Load the plugin in your `tailwind.config.js` file

    //tailwind.config.js
    const  percentageUtil = require('tailwind-percentage-util'); // load the plugin
    module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode:  false, // or 'media' or 'class'
        theme: {},
        variants: {
           extend: {},
        },
        plugins: [
            percentageUtil, // tell tailwind that you want to use it
            //other plugins...
        ]
    };

## Now Enjoy :)
