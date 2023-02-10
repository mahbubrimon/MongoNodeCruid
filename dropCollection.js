const {client} = require('./main');

const dropCollection = async () => {
    try {
        const database = client.db("college");
        const result = await database.dropCollection("Teachers");
        console.log('Collection Deleted');
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}




dropCollection()
