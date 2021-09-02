const Post = require("../models/Post");

exports.getAllPostPage = async function (req, res) {
  res.render("allPost", {
    title: "All Post",
  });
};

exports.getPost = async function (req, res) {
  const posts = await Post.find().skip(req.body.size).limit(5);
  res.send({ posts });
};

exports.addPostPage = function (req, res) {
  res.render("addPost", {
    title: "Add Post",
  });
};

exports.addPost = async function (req, res) {
  const { title, content } = req.body;
  const post = new Post({ title, content, date: new Date().toISOString() });
  await post.save();
  res.redirect("/");
};

exports.deletePost = async function (req, res) {
  const { postId } = req.params;

  await Post.findByIdAndDelete(postId);
  res.redirect("/");
};

exports.updatePost = async function (req, res) {
  const { postId } = req.params;
  const { title, content } = req.body;

  await Post.findByIdAndUpdate(postId, {
    title,
    content,
    date: new Date().toISOString(),
  });

  res.redirect("/");
};

exports.updatePostPage = async function (req, res) {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  res.render("updatePost", { post, title: "Update Post" });
};

exports.getSearch = async function (req, res) {
  const posts = await Post.find({
    title: { $regex: req.body.value, $options: "i" },
  });
  res.send({ posts });
};
