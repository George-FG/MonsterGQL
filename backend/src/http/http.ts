import express from "express";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServer, BaseContext } from "@apollo/server";

export const runHttpServer = async (server: ApolloServer<BaseContext>) => {
  const app = express();
  const port = 3000;

  app.get("/", (_, res) => {
    res.send("Navigate to /graphql for apollo!");
  });

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  new Promise(function (resolve, _reject) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
      resolve(app);
    });
  });
};
