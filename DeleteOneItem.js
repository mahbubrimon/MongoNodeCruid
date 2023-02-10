const {client}= require ("./main");

const DeleteOneItem =async () => {
  try {
      const database = client.db("college");
      const students = database.collection("students");
      const result = await students.deleteOne({Name: "Ety"});
      console.log('Data deleted successfully');
  }
  catch (err) {
      console.log(err.message);
  }
  finally {
      await client.close();
  }
}

DeleteOneItem();