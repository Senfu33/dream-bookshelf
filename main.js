//Declaring variable with const
// const breakpointsTest = document.querySelector('.breakpoints-test');
// console.log(breakpointsTest)
// Declaring variable with let
// let welcomeStudents = document.getElementById('welcomeStudents');
// console.log(welcomeStudents.innerHTML + "From the Console");
//Changing html with js
// setTimeout(function() {welcomeStudents.innerHTML = "Changing text from JS"}, 5000)

const sliderContainer = document.querySelector('.slider-container');
window.onscroll = () => {
    sliderContainer.style.left = `${-window.scrollx}px`
}


// temp = document.querySelectorAll(".variant1");
//         console.log(temp[0]);
//         console.log(temp[1])

// const var1 = variant1.scss

// function myFunction() {
//     var element = document.getElementById("img-1");
//      element.style.var1
//          }

//     //  -----------------
// const first = document.getElementById("1");
// const second = document.getElementById("2");
// const third = document.getElementById("3");
// const fourth = document.getElementById("4");
// const fifth = document.getElementById("5");

// const sliderContainer = document.querySelector('.slider-container');
// window.onscroll = () => {
//     sliderContainer.style.left
// }

// first.addEventListener("click", () => {
//   const thisbook = slide.clientWidth;
//   slidesContainer.scrollLeft += thisbook;
// });

// function myFunction(p, b) {
//   element.style.opacity = b;
// }
// first.addEventListener("click", document.getElementById("1-img")
// => { first =
// });


// fourth.addEventListener("click", () => {
//   fourth.ariaValueNow = document.getElementById("4-img")
//   const thisbook =  document.getElementById("4-img");
//   fourth.append = thisbook;
//     console.log(thisbook);
//   });

//   fourth.addEventListener('click', showNextItem);
// previousItem.addEventListener('click', showPreviousItem);



// const items = document.querySelectorAll('img');
// const itemCount = items.length;
// const nextItem = document.querySelector('.next');
// const previousItem = document.querySelector('.previous');
// let count = 0;

// function showNextItem() {
//   items[count].classList.remove('active');

//   if(count < itemCount - 1) {
//     count++;
//   } else {
//     count = 0;
//   }

//   items[count].classList.add('active');
//   console.log(count);
// }

// function showPreviousItem() {
//   items[count].classList.remove('active');

//   if(count > 0) {
//     count--;
//   } else {
//     count = itemCount - 1;
//   }

//   items[count].classList.add('active');
//   console.log(count);
// }

// function keyPress(e) {
//   e = e || window.event;

//   if (e.keyCode == '37') {
//     showPreviousItem();
//   } else if (e.keyCode == '39') {
//     showNextItem();
//   }
// }

// nextItem.addEventListener('click', showNextItem);
// previousItem.addEventListener('click', showPreviousItem);
// document.addEventListener('keydown', keyPress);

const bookCard = document.querySelectorAll('.book-card');
const radioBtn = document.querySelectorAll('.radio-btn');

for (const [i] of radioBtn.entries()) {
    radioBtn[i].addEventListener('click', (e) => {
        bookCard.forEach((book) => book.classList.remove('book-in-focus'));
        bookCard[i].classList.add('book-in-focus');
        radioBtn.forEach((radio) => radio.classList.remove('radio-on'));
        radioBtn[i].classList.add('radio-on');
    })
}

const burgerBtn = document.querySelector('.burger-btn-spans')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const body = document.body;

burgerBtn.addEventListener("click", () => {
    header.classList.toggle('js-header');
    if(header.classList.contains('js-header')) {
        body.style.overflow="hidden";
    } else {
        body.style.overflow="auto";
    }
});

overlay.addEventListener('click', () => {
    header.classList.remove('js-header')
    body.style.overflow="auto";
});
