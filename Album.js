const reviews = [
    {
        id: 1,
        name: "Muhammad Sani Ma'aji",
        job: "Civil Engineer",
        img: "Ma'aji.jpg",
        igLink: "",
        whLink: "",
        text:
            `"To lead the world engineering federation."`,

    }, 
    {
        id: 2,
        name: "Magaji Abulkasim Al'amin",
        job: "Surgeon",
        img: "abulkasim.jpg",
        igLink: "",
        whLink: "",
        text:
            `"In the end is not the years in your life that counts, it's the life your years."`,

    }, 

    {
        id: 3,
        name: "Ibrahim Abubakar Ibrahim",
        job: "Software Engineer",
        img: "ibro1.jpg",
        igLink: "",
        whLink: "",
        text:
            `"Impossible is just an opinion, sky is your limit."`,

    },

    {
        id: 3,
        name: "Sadiq Ahmad",
        job: "Software Engineering",
        img: "me3.jpg",
        igLink: "",
        whLink: "https//wa.me/+2348132694876",
        text:
            `"Get involved and make the difference. Have dreams to chase not people to impress"`,

    }, 
    {
        id: 4,
        name: "Yunus Yazid",
        job: "Electrical Engineering",
        img: "zeedy.jpg",
        igLink: "",
        whLink: "",
        text:
            `"Money must be made because it stop nonsense."`,

    }, 

   
    {
        id: 5,
        name: "Hafsat Sani Umar",
        job: "Medical Doctor",
        img: "Hafsat.jpg",
        igLink: "",
        whLink: "",
        text:
            `"I want to become a gynecologist so as to help women in the diseases relating to my profession."`,

    },

    {
        id: 6,
        name: "Rabi'a Umar Imam",
        job: "Barrister",
        img: "huda.jpg",
        igLink: "",
        whLink: "",
        text:
            `"The journey of a thousand miles begins with a single step."`,

    },

    {
        id: 7,
        name: "Rukayyah Nuhu Salisu",
        job: "Pharmacy",
        img: "rukky.jpg",
        igLink: "",
        whLink: "",
        text:
            `"Make my parents proud and to be the wife of a responsible person."`,

    },

    
    {
        id: 8,
        name: "Iman Adam",
        job: "law",
        img: "eeman.jpg",
        igLink: "",
        whLink: "",
        text:
            `"My goals in life are ultimately to achieve success in life."`,

    },

    {
        id: 9,
        name: "Fadeematu Bashir",
        job: "Med Lab",
        img: "fadimatu.jpg",
        igLink: "",
        whLink: "",
        text:
            `"To make my parents proud. Marry a responsible husband."`,

    },

    {
        id: 10,
        name: "Salmerh Abdulwahab",
        job: "Information Technology",
        img: "Ummusalma.jpg",
        igLink: "",
        whLink: "",
        text:
            `"Married to a responsible man, making my parents proud."`,

    },

    {
        id: 11,
        name: "Zainab Mu'awiyya",
        job: "Pharmacist or Nurse",
        img: "Mu'awuyya.jpg",
        igLink: "",
        whLink: "",
        text:
            `"I wanna be a source of inspiration and hope for the female folks, i want to make a name for myself in this world and i want to be known for the goods i did even after i die."`,

    },

    {
        id: 12,
        name: "Muhammad Zayyad",
        job: "Lawyer",
        img: "babbah.jpg",
        igLink: "",
        whLink: "",
        text:
            `"I want to."`,

    }
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const review = document.getElementById('review');
const whLink = document.getElementById('whatsapp');
const igLink = document.getElementById('instagram');


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    alert('We were once classmates!.\nThe purpose of creating this photo album website is not just for fun or to impress you guyz, but to keep our frienship alive till eternity. Regarding to this, some of our social media handle links are provided to enable easy-to-contact your friends, in case you lose their contact in the future. Does that sounds good to you? \nIf yes send your feedback to the UNIQUE SQUAD group and also rate the work in a scale of 1 - 100% \nAllah ya bar zumunci...(love you guyz) \nYours Sincerely \n@Sadiq Ahmad')
    alert('Mind you !!! \nYour privacy is my source of integrity. Nobody outside the UNIQUE SQUAD will have access to your information, unless you share the link. ')
    ShowPerson();
});

function ShowPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    whLink.href = item.whLink;
    igLink.href = item.igLink;
    
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    ShowPerson();
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
     } //else if (currentItem == ShowPerson()) {
    //     currentItem --;
    // }
    ShowPerson(); 
})

whLink.addEventListener('click', function(){
    if (whLink.getAttribute('href') === "") {
        alert('Whatsapp link is not added yet. If you want you can talk to me so that i can add it.');
    }
})

igLink.addEventListener('click', function(){
    if (igLink.getAttribute('href') === "") {
        alert('Instagram link is not added yet. If you want you can talk to me so that i can add it.');
    }
})

let typed = new Typed('.type-write',{
    strings: ['2023 Set Photo Album'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// function getRandomNumber(){
//     return Math.floor(Math.random() * reviews.length);
// }
// randomBtn.addEventListener('click', function(){
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);
//     currentItem = reviews[randomNumber];
//     const item = reviews[randomNumber];
//     img.src = item.img
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
    
// });


//get a random btw 0 - 3
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber)
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
//     color.style.color = colors[randomNumber];
