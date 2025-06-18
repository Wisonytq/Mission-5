#!/usr/bin/env node
const { Command } = require('commander');
const insertItem = require('./config/insert')
const deleteItem = require('./config/delete')

const program = new Command();

program
    .command('insert')
    .description('inserts an auction item into the database')
    .requiredOption('--title <title>', 'auction item title')
    .requiredOption('--desc <desc>', 'auction item description')
    .requiredOption('--start <strat_price>', 'starting price for auction item', parseFloat)
    .requiredOption('--reserve <reserve_price>', 'reservered price for auction item', parseFloat)
    .action(async (options) => {
        await insertItem(options)
        process.exit(0)
    })

program
    .command('delete')
    .description('delete an auction item by the title of the item')
    .requiredOption('--title <title>', 'title of the item to delete')
    .action(async ({title}) => {
        await deleteItem(title)
        process.exit(0)
    })

program
    .command('get')
    .description('get auction item by title of the item')
    .requiredOption('--title <title>', 'title of the item you want to get')
    .action(async ({title}) => {
        await getItem(title)
        process.exit(0)
    })

program
    .command('list')
    .description('list all the auction items')
    .action(async () => {
        await listItems()
        process.exit(0)
    })

program.parse(process.argv);