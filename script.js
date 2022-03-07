const galleryContainer=document.querySelector('.gallerycontainer');
const arr = ['blueflower','pinkflower','redflower','whiteflower','lilac','rose','crocus',
'orchid','lily','iris','tulip','bluebell','peony','daisy','poppy','carnation','daffodil','begonia','pansy',
'lotus','periwinkle','bouquet','bellflower','primrose'];
let rand = Math.floor(Math.random() * arr.length);
let flower=arr[rand];
console.log(flower);
const url = `https://api.unsplash.com/search/photos?query=${flower}&per_page=12&orientation=landscape&client_id=bo0GOg9KOJ4vumm40NpCsEbV53aYNOP-assnkzFd8Uk`;
let someurl=`https://api.unsplash.com/search/photos?query=${flower}&per_page=12&orientation=landscape&client_id=bo0GOg9KOJ4vumm40NpCsEbV53aYNOP-assnkzFd8Uk`;
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);  
}
getData(someurl);
function showData(data){
  galleryContainer.innerHTML='';
  data.results.map(a=>{
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = `${a.urls.regular}`;
    img.alt = `image`;
    galleryContainer.append(img);
  })  
}
