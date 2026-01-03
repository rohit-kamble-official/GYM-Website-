// constants.js

export const CLUB_DETAILS = {
  name: "Maharudraya Fitness Club",
  location: "Pune, Maharashtra, India",
  address: "Shop No. 4, Maharudra Plaza, Pune-Bangalore Highway, Pune - 411046",
  phone: "+91 98765 43210",
  email: "contact@maharudrayafitness.com",
  whatsapp: "+919876543210",
  workingHours: "5:00 AM - 10:00 PM (Mon-Sat)",
};

export const MEMBERSHIP_PLANS = [
  {
    id: "basic",
    name: "BASIC",
    price: 1500,
    duration: "1 Month",
    features: ["Full Gym Access", "Cardio Training", "Strength Equipment", "Locker Room Access"],
  },
  {
    id: "pro",
    name: "PRO",
    price: 3999,
    duration: "3 Months",
    features: ["Personal Trainer Support", "Custom Diet Guidance", "All Gym Access", "24/7 Support"],
    popular: true,
  },
  {
    id: "elite",
    name: "ELITE",
    price: 7999,
    duration: "6 Months",
    features: ["Personal Training (10 Sessions)", "Advanced Nutrition Plan", "Priority Support", "Body Assessment Reports"],
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Weight Loss",
    description: "Personalized cardio and HIIT sessions designed to burn fat and boost metabolism.",
    icon: "Flame",
  },
  {
    id: 2,
    title: "Muscle Building",
    description: "Hypertrophy-focused training programs with heavy-duty equipment.",
    icon: "Dumbbell",
  },
  {
    id: 3,
    title: "Yoga & Flex",
    description: "Restore your mind and body with our specialized mobility and yoga classes.",
    icon: "Activity",
  },
  {
    id: 4,
    title: "Diet & Nutrition",
    description: "Certified nutritionists to guide your eating habits for maximum performance.",
    icon: "Utensils",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    role: "IT Professional",
    content: "The best gym in Pune! The trainers are highly knowledgeable and the equipment is world-class.",
    avatar: "https://picsum.photos/100/100?random=1",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Athlete",
    content: "Maharudraya changed my life. I lost 12kgs in 4 months with their Pro plan. Highly recommended!",
    avatar: "https://picsum.photos/100/100?random=2",
  },
  {
    id: 3,
    name: "Sanket Patil",
    role: "Student",
    content: "Energetic atmosphere and great music. It's the highlight of my day!",
    avatar: "https://picsum.photos/100/100?random=3",
  },
];
