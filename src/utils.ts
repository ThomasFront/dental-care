export const linkItems = ['Home', 'O nas', 'Usługi', 'Opinie', 'Kontakt']

export const doctors = [
  {
    id: 1,
    name: 'Jan Nowicki',
    image: 'https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_960_720.jpg',
    alt: 'Fotografia przedstawiająca doktora Jan Nowicki'
  },
  {
    id: 2,
    name: 'Joshua Pawłowski',
    image: 'https://burst.shopifycdn.com/photos/male-dentist.jpg?width=1200&format=pjpg&exif=1&iptc=1',
    alt: 'Fotografia przedstawiająca doktora Joshua Pawłowski'
  },
  {
    id: 3,
    name: 'Mariusz Wilski',
    image: 'https://img.freepik.com/free-photo/close-up-portrait-beautiful-young-lady-sitting-dental-chair-while-stomatologist-hands-sterile-gloves-holding-tooth-samples_158595-7636.jpg?w=2000',
    alt: 'Fotografia przedstawiająca doktora Mariusza Wilski'
  },
  {
    id: 4,
    name: 'Paweł Wojciechowski',
    image: 'https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?w=2000',
    alt: 'Fotografia przedstawiająca doktora Paweł Wojciechowski'
  },
  {
    id: 5,
    name: 'Dariusz Woźniak',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/male-doctor_KN1OCKC4Y2.jpg',
    alt: 'Fotografia przedstawiająca doktora Dariusz Woźniak'
  },
  {
    id: 6,
    name: 'Maciej Węgrzyn',
    image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?w=2000',
    alt: 'Fotografia przedstawiająca doktora Maciej Węgrzyn'
  },
  
]

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};