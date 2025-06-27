const reviews = [
    {
      id: 1,
      userId: 1,
      rating: 4.5,
      status: "Pending", // ✅ updated
      review:
        "I had an amazing experience with the chef's service! The meals were flavorful, freshly prepared, and beautifully presented. Communication was smooth throughout, and the chef was very accommodating to our dietary preferences. Everything arrived on time and was packed with care. This service made our dinner gathering so much easier and more enjoyable. Highly recommended!",
    },
    {
      id: 2,
      userId: 2,
      rating: 4.5,
      status: "Approved", // ✅
      review:
        "Everything was great! The meals were fresh and tasty. Highly recommend!",
    },
    {
      id: 3,
      userId: 3,
      rating: 2.5,
      status: "Rejected", // ✅
      review:
        "The meals were not as expected. Delivery was late and the food was cold.",
    },
  ];
  
  export default reviews;
  