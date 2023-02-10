const {client} = require('./main');

const FindAllBySort = async () => {
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.find().sort({Class:-1}). toArray();
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}



FindAllBySort()