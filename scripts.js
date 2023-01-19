const familyGallery =document.querySelector('.family__galery');
const helper1 = document.querySelector('.helper_1');
const menuBtn = document.querySelector('.menu_btn')
const b= document.querySelector('.b')
console.log(helper1)

const color = "white"

menuBtn.addEventListener('click', () => {
  
  helper1.classList.toggle('menu-open')
  menuBtn.classList.toggle('white')
})
const initialCards=[
  {
    title: 'Accessories',
    subtitle: "Accessories you didn't know you needed.",
    image: './images/1.jpg',
    linkText : "Accessories"
  },
  {
    title: 'Apparel',
    subtitle: "Check out our line of non-hiking clothes.",
    image: './images/2.jpg',
    linkText : "Apparel"
  },
  {
    title: 'Climbing Gear',
    subtitle: "Climbing gear for every occasion.",
    image: './images/3.jpg',
    linkText : "Climbing Gear"
  },
  {
    title: 'Headwear',
    subtitle: "Our beanies are so comfy you won't believe it.",
    image: './images/4.jpg',
    linkText : "Headwear"
  },
  {
    title: 'Hiking Gear',
    subtitle: "Desert or mountain? Doesn't matter.",
    image: './images/5.jpg',
    linkText : "Hiking Gear"
  },
  {
    title: 'Jackets',
    subtitle: "Our jackets are perfect for every season.",
    image: './images/6.jpg',
    linkText : "Jackets"
  }
];

const createCard =(title, subtitle, image, linkText)=>{
  return `
  <div class ="gallery__card">
     <h2 class ="gallery__title">${title}</h2>
    <h3 class ="gallery__subtitle">${subtitle}</h3>
    <img class ="gallery__img" src="${image}">
    <a class ="gallery__link" href="#">View ${linkText}&#10142;</a>
  </div>
  `
}

//Создать  карточки , используя функцию createCard
const familyCardHtml=initialCards.map(card=>{
 return createCard (card.title, card.subtitle, card.image, card.linkText)
}).join('');

familyGallery.innerHTML= familyCardHtml;

