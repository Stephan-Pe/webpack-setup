import './index.scss';
import MyLogo from './helpers/nav-logo.js';
// import Navigation from './helpers/mainnavigationnavigation.js';
import MyNavigation from './helpers/mainnavigation';

import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import React from 'react';


const newNavigation = new MyNavigation();
newNavigation.navigate();
const newLogo = new MyLogo();
newLogo.render();
// const navigation = new Navigation();
// navigation.render('index');
const heading = new Heading();
heading.render('index');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();





if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
