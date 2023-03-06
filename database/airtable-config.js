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




module.exports = {
    // This is your Airtable API KEY
    API_KEY: "patzKiORW6ceJqaad.596e3900ba6690e1eaef654f2161e76638238c1634a6c71871a6265ecd33a552",
    // This is the base you are updating
    BASE_ID: "appo4dnDZxmyS2xoQ",
    // This is the base name you're updating
    BASE_NAME: "Insert your base name",
    // This is the view which you're updating
    VIEW_NAME: "Insert your view name",
    // [IMPORTANT] - Column name where image urls are present
    URL_TEXT_COLUMN_NAME: "Insert column name where images are in url format",
    // [IMPORTANT] - Column name where image will be uploaded. Please ensure that the type of this column is 'Attachment'
    URL_ATTACHMENT_COLUMN_NAME: "Insert column name where image type is Attachment"
}


