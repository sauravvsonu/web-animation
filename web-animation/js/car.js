const road = document.querySelector(".road");
const car = document.querySelectorAll('.car img');
const body = document.querySelector('body');
console.log(road);
console.log(car);
const e = document.querySelector(".road");
const weak = document.querySelector(".car");
console.log(e);
console.log(weak);
const tex = document.querySelector('.drve');
const text = document.querySelector('.on');
console.log(text);

// body.addEventListener("click", function() {

//     if (road.classList.contains('moveright')) {
//         road.classList.remove('moveright');
//         car[0].classList.remove('suspesion');
//         car[1].classList.remove('suspesion');
//     } else {
//         road.classList.add('moveright');
//         car[1].classList.add('suspesion');
//         car[0].classList.add('suspesion');

//     }
// });
body.addEventListener("keydown", function() {
    if (event.which == 16) {
        if (car[1].style.display != 'none') {

            car[1].style.display = 'none';
            car[0].style.display = '';
            text.innerHTML = 'turn on headlight:';


        } else {
            car[1].style.display = '';
            car[0].style.display = 'none';
            text.innerHTML = 'turn off headlight:';

        }
    }
    if (event.which == 32) {
        road.classList.toggle('moveright');
        car[0].classList.toggle('suspesion');
        car[1].classList.toggle('suspesion');
        tex.classList.toggle('drive');
        tex.classList.toggle('show');


        // if (road.classList.contains('moveright')) {
        //     road.classList.remove('moveright');
        //     car[0].classList.remove('suspesion');
        //     car[1].classList.remove('suspesion');
        // } else {
        //     road.classList.add('moveright');
        //     car[1].classList.add('suspesion');
        //     car[0].classList.add('suspesion');

        // }
    }
});
body.addEventListener("keydown", () => {
    console.log(event.which);
})