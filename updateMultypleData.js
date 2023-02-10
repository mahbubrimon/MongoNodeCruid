const {client} = require('./main');

const updateMultypleData = async () => {
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const filter = {};
        const updateDoc = {
            $set: {
                City:"Shariatpur",
                Village:"Madbar Kandi"
              },
        };
        const result = await students.updateMany(filter,updateDoc);
        console.log('Database updated');
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

updateMultypleData()