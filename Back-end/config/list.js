const chalk = require('chalk')
const {connectDB} = require('../db')

async function listItems() {
    try{
        const db = await connectDB()
        const collection = db.collection('auctionItems')

        const items = await collection.find().toArray()

        if(items.length === 0) {
            console.log(chalk.yellow('No auction items found in database'))
            return
        }

        console.log(chalk.cyan(`Auction items: ${items.length}`))
        items.forEach((item, index) => {
            console.log(
                chalk.green(`${index + 1}. ${item.title}` +
                `\n ${item.description}` + 
                `\n start: ${item.start_price}` +
                `\n reserve: ${item.reserve_price}\n`
                ))
        })
    } catch(err){
        console.error(chalk.red("Error listing items:" + err.message))
    }
}

module.exports = listItems