// toggle icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

// scroll section
//  Let sections = document.querySelectorAll('section');
//  Let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         Let top = window.scrollY;
//         Let offset = sec.offsetTop - 100;
//         Let height = sec.offsetHeight;
//         Let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             // active navbar links
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

//             });
//         }
//     });

    // sticky header
    //Let header = document.querySelector('header');

   // header.classList.toggle('sticky', window.scrollY > 100);
//}