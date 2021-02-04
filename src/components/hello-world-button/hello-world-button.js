import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button'
    
    render() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        const button = document.createElement('button');
        const someText = document.createTextNode('Click me!');
        const span = document.createElement('span');
        button.innerHTML = 'Be Creative';
        button.classList.add(this.buttonCssClass);
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Create some meaningfull content!';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        const body = document.querySelector('.crab-wrapper');
        body.appendChild(buttonContainer);
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(span);
        span.appendChild(someText);

    }
}
export default HelloWorldButton;