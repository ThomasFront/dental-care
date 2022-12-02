export const linkItems = [
  {
    value: 'Home',
    scrollTo: 'home',
  },
  {
    value: 'O nas',
    scrollTo: 'about',
  },
  {
    value: 'Usługi',
    scrollTo: 'services',
  },
  {
    value: 'Informacje',
    scrollTo: 'information',
  },
  {
    value: 'Kontakt',
    scrollTo: 'contact',
  },
]

export const doctors = [
  {
    id: '1',
    name: 'Małgorzata Kowalska',
  },
  {
    id: '2',
    name: 'Joshua Pawłowski',
  },
  {
    id: '3',
    name: 'Maria Wiśniewska',
  },
  {
    id: '4',
    name: 'Paweł Wojciechowski',
  },
  {
    id: '5',
    name: 'Dariusz Woźniak',
  },
  {
    id: '6',
    name: 'Patrycja Brzoza',
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
    amount: 7,
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
    answer: 'Tak, na wizyty w naszym gabinecie można umawiać się online poprzez opcję "umów wizytę" na górze strony.',
  },
  {
    id: 5,
    question: 'Czy istnieje możliwość płatności kartą?',
    answer: 'Tak, w naszym gabinecie istnieje możliwość płatności zarówno kartą jak i gotówką.',
  },
]

export const visitPageCategories = [
  {
    id: 1,
    value: 'Umów wizytę',
    selected: 'Appointment'
  },
  {
    id: 2,
    value: 'Umówione wizyty',
    selected: 'History'
  },
  {
    id: 3,
    value: 'Twoje konto',
    selected: 'Account'
  }
]

export const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
export const appointmentHours = hours.map(hour => ({
  label: `${hour}:00 - ${hour+1}:00`,
  value: hour.toString()
}))