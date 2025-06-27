import React, { useState } from 'react';
import ReviewsList from '../components/ReviewsList';
import users from '../data/usersData';
import reviews from '../data/reviewsData';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';



const ReviewModeration = () => {
  const merged = reviews.map(r => {
    const user = users.find(u => u.id === r.userId);
    return { ...r, ...user };
  });
  const [searchInput, setSearchInput] = useState("");

  return (
   <> 
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <PageBanner
          title="Review Moderation"
          subtitle="Manage and Moderate user Reviews"
        />
   
   <div className="min-h-screen bg-gray-50">
      <ReviewsList reviews={merged} />
    </div></>
  );
};

export default ReviewModeration;
