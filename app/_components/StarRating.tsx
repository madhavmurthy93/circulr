interface Props {
  maxRating?: number;
  rating: number;
  numRatings: number;
}

function StarRating({ maxRating = 5, rating, numRatings }: Props) {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <Star key={index} color={index < rating ? "text-yellow-500" : "text-gray-300"} />
      ))}
      <span className="text-sm ml-1">({numRatings})</span>
    </div>
  );
}

function Star({ color }: { color: string }) {
  return (
    <svg className={`${color} w-4 h-4`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.265 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default StarRating;
