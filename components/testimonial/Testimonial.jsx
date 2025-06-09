import { AnimatedTestimonials } from "../ui/animated-testimonials";

// import { AnimatedTestimonials } from "../ui/animated-testimonials";
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    src: "https://www.w3schools.com/w3images/avatar3.png",

    quote:
      "BryansAutos made buying my new car an absolute breeze! The team was incredibly knowledgeable, transparent, and helped me find the perfect vehicle without any pressure. Highly recommend their exceptional service!",
  },
  {
    id: 2,
    name: "David L.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    quote:
      "I've been a customer of BryansAutos for years for all my car servicing needs. Their mechanics are top-notch, always professional, and get the job done right the first time. Trustworthy and reliable!",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4,
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    quote:
      "Great experience at BryansAutos! Their selection of used cars was impressive, and I appreciated the honest appraisal of each vehicle. Got a fair deal on my trade-in too. Will definitely consider them again.",
  },
  {
    id: 4,
    name: "Mark J.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    quote:
      "From the moment I walked in, the staff at BryansAutos were welcoming and attentive. They went above and beyond to answer all my questions and ensure I was comfortable with my purchase. Fantastic customer service!",
  },
  {
    id: 5,
    name: "Chris P.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    quote:
      "Had an urgent repair needed, and BryansAutos squeezed me in right away. Their efficiency and expertise saved me a lot of hassle. My car is running perfectly now. A true lifesaver!",
  },
  {
    id: 6,
    name: " Jessica T.",
    rating: 4,
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "BryansAutos offers competitive pricing and a solid range of vehicles. While the negotiation took a little longer than expected, I'm very happy with the quality of the car I drove away with. Good value!",
  },
];
export function AnimatedTestimonial() {
 
  return <AnimatedTestimonials testimonials={testimonials} />;
}


// echo "# BryanAutos" >> README.md
