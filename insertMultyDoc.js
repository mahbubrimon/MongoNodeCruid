const {client}=require('./main')

const insertMultyData = async () => {
  try {
    const database = client.db("college");
    const students = database.collection("students");
    const doc = [{
      Name: "Mony",
      Class: "11",
      Roll: "2"},
      {
        Name: "Akter",
        Class: "11",
        Roll: "3"},
      {
        Name: "Ety",
        Class: "11",
        Roll: "4"}
    ]
    const result = await students.insertMany(doc);
    console.log(`Documents was inserted`);
  }
  catch (err) {
      console.log(err.message);
  }
  finally {
    await client.close();
  }
}

insertMultyData();




