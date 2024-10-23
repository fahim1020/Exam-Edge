import React from "react";
import { BlogPostCard } from "./BlogPostCard";

const blogPosts = [
  {
    category: "EVENT TIPS",
    title: "Top Event Planning Tips",
    description:
      "Discover essential tips for planning a successful event, from budgeting to selecting the perfect venue.",
    image:
      "https://cdn.forumcomm.com/dims4/default/ea5ee78/2147483647/strip/true/crop/2604x1736+1278+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F09%2F7f%2Ffb7a8ebd42ac90a510385ac13d72%2Fupcomingeventsadobestock-265755125.jpg",
    views: "3.5K",
    comments: 12,
  },
  {
    category: "TRENDS",
    title: "Upcoming Event Trends in 2024",
    description:
      "Stay ahead of the curve with the latest event trends, including sustainable practices and immersive experiences.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eYANrHVG6x_AfYw1JjvqYTN2zzbIzH10Yw&s",
    views: "4.1K",
    comments: 8,
  },
  {
    category: "SUCCESS STORIES",
    title: "How We Planned the Perfect Corporate Gala",
    description:
      "Read about our recent success in organizing a corporate gala, including challenges we overcame and key takeaways.",
    image:
      "https://www.screamingbox.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp3kmwbpt%2Fproduction%2F0724a7a1bb75782147fadbc4617dba32958cebc3-1000x601.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1920&q=75",
    views: "5.2K",
    comments: 14,
  },
];

export const LatestBlogPosts = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center text-xl text-red-700 font-bold">BLOG</h1>
        <h1 className="text-center text-4xl font-bold mb-4 text-black">
          LATEST UPDATES
        </h1>
        <div className="grid grid-cols-3 -m-4">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
