import React, { useState } from "react";
import { Button } from "./ReviewfileButton";
import { Star } from "lucide-react";

const StatusBadge = ({ status }) => {
  const base = "px-6 py-1 text-xs font-medium rounded";
  const styles =
    status === "Pending"
      ? "bg-orange-100 text-orange-600 border border-orange-500 rounded-full"
      : status === "Approved"
      ? "bg-green-700 text-white rounded-full"
      : "bg-red-600 text-white rounded-full";
  return <span className={`${base} ${styles}`}>{status}</span>;
};

const ReviewsList = ({ reviews = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [localReviews, setLocalReviews] = useState(reviews);

  const handleApprove = (id) => {
    setLocalReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );
  };

  const handleReject = (id) => {
    setLocalReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Rejected" } : r))
    );
  };

  const filteredReviews = localReviews.filter((review) => {
    const matchesStatus =
      statusFilter === "All Status" || review.status === statusFilter;
    const matchesSearch =
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.review.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">All Reviews</h2>

      <div className="flex flex-col md:flex-row md:items-center gap-2 md:justify-between">
        <div className="flex gap-2">
          <select
            className="border rounded px-2 py-1 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search Review..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-2 py-1 text-sm w-full md:w-64"
        />
      </div>

      {filteredReviews.map((review) => (
        <div
          key={review.id}
          className="border rounded p-4 space-y-2 shadow-sm bg-white"
        >
          <div className="flex items-center gap-3">
            <img
              src={review.avatar || "https://via.placeholder.com/30"}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
            <div>
              <div className="font-medium">{review.name}</div>
              <div className="text-gray-500 text-xs">{review.email}</div>
            </div>
            <div className="ml-auto flex items-center gap-1 text-orange-500 font-medium">
              <Star className="h-4 w-4 fill-orange-500" />
              {review.rating}
            </div>
          </div>

          <p className="text-sm text-gray-700">{review.review}</p>

          <div className="flex items-center   flex-wrap gap-2">
  <StatusBadge  status={review.status} />
  
  {review.status === "Pending" && (
    <div className="ml-auto flex gap-2">
      <Button
        className="bg-orange-400 text-white hover:bg-green-600"
        onClick={() => handleApprove(review.id)}
      >
        Approve
      </Button>
      <Button
        className="bg-white-100 border border-red-700 text-red-700 hover:bg-red-600"
        onClick={() => handleReject(review.id)}
      >
        Reject
      </Button>
    </div>
  )}
</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
