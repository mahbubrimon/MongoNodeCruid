const {client}= require('./main');

const deleteAllItem= async ()=>{
    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.deleteMany();
        console.log('Data deleted successfully');
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

deleteAllItem();


