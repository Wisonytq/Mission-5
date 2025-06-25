const chalk = require('chalk')
const {connectDB} = require('../db')

async function getItem(title) {
   try{
    const db = await connectDB()
    const collection = await db.collection('auctionItems')

    const item = await collection.findOne({title})

    if(item){
        console.log(chalk.green('found auction item:' + JSON.stringify(item, null, 2)))
    } else {
        console.log(chalk.yellow('No auction item found with that title'))
    }
   } catch(err) {
    console.log(chalk.red("Error getting the auction item:" + err))
   }
}

module.exports = getItem