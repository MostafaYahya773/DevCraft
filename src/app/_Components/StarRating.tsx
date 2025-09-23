import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { StarRatingProps } from '../interfaces/interfaces';
export default function StarRating({ rate }: StarRatingProps) {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-primary text-[15px] me-1" />
      ))}

      {halfStar === 1 && (
        <FaStarHalfAlt className="text-primary text-[15px] me-1" />
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          className="text-primary text-[15px] me-1"
        />
      ))}
    </div>
  );
}
