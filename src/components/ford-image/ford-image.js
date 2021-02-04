import Ford from './ford.png';
import './ford-image.scss';


class FordImage {
    render() {
        const img = document.createElement('img');
        img.src = Ford;
        img.alt = 'Ford Capri'
        img.classList.add('ford-image');

        const bodyDomElement = document.querySelector('.crab-wrapper');
        bodyDomElement.appendChild(img);
    }
}

export default FordImage;