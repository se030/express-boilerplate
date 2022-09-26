// assets/resource test
import src from 'Assets/image.jpeg';

// dotenv-webpack test
console.log(process.env.PORT);

// DOM API test
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.querySelector('body').appendChild(root);

const image = document.createElement('img');
image.setAttribute('src', src);
document.querySelector('#root').appendChild(image);
