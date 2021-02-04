import './heading.scss';



class Heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('.crab-wrapper');
        h1.innerHTML = 'Webpack is awesome. This is the ' + pageName + ' page, served from heading component';
        body.appendChild(h1);
    }
}

export default Heading;