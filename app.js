// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.
function DogCard(imageUrl, titleText) {
    const card = document.createElement('div');
    card.classList.add('dog-card');

    const image = document.createElement('img');
    image.classList.add('dog-image');
    image.src = imageUrl;
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = titleText;
    card.appendChild(title);

    card.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('selected');
    })

    return card;
}

const container = document.querySelector('.dogs');

let dog1 = DogCard('https://images.dog.ceo/breeds/husky/20180924_193829.jpg', 'Husky');
let dog2 = DogCard('https://images.dog.ceo/breeds/husky/n02110185_1066.jpg', 'Husky');
let dog3 = DogCard('https://images.dog.ceo/breeds/husky/n02110185_2736.jpg', 'Husky');

container.appendChild(dog1);
container.appendChild(dog2);
container.appendChild(dog3);

axios.get('https://dog.ceo/api/breed/husky/images/random/12')
    .then((response) => {
        //network request finished
        response.data.message.forEach((item) => {
            dogCard = DogCard(item, 'Husky');
            container.appendChild(dogCard);
        })
    })
    .catch((error) => {
        console.log('Network request was unsuccessful');
        console.log(error);
    })