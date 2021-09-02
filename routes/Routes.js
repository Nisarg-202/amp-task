const express = require("express");

const router = express.Router();

const {
  getPost,
  getAllPostPage,
  updatePost,
  deletePost,
  addPost,
  addPostPage,
  updatePostPage,
  getSearch,
} = require("../controllers/Controller");

router.get("/", getAllPostPage);

router.post("/", getPost);

router.post("/search", getSearch);

router.get("/add", addPostPage);

router.post("/add", addPost);

router.get("/update/:postId", updatePostPage);

router.post("/update/:postId", updatePost);

router.post("/delete/:postId", deletePost);

module.exports = router;
