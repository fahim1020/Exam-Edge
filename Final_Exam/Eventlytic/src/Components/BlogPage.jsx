import { useLocation } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

export const BlogPage = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative mt-[5rem]">
      {/* <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${post.image})`,
        }}
        title={post.title}
      ></div> */}
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              {post.title}
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                {post.author || "Istiak Rahman"}
              </span>
              In
              <a
                href="/"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {post.category || "Eventlytic"}
              </a>
            </p>
            <p className="text-base leading-8 my-5">{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
