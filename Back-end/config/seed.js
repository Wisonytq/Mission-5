const chalk = require("chalk");
const { connectDB } = require("../db");

const seedData = [
  {
    title: "Car",
    description: "Nissan Skyline R34 with a WOF and rego in good condition",
    start_price: 5000,
    reserve_price: 10000,
  },
  {
    title: "Playstation 5",
    description: "Brand new in excellent condition",
    start_price: 500,
    reserve_price: 700,
  },
  {
    title: "Steering Setup",
    description: "A full steering setup for gaming in excellent condition",
    start_price: 250,
    reserve_price: 350,
  },
];

async function seedItems() {
  const db = await connectDB();
  const collection = db.collection("auctionItems");

  try {
    const result = await collection.insertMany(seedData);
    console.log(
      chalk.green(
        `Seeded ${result.insertedCount} items successfully into the database`
      )
    );
  } catch (err) {
    console.log(chalk.red("Error seeding data into the database:" + err));
  }
}

module.exports = seedItems;
