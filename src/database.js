const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://user1:DrhEtv6hssSQnIyy@cluster0.hcu3yfi.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexión correcta a MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
dbConnect();