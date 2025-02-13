require("dotenv").config();
// const express = require("express");
//const Stripe = require("stripe");
// const cors = require("cors");

// const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// app.use(cors());
// app.use(express.json());

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount } = req.body;
//   console.log("Received amount:", amount);

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//     });

//     console.log("Payment Intent created:", paymentIntent);
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

const express = require("express");
const mongoose = require("mongoose");
// const Stripe = require("stripe");
const cors = require("cors");

const connectDB = require("./config/db");
const dotenv = require("dotenv");

const contactModel = require("./models/contactModel");

const registration = require("./models/registration");

const app = express();
//const stripe = Stripe("YOUR_STRIPE_SECRET_KEY");

// dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new Contact
    const newContact = new contactModel({ name, email, message });
    await newContact.save(); // Saving the contact in MongoDB

    res.status(201).json({ message: "Contact details saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact details", error });
  }
});

//---------------------------------------------------------------------------------------------------------------------

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post(
  "/api/register-driver",
  upload.fields([{ name: "drivingLicense" }, { name: "idProofFile" }]),
  async (req, res) => {
    try {
      // extracting form-data and files from req.body and req.files
      const { name, email, phone, age, address, licenseNumber, idProofType } =
        req.body;

      const drivingLicenseFile = req.files.drivingLicense
        ? req.files.drivingLicense[0].path
        : null;
      const idProofFile = req.files.idProofFile
        ? req.files.idProofFile[0].path
        : null;

      if (!drivingLicenseFile || !idProofFile) {
        return res
          .status(400)
          .json({ error: "Both driving license and ID proof are required" });
      }

      const newDriver = new registration({
        name,
        email,
        phone,
        age,
        address,
        license_no: licenseNumber,
        id_type: idProofType,
        driving_license: drivingLicenseFile,
        id_proof: idProofFile,
        // drivingLicense: drivingLicense[0].path, // Assuming multer saves the file in the uploads folder
        // idProofFile: idProofFile[0].path,
      });

      await newDriver.save();
      res
        .status(201)
        .json({ message: "Driver registered successfully", driver: newDriver });
    } catch (error) {
      console.error("Error saving driver details:", error);
      res.status(500).json({ error: "Failed to register driver" });
    }
  }
);

//--------------------------------------------------------------------------------------------------------------------------

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount } = req.body;
//   console.log("Received amount:", amount);
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//     });

//     console.log("Payment Intent created:", paymentIntent);
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  console.log("Received amount:", amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    console.log("Payment Intent created:", paymentIntent);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(5000, () => console.log("Server running on port 5000"));

//app.listen(5000, () => console.log("Server running on port 5000"));
