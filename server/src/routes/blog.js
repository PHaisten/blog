import { Router } from "express";
import { getBlogs } from "../db";
import { getBlog } from "../db";
import { postBlog } from "../db";
import { deleteBlog } from "../db";
import { updateBlog } from "../db";

let router = Router();

router.get("/", (req, res) => {
  console.log("GetBlogs");
  getBlogs().then(results => {
    res.send(results[0]);
  });
});

router.get("/:id", (req, res) => {
  console.log("Getting Blog");
  let id = req.params.id;
  getBlog(id).then(results => {
    res.send(results);
  });
});

router.post("/", (req, res) => {
  console.log("posting in server");
  let blog = req.body;
  console.log("blog body", blog);
  postBlog(blog).then(results => {
    res.send(results);
  });
});

router.delete("/:id", (req, res) => {
  console.log("Blog Deleting!");
  let id = req.params.id;
  deleteBlog(id).then(results => {
    res.send(results);
  });
  console.log("Deleted Blog!");
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let content = req.body.content;
  console.log(req.body);
  updateBlog(id, title, content).then(results => {
    res.send(results);
  });
  console.log("Updated Blog!");
});

export default router;
