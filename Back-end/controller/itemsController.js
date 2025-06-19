const {connectDB} = require('../db')

async function insertItem(req, res) {
    const {title, description, start_price, reserve_price} = req.body
    try{
        const db = await connectDB()
        const result = await db.collection('auctionItems').insertOne({
            title, description, start_price, reserve_price
        })
        res.status(200).json({message: "Item was inserted into the database successfully"})
    } catch {
        res.status(500).json({error: "Item failed to insert into the database"})
    }
}

async function deleteItem(req, res) {
    const {title} = req.params
    try{
        const db = await connectDB()
        const result = await db.collection('auctionItems').deleteOne({title})
        if (result.deletedCount === 0){
            res.status(404).json({message: "Item was not found in the database"})
        }
        res.status(200).json({message: `Deleted the ${title} item successfully from the database`})
    } catch {
        res.status(500).json({error: `Failed to delete the ${title} item from the database`})
    }
}

async function getItem(req, res) {
    const {title} = req.params
    try{
        const db = await connectDB()
        const item = await db.collection('auctionItems').findOne({title})
        if (!item){
            res.status(404).json({message: `No item titled ${title} was found in the database`})
        }
        res.status(200).json(item)
    } catch {
        res.status(500).json({error: `Failed to get the ${title} from the database`})
    }
}

async function listItems(req, res) {
    try{
        const db = await connectDB()
        const items = await db.collection('auctionItems').find().toArray()
        res.status(200).json(items)
    } catch {
        res.status(500).json({error: "Failed to get the list of items from the database"})
    }
}

module.exports = {insertItem, deleteItem, getItem, listItems}