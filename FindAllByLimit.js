const {client} = require('./main');

const FindAllByLimit = async () => {
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.find().limit(3).toArray();
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

FindAllByLimit()