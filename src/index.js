import './style.css';
import image1 from './images/Los_Angeles.jpg';
import image2 from './images/New_York.jpg';

const img1 = new Image();
img1.src = image1;

const img2 = new Image();
img2.src = image2;

document.body.appendChild(img1);
document.body.appendChild(img2);