import Logo from './Logo_SiteArt_New_Vect.svg';
class MyLogo {
    render() {
        const img = document.createElement('img');
        img.src = Logo;
        img.classList.add('my-logo');
        img.alt = 'Logo';
        const container = document.getElementById('logo');
        container.appendChild(img);
    }
}

export default MyLogo;