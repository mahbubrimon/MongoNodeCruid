const {client}=require('./main');

const insertSingleDoc = async () => {
  try {
      const database = client.db("college");
      const students = database.collection("students");
      const doc = {
          Name: "Shaty",
          Class: "11",
          Roll: "1",
      }
      const result = await students.insertOne(doc);
      console.log(`A document was inserted`);
  }
  catch (err) {
      console.log(err.message);
  }
  finally {
      await client.close();
  }
}
insertSingleDoc();
