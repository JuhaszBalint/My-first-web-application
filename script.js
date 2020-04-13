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