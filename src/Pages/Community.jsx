import React from "react";

const posts = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Aced my class today!",
    description: "Had a test yesterday and I aced it! I am so happy!",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/4778341/pexels-photo-4778341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A really interesting book!",
    description: "I would suggest everyone to read this book!",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "My friend is not a good teacher!",
    description:
      "Do tell me if your friend is a good teacher! #NotAGoodTeacherButAGoodFriend",
  },
];

const Community = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Community</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white shadow rounded hover:shadow-xl duration-150"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-thumbs-up"></i>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-comment"></i>
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-700">
                <i className="fas fa-share"></i>
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
