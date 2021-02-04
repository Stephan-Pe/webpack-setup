import './index.scss';
// import Navigation from './components/navigation/navigation.js';
import MyLogo from './helpers/nav-logo.js';
import MyNavigation from './helpers/mainnavigation';
import Heading from './components/heading/heading.js';
import FordImage from './components/ford-image/ford-image.js';
import React from 'react';


const newNavigation = new MyNavigation();
newNavigation.navigate();
const newLogo = new MyLogo();
newLogo.render();
// const navigation = new Navigation();
// navigation.render('about');
const heading = new Heading();
heading.render('about');

const fordImage = new FordImage();
fordImage.render();

