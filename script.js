let data = {
    photo: ['./Photos/iceland-1920x1080-4k-5k-wallpaper-sea-shore-sand-6292.jpg', './Photos/macos-catalina-1920x1080-day-mountains-wwdc-2019-5k-21590.jpg', './Photos/noisy.jpg', './Photos/norway.jpg', './Photos/village.jpg', './Photos/yosemite-mountains.jpg', './Photos/yosemite-winter-forest.jpg', './Photos/yosemite-winter-snow-forest.jpg'],
    title: ['Iceland', 'Island', 'Noisy', 'Norway', 'Village', 'Yosemite mountains', 'Yosemite winter forest', 'Yosemite winter snow forest'],
    description: ['Iceland is one of from the bucket list.',
    'One of the most astonishing places.',
    'Made by Georgo Georgy .',
    'Norway cold bust must to see',
    'Yosemite National Park is an American national park located in the western Sierra Nevada of Central California, bounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest.',
    'The park is managed by the National Park Service and covers an area of 748,436 acres (1,169 sq mi; 3,029 km2)[2] and sits in four counties: centered in Tuolumne and Mariposa, extending north and east to Mono and south to Madera County.',
    'Designated a World Heritage site in 1984, Yosemite is internationally recognized for its granite cliffs, waterfalls, clear streams, giant sequoia groves, lakes, mountains, meadows, glaciers, and biological diversity.',
    'On average, about four million people visit Yosemite each year,[3] and most spend the majority of their time in the seven square miles (18 km2) of Yosemite Valley.'    
]
};
/*
let img = document.getElementById('img-container');
let title = document.getElementById('image_title');
let description = document.getElementById('image_description');
let currentPhoto = 0;
img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
title.textContent = data.title[currentPhoto];
description.textContent = data.description[currentPhoto];

let up = document.getElementById('forward-arrow');

let down = document.getElementById('back-arrow');

up.onclick = function() {
    if (currentPhoto === 7) {
        currentPhoto = 0;
        img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
        title.textContent = data.title[currentPhoto];
        description.textContent = data.description[currentPhoto];
    } else {
        currentPhoto++;
        img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
        title.textContent = data.title[currentPhoto];
        description.textContent = data.description[currentPhoto];
    }
}

down.onclick = function() {
    if (currentPhoto === 0) {
        currentPhoto = 7;
        img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
        title.textContent = data.title[currentPhoto];
        description.textContent = data.description[currentPhoto];
    } else {
        currentPhoto--;
        img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
        title.textContent = data.title[currentPhoto];
        description.textContent = data.description[currentPhoto];
    }
}
*/

let img = document.getElementById('img-container');
let title = document.getElementById('image_title');
let description = document.getElementById('image_description');
let currentPhoto = 0;
let up = document.getElementById('forward-arrow');
let down = document.getElementById('back-arrow');
let thumbnail_container = document.getElementById('thumbnails');
let counter = 0;

/*function printImage(){
    img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
    title.textContent = data.title[currentPhoto];
    description.textContent = data.description[currentPhoto];
}*/

data.photo.forEach((i) => {
    let newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'div'+counter+'');
    newdiv.style.cssText = ('position: relative; text align: center; width: 80px; height: 80px, display: inline-block');
    let thumbnail = new Image;
    thumbnail.style.cssText = 'object-fit: cover; width: 70px; height: 70px; box-shadow: grey 0px 0px 3px 2px; padding: 3px; border-radius: 1px; position: relative';
    thumbnail.setAttribute('id', counter);
    //thumbnail.setAttribute('title', data.title[counter]);
    let thumb_title = document.createElement('span');
    thumb_title.setAttribute('id', 'thumb-title'+counter+'');
    //thumb_title.style.cssText = 'position: relative; top: 0px; width: auto; text-align: center; background: black; padding: 10px, margin-bottom: 10px; color: white; visibility: hidden';
    thumb_title.innerText = data.title[counter];
    thumbnail.src = i;
    counter++;
    newdiv.appendChild(thumbnail);
    newdiv.appendChild(thumb_title);
    thumbnail_container.appendChild(newdiv);
})

let thumb0 = document.getElementById('0');
let thumb1 = document.getElementById('1');
let thumb2 = document.getElementById('2');
let thumb3 = document.getElementById('3');
let thumb4 = document.getElementById('4');
let thumb5 = document.getElementById('5');
let thumb6 = document.getElementById('6');
let thumb7 = document.getElementById('7');

function printImage(){
    img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
    title.textContent = data.title[currentPhoto];
    description.textContent = data.description[currentPhoto];
    if (currentPhoto === 0) {
        thumb0.style.background = 'rgb(65 179 247)';
    } else {
        thumb0.style.background = 'inherit';
    }
    if (currentPhoto === 1) {
        thumb1.style.background = 'rgb(65 179 247)';
    } else {
        thumb1.style.background = 'inherit';
    }
    if (currentPhoto === 2) {
        thumb2.style.background = 'rgb(65 179 247)';
    } else {
        thumb2.style.background = 'inherit';
    }
    if (currentPhoto === 3) {
        thumb3.style.background = 'rgb(65 179 247)';
    } else {
        thumb3.style.background = 'inherit';
    }
    if (currentPhoto === 4) {
        thumb4.style.background = 'rgb(65 179 247)';
    } else {
        thumb4.style.background = 'inherit';
    }
    if (currentPhoto === 5) {
        thumb5.style.background = 'green';
    } else {
        thumb5.style.background = 'inherit';
    }
    if (currentPhoto === 6) {
        thumb6.style.background = 'green';
    } else {
        thumb6.style.background = 'inherit';
    }
    if (currentPhoto === 7) {
        thumb7.style.background = 'green';
    } else {
        thumb7.style.background = 'inherit';
    }
}

printImage();

up.onclick = function() {
    if (currentPhoto === 7) {
        currentPhoto = 0;
        printImage();
    } else {
        currentPhoto++;
        printImage();
    }
}

down.onclick = function() {
    if (currentPhoto === 0) {
        currentPhoto = 7;
        printImage();
    } else {
        currentPhoto--;
        printImage();
    }
}

thumb0.onclick = function() {
    currentPhoto = 0;
    printImage();
}
thumb1.onclick = function() {
    currentPhoto = 1;
    printImage();
}
thumb2.onclick = function() {
    currentPhoto = 2;
    printImage();
}
thumb3.onclick = function() {
    currentPhoto = 3;
    printImage();
}
thumb4.onclick = function() {
    currentPhoto = 4;
    printImage();
}
thumb5.onclick = function() {
    currentPhoto = 5;
    printImage();
}
thumb6.onclick = function() {
    currentPhoto = 6;
    printImage();
}
thumb7.onclick = function() {
    currentPhoto = 7;
    printImage();
}
/*
Failed attempts at syncing thumbnail and the image at the viewer area, making the viewer show the image clicked at the thumbnail section
Also highlight the thumbnail of the image being showed at the viewer area
let arr = [thumb0, thumb1, thumb2, thumb3, thumb4, thumb5, thumb6]
arr.onclick = function() {
    
}
thumb0.onclick = function() {
    currentPhoto = thumb0;
    printImage();
}
thumbnail_container.onclick = function() {
    let ncounter = 0;
    for (let n of arr) {
        n.addEventListener('click', function() {
            currentPhoto = ncounter;
            printImage();
            console.log(ncounter);
        });
        ncounter++;
    }
}
*/