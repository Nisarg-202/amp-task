const express = require("express");

const router = express.Router();

const {
  getAllPost,
  getAllPostPage,
  updatePost,
  deletePost,
  addPost,
  addPostPage,
  updatePostPage,
} = require("../controllers/Controller");

router.get("/", getAllPostPage);

router.post("/", getAllPost);

router.get("/add", addPostPage);

router.post("/add", addPost);

router.get("/update/:postId", updatePostPage);

router.post("/update/:postId", updatePost);

router.post("/delete/:postId", deletePost);

module.exports = router;
