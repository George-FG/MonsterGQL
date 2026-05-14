import { runGqlServer } from "./graphQL/graphql";
import { runHttpServer } from "./http/http";

const runApplication = async () => {
  const server = await runGqlServer();
  runHttpServer(server);
};

runApplication();
