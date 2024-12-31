// import all images from assets/images directory
import img01 from "../all-images/cars-img/thar-roxx.png";
import img02 from "../all-images/cars-img/Toyota fortuner.png";
// import img03 from "../all-images/cars-img/bmw x3.png";
import img03 from "../all-images/cars-img/bmw-x3.png"
import img04 from "../all-images/cars-img/Nissan magnite.png";
import img05 from "../all-images/cars-img/Honda_Civic.png";
import img06 from "../all-images/cars-img/mercedes_benz_a_class.png";
import img07 from "../all-images/cars-img/audi-a4-terra-gray-metallic.png";
import img08 from "../all-images/cars-img/jeep campass.png";
import img09 from "../all-images/cars-img/car1.jpg";

const carData = [
  {
    id: 1,
    brand: "Mahindra",
    rating: 112,
    carName: "Mahindra Thar ROXX",
    imgUrl: img01,
    model: "Diesel",
    price: 3000,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "ventilated seats",
    automatic: "Automatic",
    description: "The Mahindra thar ROXX is a lifestyle off road SUV.Thar is a 5-door, serious off-roader that drives reasonably well on the road. It stands out with its rugged stance, modern design, and durable construction. The powertrains are powerful, with the petrol option being superbly refined and entertaining for a Mahindra. ",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Fortuner",
    imgUrl: img02,
    model: "petrol",
    price: 4500,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "ventilated seats",
    automatic: "Automatic",
    description: "Fortuner boasts of a power-packed 6-speed Diesel. its also offered 4x4 ",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Diesel",
    price: 7000,
    speed: "16.55kmpl",
    gps: "GPS Navigation",
    seatType: "adjustable sport seats",
    automatic: "Automatic",
    description: "The exquisite feel of luxury finally meets the BMW X3 is ready to serve an experience that’s nothing like you’ve felt before",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Magnite",
    imgUrl: img04,
    model: "petrol",
    price: 1500,
    speed: "18.75kmpl",
    gps: "GPS Navigation",
    seatType: "leather seats",
    automatic: "Automatic",
    description: "The Nissan Magnite is a budget-friendly SUV offering both automatic and manual transmissions, with a fuel-efficient engine and a spacious interior for five",
  },

  {
    id: 5,
    brand: "Honda",
    rating: 94,
    carName: "Honda Civic",
    imgUrl: img05,
    model: "petrol",
    price: 3500,
    speed: "17kmpl",
    gps: "GPS Navigation",
    seatType: " ventilated seats",
    automatic: "Automatic",
    description: "The 2023 Civic has two powertrain options: a standard 2.0-liter four-cylinder engine with 158 horsepower, and an available 1.5-liter four-cylinder engine with 180 horsepower. ",
  },

  {
    id: 6, 
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz A-class",
    imgUrl: img06,
    model: "petrol",
    price: 7500,
    speed: "17kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "The Mercedes-Benz A-Class is a car that combines luxury and sportiness. It has a compact saloon design with short overhangs and a sporty appearance.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi A4",
    imgUrl: img07,
    model: "petrol",
    price: 8000,
    speed: "17kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: " The Audi A4 receives features such as a virtual cockpit with navigation, three-zone climate control, 10.1-inch infotainment system with MMI touch, and an Audi phonebox with wireless smartphone connectivity and charging.",
  },

  {
    id: 8,
    brand: "Jeep",
    rating: 52,
    carName: "Jeep Campass",
    imgUrl: img08,
    model: "diesel",
    price: 4300,
    speed: "13.5kmpl",
    gps: "GPS Navigation",
    seatType: "ventilated seats",
    automatic: "Automatic",
    description: " If you enjoy the thrill of accelerating the Compass 4x2 Automatic is engineered just for you.It offers comfortable, contemporary styling with premium interiors.In addition to these, a dual-pane panoramic sunroof and nine-speaker Uconnect audio system offer an experience that makes every ride a luxurious adventure. ",
  },

  {
    id: 9,
    brand: "Maruti",
    rating: 54,
    carName: "Maruti Dzire",
    imgUrl: img09,
    model: "diesel",
    price: 1300,
    speed: "25kmpl",
    gps: "GPS Navigation",
    seatType: "ventilated seats",
    automatic: "Automatic",
    description: " If you enjoy the thrill of accelerating the Compass 4x2 Automatic is engineered just for you.It offers comfortable, contemporary styling with premium interiors.In addition to these, a dual-pane panoramic sunroof and nine-speaker Uconnect audio system offer an experience that makes every ride a luxurious adventure. ",
  },
];

export default carData;