const escapeHtml = require("escape-html");
const Firestore = require("@google-cloud/firestore");

exports.helloHttp = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || "World")}!`);
};

exports.saveCars = async (req, res) => {
  const { plaque, color, price, carModel, brand } = req.query;

  if (!plaque || !color || !price || !carModel || !brand) {
    res.send("Bad Request");
    throw new Error("Bad Request");
  }

  const db = new Firestore({
    projectId: "cloud-286400",
    keyFilename: "./Cloud-7a49d08cf9bd.json",
  });

  const response = await db.collection("cars").add({
    plaque,
    color,
    price,
    carModel,
    brand,
  });

  res.send(`The content has been saved with ID: ${response.id}.`);
};

exports.getCars = async (req, res) => {
  const plaque = req.query.plaque;

  if (!plaque) {
    res.send("Bad Request");
    throw new Error("Bad Request");
  }

  const db = new Firestore({
    projectId: "cloud-286400",
    keyFilename: "./Cloud-7a49d08cf9bd.json",
  });

  const carsRef = db.collection("cars");
  const snapshot = await carsRef.where("plaque", "==", plaque).get();

  if (snapshot.empty) {
    res.send("No matching documents.");
    return;
  }

  snapshot.forEach((doc) => {
    res.send(JSON.stringify(doc.data()));
  });
};
