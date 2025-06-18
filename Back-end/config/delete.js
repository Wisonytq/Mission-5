const chalk = require('chalk')
const {connectDB} = require('../db')

async function deleteItem(title) {
    try{
        const db = await connectDB();
        const collection = db.collection('auctionItems')

        const result = await collection.deleteOne({title})

        if(result.deletedCount === 0){
            console.log(chalk.yellow (`No item found with the title: ${title}`))
        } else {
            console.log(chalk.green (`Deleted the item titled: ${title}`))
        }
    } catch(err) {
        console.error(chalk.red('Error deleting item:' + err.message));
    }
}

module.exports = deleteItem