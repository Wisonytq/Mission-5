const chalk = require('chalk');
const { connectDB } = require('../db');

async function insertItem({title, desc, start, reserve}) {
    try{
        const db = await connectDB();
        const collection = db.collection('auctionItems')

        const newItem = {
            title: title,
            description: desc,
            start_price: start,
            reserve_price: reserve,
        };

        await collection.insertOne(newItem);
        console.log(chalk.green('auction item inserted successfully'));
    }   catch(err) {
        console.error(chalk.red('Error inserting the auction item:' + err.message));
    }
}

module.exports = insertItem;