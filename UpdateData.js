const {client} = require('./main');

const UpdateData = async () => {
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.updateOne({Roll:"2"},{$set:{Name:"Mony"}});
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}




UpdateData()