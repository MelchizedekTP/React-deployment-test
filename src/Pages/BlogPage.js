import React, { useEffect, useState } from "react";
import Blog from "../Elements/Blog/Blog";
import getList from "../API/getList";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => setBlogs(await getList("Blogs")))();
  }, []);
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog {...blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogPage;
