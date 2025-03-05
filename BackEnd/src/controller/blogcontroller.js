const BLogModel = require("../Model/BLogModel");

exports.createPost = async (req, res) => {
  try {
    const { title, img, content, author } = req.body;
    if (!title || !img || !content || !author) {
      return res.status(400).json({ message: "Fill ALl details" });
    }
    const NewPost = await BLogModel.create({
      title,
      img,
      content,
      author,
    });
    await NewPost.save();

    return res.status(200).json({ message: "User Created", NewPost });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error", error });
  }
};
exports.GetAllPost = async (req, res) => {
  try {
    const allPost = await BLogModel.find();
    return res.status(200).json({ message: "all Post Fetched", allPost });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error", error });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await BLogModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "Post Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error", error });
  }
};
exports.UpdatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, content, author } = req.body;
    if (!title || !img || !content || !author) {
      return res.status(400).json({ message: "Fill ALl details" });
    }
    const EditPost = await BLogModel.findByIdAndUpdate(id, {
      title,
      img,
      content,
      author,
    }, { new: true });
    if (!EditPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post Edited", EditPost });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error", error });
  }
};
