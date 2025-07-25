import { BookCard1 } from "@/types/BookCardTypes";
import img1 from "/images/destination/img1.png";
import img2 from "/images/destination/img2.png";
import img3 from "/images/destination/im3.png"; 
import img4 from "/images/destination/im5.png";

import oneg from "/images/destination/oneg.png";
import oneg1 from "/images/destination/oneg1.png";
import oneg2 from "/images/destination/oneg2.png";
import oneg3 from "/images/destination/oneg3.png";
import twog from "/images/destination/twog.png";
import twog1 from "/images/destination/twog1.png";
import twog2 from "/images/destination/twog2.png";
import twog3 from "/images/destination/twog3.png";
import { placesData } from '@/constants/placesData';


export const Imagephases: BookCard1[] = [
  {
    Id: "1",
    image: img1,
    title: "Kithulgala",
    description:
      "White water rafting in Sri Lanka is an exhilarating adventure, perfect for thrill-seekers. ",
    value: "300",
    number1: "4.9",
    number2: "122",
    content: "Nestled amidst lush rainforests and winding rivers, Kitulgala is a haven for adventure and serenity. Renowned as the white-water rafting capital of Sri Lanka, it offers thrilling rapids for adrenaline seekers. Beyond the rapids, explore scenic hiking trails, natural rock pools, and waterfalls. The area is also famous for being the filming location of the iconic movie The Bridge on the River Kwai. Whether you're kayaking, birdwatching, or simply soaking in the tranquil surroundings, Kitulgala promises an unforgettable escape into nature.",
      firstimage: oneg,
      img1: oneg1, 
      img2: oneg2,
      img3: oneg3,
      img4: oneg2,
      img5: oneg3,
      topic: placesData.filter((place) => place.Id === "1").map((p) => p.topic).flat(),
      des: placesData.filter((place) => place.Id === "1").map((p) => p.des).flat(),
      facilityList: [
        "Guided safari jeeps",
        "Comfortable seating arrangements",
        "Experienced naturalists and trackers",
        "Refreshment stops within the park",
        "Clean restrooms near entry points"
      ],
      policyList: [
        "Entry fees are non-refundable.",
        "Follow the rules to ensure wildlife safety.",
        "Avoid feeding or disturbing animals.",
        "No littering; use designated bins.",
        "Safari timings are subject to park regulations."
      ],
      importantList: [
        "Best time for an evening safari: 3:00 PM – 6:30 PM",
        "Advance booking is recommended.",
        "Wear comfortable clothing and bring water, and a hat.",
        "Cameras are allowed (don’t forget extra batteries!).",
        "Advance booking is recommended"
      ],
      inclusionList: ["Meals and Transport", "Hotel Accomodation"],
      exclusionList: ["Visa Fees"]

    },

  {
    Id: "2",
    image: img2,
    title: "Udawalawa",
    description:
      "Ride through rugged trails in open-roof jeeps, spotting majestic elephants, elusive leopards, colorful birds",
    value: "450",
    number1: "4.9",
    number2: "122",
    content: "Nestled amidst lush rainforests and winding rivers, Udawalawa is a haven for adventure and serenity. Renowned as the white-water rafting capital of Sri Lanka, it offers thrilling rapids for adrenaline seekers. Beyond the rapids, explore scenic hiking trails, natural rock pools, and waterfalls. The area is also famous for being the filming location of the iconic movie The Bridge on the River Kwai. Whether you're kayaking, birdwatching, or simply soaking in the tranquil surroundings, Udawalawa promises an unforgettable escape into nature.",
      firstimage: img2,
      img1: oneg1, 
      img2: oneg2,
      img3: oneg3,
      img4: oneg2,
      img5: oneg3,
      facilityList: [
        "Guided safari jeeps",
        "Comfortable seating arrangements",
        "Experienced naturalists and trackers",
        "Refreshment stops within the park",
        "Clean restrooms near entry points"
      ],
      policyList: [
        "Entry fees are non-refundable.",
        "Follow the rules to ensure wildlife safety.",
        "Avoid feeding or disturbing animals.",
        "No littering; use designated bins.",
        "Safari timings are subject to park regulations."
      ],
      importantList: [
        "Best time for an evening safari: 3:00 PM – 6:30 PM",
        "Advance booking is recommended.",
        "Wear comfortable clothing and bring water, and a hat.",
        "Cameras are allowed (don’t forget extra batteries!).",
        "Advance booking is recommended"
      ],
      inclusionList: ["Meals and Transport", "Hotel Accomodation"],
      exclusionList: ["Visa Fees"]
     
      
  },
  {
    Id: "3",
    image: img3,
    title: "Mirissa",
    description:
      "Embark on an unforgettable journey to witness the giants of the ocean in Sri Lanka",
    value: "700",
    number1: "4.9",
    number2: "122",
    content:
      "Mirissa, located along Sri Lanka’s southern coast, is a tropical haven known for its pristine beaches, turquoise waters, and vibrant marine life. Famous for whale watching and surfing, this idyllic town offers a perfect mix of adventure and relaxation. Visitors can explore hidden gems like Secret Beach, take in stunning sunsets at Coconut Tree Hill, or enjoy the lively atmosphere of beachfront bars and restaurants. Whether you’re seeking thrilling water sports or a tranquil escape, Mirissa promises an unforgettable coastal experience.",
    firstimage: twog,
    img1: twog1,
    img2: twog2,
    img3: twog3,
    img4: twog1,
    img5: twog2,
  },
  {
    Id: "4",
    image: img1,
    title: "Kithulgala",
    description:
      "White water rafting in Sri Lanka is an exhilarating adventure, perfect for thrill-seekers. ",
    value: "250",
    number1: "4.9",
    number2: "122",
    content: "Nestled amidst lush rainforests and winding rivers, Kitulgala is a haven for adventure and serenity. Renowned as the white-water rafting capital of Sri Lanka, it offers thrilling rapids for adrenaline seekers. Beyond the rapids, explore scenic hiking trails, natural rock pools, and waterfalls. The area is also famous for being the filming location of the iconic movie The Bridge on the River Kwai. Whether you're kayaking, birdwatching, or simply soaking in the tranquil surroundings, Kitulgala promises an unforgettable escape into nature.",
      firstimage: oneg,
      img1: oneg1, 
      img2: oneg2,
      img3: oneg3,
      img4: oneg2,
      img5: oneg3,

      facilityList: [
        "Guided safari jeeps",
        "Comfortable seating arrangements",
        "Experienced naturalists and trackers",
        "Refreshment stops within the park",
        "Clean restrooms near entry points"
      ],
      policyList: [
        "Entry fees are non-refundable.",
        "Follow the rules to ensure wildlife safety.",
        "Avoid feeding or disturbing animals.",
        "No littering; use designated bins.",
        "Safari timings are subject to park regulations."
      ],
      importantList: [
        "Best time for an evening safari: 3:00 PM – 6:30 PM",
        "Advance booking is recommended.",
        "Wear comfortable clothing and bring water, and a hat.",
        "Cameras are allowed (don’t forget extra batteries!).",
        "Advance booking is recommended"
      ],
      inclusionList: ["Meals and Transport", "Hotel Accomodation"],
      exclusionList: ["Visa Fees"]
  },
  {
    Id: "5",
    image: img4,
    title: "Ella",
    description:
      "Flying Ravana in Ella is Sri Lanka’s first-ever mega zipline adventure",
    value: "450",
    number1: "4.9",
    number2: "122",
    content:
    "Ella is a hill station paradise in Sri Lanka, known for its stunning scenery, hiking trails, and tea plantations. Highlights include the Nine Arches Bridge, Little Adam's Peak, and Ella Rock. It's a haven for nature lovers and adventure seekers.",
  firstimage: oneg,
  img1: oneg1,
  img2: oneg2,
  img3: oneg3,
  img4: oneg2,
  img5: oneg3,

  facilityList: [
    "Guided safari jeeps",
    "Comfortable seating arrangements",
    "Experienced naturalists and trackers",
    "Refreshment stops within the park",
    "Clean restrooms near entry points"
  ],
  policyList: [
    "Entry fees are non-refundable.",
    "Follow the rules to ensure wildlife safety.",
    "Avoid feeding or disturbing animals.",
    "No littering; use designated bins.",
    "Safari timings are subject to park regulations."
  ],
  importantList: [
    "Best time for an evening safari: 3:00 PM – 6:30 PM",
    "Advance booking is recommended.",
    "Wear comfortable clothing and bring water, and a hat.",
    "Cameras are allowed (don’t forget extra batteries!).",
    "Advance booking is recommended"
  ],
  inclusionList: ["Meals and Transport", "Hotel Accomodation"],
  exclusionList: ["Visa Fees"]
  }
 
];
