const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root@cluster0.5s3kn.mongodb.net/scheduler?retryWrites=true&w=majority";
MongoClient.connect(uri, { useNewUrlParser: true }, (err:any, client:any) => {

  if (err) throw err;

  console.log(client);

  client.close();
});