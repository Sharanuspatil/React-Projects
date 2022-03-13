import { useState } from "react";
var data = {
  data: [
    {
      question: "What is the name of this animal?",
      image: "https://cdn.britannica.com/72/272-004-381F66E5.jpg",
      choices: ["Elephant", "Lion", "Leopard", "Crocodile"],
      answer: "Elephant",
    },
    {
      question: "What is the name of this pet animal?",
      image:
        "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
      choices: ["Dog", "Cat", "Fish", "Lion"],
      answer: "Dog",
    },
    {
      question: "What is the name of this Bird?",
      image:
        "https://farmhouseguide.com/wp-content/uploads/2020/11/Peacock-1024x597.jpg.webp",
      choices: ["Pigeon", "Owl", "Peacock", "Parrot"],
      answer: "Peacock",
    },
    {
      question: "What is the name of this animal?",
      image:
        "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
      choices: ["Lion", "Leopard", "Bats", "Penguin"],
      answer: "Lion",
    },
    {
      question: "What is the name of this pet animal?",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
      choices: ["Cat", "Fish", "Dog", "Shark"],
      answer: "Cat",
    },
    {
      question: "What is the name of this Bird?",
      image:
        "https://www.allaboutbirds.org/guide/assets/photo/308074031-480px.jpg",
      choices: ["Pigeon", "Woodpecker", "Parrot", "Eagle"],
      answer: "Pigeon",
    },
    {
      question: "What is the name of this Bird?",
      image:
        "https://www.treehugger.com/thmb/ofSXAgeKqEemWQszWmCXEa30d8g=/3179x2384/smart/filters:no_upscale()/bald-eagle-flying-117146366-f0a7d09f96ac460eb86e241c40b8c54c.jpg",
      choices: ["Bats", "Eagle", "Shark", "Flamingo"],
      answer: "Eagle",
    },
    {
      question: "What is the name of this Fish?",
      image:
        "https://economictimes.indiatimes.com/thumb/msid-75018098,width-1200,height-900,resizemode-4,imgsize-75282/shark-getty.jpg?from=mdr",
      choices: ["Shark", "Dolphin", "megalodon", "Goldfish  "],
      answer: "Shark",
    },
    {
      question: "What is the name of this animal?",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/23/2014/11/GettyImages-123529247-2a29d6c.jpg?quality=90&resize=620%2C413",
      choices: ["Turtle", "Alligator", "Crocodile", "Cheetah"],
      answer: "Crocodile",
    },
    {
      question: "What is the name of this Bird?",
      image:
        "https://optimise2.assets-servd.host/steadfast-tern/production/how-fast-can-an-ostrich-run.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1633531654&s=d7eec608b313844e136669d1dcc111f7",
      choices: ["Peacock", "Eagle", "Ostrich", "Pigeon"],
      answer: "Ostrich",
    },
    {
      question: "What is the name of this animal?",
      image:
        "https://www.thehindu.com/sci-tech/energy-and-environment/hynrrj/article38142454.ece/alternates/LANDSCAPE_615/15SMasiatic3jpg",
      choices: ["Cheetah", "Zebra", "Leopard", "Lion"],
      answer: "Cheetah",
    },
    {
      question: "What is the name of this animal?",
      image:
        "https://images.newscientist.com/wp-content/uploads/2021/10/27162905/PRI_207080436.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
      choices: ["Penguin", "Ostrich", "Kangaroo", "Panda"],
      answer: "Panda",
    },
    {
      question: "What is the name of this animal?",
      image:
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00004766_jtflgh.jpg",
      choices: ["Hen", "BUffalo", "Cow", "Eagle"],
      answer: "Cow",
    },
    {
      question: "What is the name of this bird?",
      image:
        "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256186201/1800",
      choices: ["Crow", "Owl", "Eagle", "Pigeon"],
      answer: "Crow",
    },
    {
      question: "What is the name of this Fish?",
      image:
        "https://www.tfhmagazine.com/-/media/Images/TFH2-NA/US/articles/227_goldfish_myths_debunked.jpg",
      choices: ["Goldfish", "Swordfish", "Stonefish", "Starfish"],
      answer: "Goldfish",
    },
  ],
};
export function Questions() {
  const [newarray, setnewarray] = useState([]);
  console.log(newarray);
  setnewarray(newarray);
}

let newarray = [];
for (let i = 0; i < 5; i++) {
  if (newarray !== data.data) {
    var random = data.data[Math.floor(Math.random() * data.data.length)];
    newarray.push(random);
  }
}

export default newarray;
