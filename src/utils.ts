export const linkItems = ['Home', 'O nas', 'Usługi', 'Informacje', 'Kontakt']

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
 
export const services = [
  {
    id: 1,
    title: 'Piaskowanie zębów',
    image: '/assets/dental-veneer.png',
    desc: 'Jest to zabieg pozwalający usunąć przebarwienia koron zębów pochodzenia zewnętrznego (palenie tytoniu, kawa, herbata, czerwone wino, niektóre napoje).',
  },
  {
    id: 2,
    title: 'Stomatologia zachowawcza',
    image: '/assets/dental-filling.png',
    desc: 'Dotyka ona przeszło 90% ludzi na świecie. Próchnica występuje w miejscach predysponowanych – w bruzdach, na powierzchniach stycznych, w okolicy szyjek zębowych, rzadziej na powierzchniach gładkich.',
  },
  {
    id: 3,
    title: 'Endodoncja',
    image: '/assets/dental-care.png',
    desc: 'Polega na dokładnym usunięciu zainfekowanej lub nieodwracalnie zmienionej zapalnie miazgi, a następnie szczelnym wypełnieniu oczyszczonych kanałów odpowiednim materiałem.',
  },
  {
    id: 4,
    title: 'Chirurgia stomatologiczna',
    image: '/assets/examination.png',
    desc: 'Idealną sytuacją jest  utrzymanie swojego naturalnego uzębienia do końca życia. Czasami jednak konieczne są zabiegi chirurgiczne, najczęściej jest to usuwanie chorych zębów czy nacinanie ropni.',
  },
  {
    id: 5,
    title: 'Implanty zębowe',
    image: '/assets/dental-implant.png',
    desc: 'Implant stomatologiczny czyli wszczep, to sztuczny korzeń wstawiony w miejsce usuwanego lub dawno usuniętego zęba osadzony w kości szczęki lub żuchwy stanowi filar dla odbudowy protetycznej',
  },
  {
    id: 6,
    title: 'Wybielanie zębów',
    image: '/assets/clean-tooth.png',
    desc: 'Wybielanie zębów to zabieg stomatologii estetycznej, polegający na poprawieniu wyglądu przebarwionych zębów, za pomocą środków chemicznych.',
  },
]

export const achievements = [
  {
    id: 1,
    title: 'Specjalistów',
    amount: 6,
    image: '/assets/dentist.png'
  },
  {
    id: 2,
    title: 'Zadowolonych klientów',
    amount: 1472,
    image: '/assets/client.png'
  },
  {
    id: 3,
    title: 'Nagród',
    amount: 71,
    image: '/assets/trophy.png'
  },
  {
    id: 4,
    title: 'Gabinetów',
    amount: 6,
    image: '/assets/dentist-chair.png'
  }
]

export const questions = [
  {
    id: 1,
    question: 'Jaki jest koszt pierwszej wizyty?',
    answer: 'Pierwsza wizyta na której zostanie zrobiony kompletny przegląd stomatologiczny jest całkowicie darmowa.',
  },
  {
    id: 2,
    question: 'Jaki jest czas oczekiwania na wizytę?',
    answer: 'Czas oczekiwania na wizytę do specjalisty mieści się w zakresie do siedmiu dni roboczych.',
  },
  {
    id: 3,
    question: 'Czy gabinet przyjmuje również osoby niepełnoletnie?',
    answer: 'Tak, przyjmujemy zarówno osoby pełnoletnie jak i osoby niepełnoletnie.',
  },
  {
    id: 4,
    question: 'Czy można umawiać się na wizyty poprzez internet?',
    answer: 'Na ten moment taka możliwość nie jest dostępna lecz pracujemy nad jej wdrożeniem.',
  },
  {
    id: 5,
    question: 'Czy istnieje możliwość płatności kartą?',
    answer: 'Tak, w naszym gabinecie istnieje możliwość płatności zarówno kartą jak i gotówką.',
  },
]