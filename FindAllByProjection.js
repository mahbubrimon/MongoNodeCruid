const {client} = require('./main');

const FindAllByProjection = async () => {
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.find({}, {projection:{Roll:"4"}}).toArray();
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

FindAllByProjection()
