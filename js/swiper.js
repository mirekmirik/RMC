let mySwiper;

function createOrDestroySwiper() {
    if (window.innerWidth < 600) {
        if (!mySwiper) {
            mySwiper = new Swiper('.mySwiper', {
                slidesPerView: 1.4,
                initialSlide: 1,
                spaceBetween: 20,
                freeMode: true,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = null;
        }
    }
}
let windowWithNow = window.innerWidth;
window.addEventListener('resize', function () {
    createOrDestroySwiper();
});




createOrDestroySwiper();

function createOrDestroySwiper1() {
    let mySwiper1 = new Swiper('.mySwiper1', {
        slidesPerView: 1.5,
        initialSlide: 3,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        }
    })
}

createOrDestroySwiper1()




const firstSection = document.querySelector('.first-section')
const nav = firstSection.querySelector('.nav')
console.log(nav)


const secondSection = document.querySelector('.second-section')
const aboutUs = secondSection.querySelector('.about-us')
const hamburgerOpen = document.querySelector('.hamburger-open')
const btn = document.querySelector('.btn-contact')
const btnContact = document.querySelectorAll('.contact-btn')
const btnContactSend = document.querySelector('.contact-btn-send')
const btnContactCancel = document.querySelector('.contact-cancel')
const contact = document.querySelector('.contact-wrapper')
const contactSuccess = document.querySelector('.contact-successfull')


// window.addEventListener('scroll', () => {

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         console.log(entry)

//         if (entry.boundingClientRect.y < 600) {
//             // nav.classList.add('nav-fixed');
//             nav.classList.add('nav-fixed');
//             console.log(nav)
//         }
//         if (entry.boundingClientRect.y > 300) {
//             if (hamburgerOpen.classList.contains('hamburger-open-active')) return;
//             nav.classList.remove('nav-fixed');
//         }
//     });
// });
// observer.observe(secondSection);


// })


const navLinks = document.querySelectorAll('.list-item a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        const hamburgerOpen = document.querySelector('.hamburger-open')
        if (hamburgerOpen.classList.contains('hamburger-open-active')) {
            hamburgerOpen.classList.remove('hamburger-open-active')
            // hamburgerOpen.querySelector('ul').style.display = 'none'
            hamburgerOpen.querySelector('ul').classList.add('none')

            nav.classList.remove('nav-fixed')
            nav.style.height = 'auto'
            nav.style.opacity = '0.7'
            return;
        }
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        nav.classList.add('nav-fixed');
        console.log(nav)
    } else {
        if (hamburgerOpen.classList.contains('hamburger-open-active')) return;
        nav.classList.remove('nav-fixed');
    }
    if (windowWithNow > 600) {

        const currentSection = getCurrentSection(sections);
        const currentLink = nav.querySelector(`a[href="#${currentSection.id}"]`);
        setActiveLink(currentLink);
    }
    // } else {
    //     nav.classList.remove('nav-fixed')
    // }
});

function getCurrentSection(sections) {
    let currentSection = sections[0];
    let minDistance = Infinity;
    for (const section of sections) {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
        }
    }
    return currentSection;
}

function setActiveLink(link) {
    if (windowWithNow > 600) {
        for (const li of nav.querySelectorAll('li')) {
            const h1 = document.querySelector('h1')
            h1.classList.remove('active')

            li.classList.remove('active');
            // console.log(li)
            link?.parentElement?.classList?.add('active');
        }
    }

}




const onClickHamburger = () => {
    const hamburger = document.querySelector('.hamburger')
    // const hamburgerOpen = document.querySelector('.hamburger-open')
    hamburger.addEventListener('click', () => {
        if (hamburgerOpen.classList.contains('hamburger-open-active')) {
            hamburger.classList.remove('hamburger-animation')
            hamburgerOpen.classList.remove('hamburger-open-active')
            // hamburgerOpen.querySelector('ul').style.display = 'none'
            hamburgerOpen.querySelector('ul').classList.add('none')
            nav.classList.remove('nav-fixed')
            nav.style.height = 'auto'
            // nav.style.opacity = '0.7'
            return;
        }
        hamburger.classList.add('hamburger-animation')
        hamburgerOpen.classList.add('hamburger-open-active')
        hamburgerOpen.querySelector('ul').classList.remove('none')
        nav.classList.add('nav-fixed')
        nav.style.height = '100%'
        nav.style.opacity = '1'
        // hamburgerOpen.querySelector('ul').style.display ='block'
    })


}
onClickHamburger()


btnContact.forEach((btn) => {
    btn.addEventListener('click', () => {
        // const contact = document.querySelector('.contact-wrapper')
        console.log(contact)
        if (contact.classList.contains('none')) {
            contact.classList.remove('none')
        } else {
            contact.classList.add('none')
        }
    })
})

btnContactCancel.addEventListener('click', () => {
    contact.classList.add('none')
    nav.style.height = '100%'
    nav.style.opacity = '1'
})

btnContactSend.addEventListener('click', () => {
    console.log('успешно отправлено!')
    contact.classList.add('none')
    contactSuccess.classList.remove('none')
    setTimeout(() => {
        contactSuccess.classList.add('none')
    }, 3000)
})






// btnContact.addEventListener('click', () => {
//     const contact = document.querySelector('contact-wrapper')
//     if(contact.classList.contains('none')) {
//         contact.classList.remove('none')
//     } else {
//         contact.classList.add('none')
//     }
// })