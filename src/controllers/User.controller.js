import { UserModel } from "../models/UserModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    let user = await UserModel.findOne({ email: email });

    if (user) {
      return res
        .status(400)
        .send({ status: 400, message: "User already exists with this email" });
    }

    let newUser = await UserModel({ name, email, mobile, password });
   let data= await newUser.save();
    if(data){
      return res
      .status(201)
      .send({ status: 201, message: "User registered successfully" });
    }
   
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const getAllUser = async (req, res) => {
  console.log(11)
  try {
    let data = await UserModel.find({ delete_status: false });
    console.log(data.length<1)
    if (data.length<1) {
      return res.status(404).send({ status: 404, message: "Record  not found" });
    }else{
      return res
      .status(200)
      .send({ status: 200, message: "User fetch sucessfully", user: data });

    }

   
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  console.log(req.body, 11);
  const { name, email, mobile } = req.body;
  console.log(req.params.id);
  let id = req.params.id;
  if (!id) {
    return res.status(400).send({ status: 400, message: "Invalid id" });
  }
  try {
    let data = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          email,
          mobile,
        },
      }
    );
    if (data) {
      return res
        .status(200)
        .send({ status: 200, message: "User update successfully " });
    }
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(400).send({ status: 400, message: "Enter valid id" });
  }
  try {
    let result = await UserModel.findByIdAndUpdate(
      { _id: id },
      { delete_status: true }
    );
    if (result) {
      return res
        .status(200)
        .send({ status: 200, message: "User deleted successfully" });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: 500, message: "Internal server error" });
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(400)
      .send({ status: 400, message: "Please enter valid id" });
  }
  try {
    let data = await UserModel.findOne({ _id: id });
    if (data) {
      return res
        .status(200)
        .send({ status: 200, message: "User fetch successfully" ,user:data});
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: 500, message: "Internalserver error" });
  }
};

export { registerUser, getAllUser, updateUser, deleteUser, getSingleUser };
