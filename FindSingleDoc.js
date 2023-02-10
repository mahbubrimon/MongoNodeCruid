const {client}= require ("./main")

const FindSingleDoc =async () => {

    try {
        const database = client.db("college");
        const students = database.collection("students");
        const result = await students.findOne({Name: "Shakil"});
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

FindSingleDoc()