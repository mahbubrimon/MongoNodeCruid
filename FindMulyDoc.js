const {client}=require('./main')

const FindAllDoc = async () => {
  try {
      const database = client.db("college");
      const students = database.collection("students");
      const result = await students.find().toArray();
      console.log(result);
  }
  catch (err) {
      console.log(err.message);
  }
  finally {
      await client.close();
  }
}
FindAllDoc()
