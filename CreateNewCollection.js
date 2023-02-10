const {client} = require('./main');

const CreateNewCollection = async () => {
    try {
        const database = client.db("college");
        const result = await database.createCollection("Teachers");
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}




CreateNewCollection()
