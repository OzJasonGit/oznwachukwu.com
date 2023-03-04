var Airtable = require('airtable');
var base = new Airtable
({apiKey: 'patzKiORW6ceJqaad.596e3900ba6690e1eaef654f2161e76638238c1634a6c71871a6265ecd33a552'})
.base('appo4dnDZxmyS2xoQ');

const table = base('Design projects');

const getRecords = async () => {
    const records = await table.select().firstPage();
    console.log(records);
};

getRecords();


