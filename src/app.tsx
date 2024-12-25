import { createRoot } from "react-dom/client";
import { Layout } from "./layout";
import { Writer } from "./components/writer";

const root = createRoot(document.body);
root.render(
  <Layout>
    <Writer />
  </Layout>,
);
