import { createRoot } from "react-dom/client";
import { Layout } from "./layout";
import { Sidebar } from "./components/sidebar";
import { Stats } from "./pages/stats";
import { Practice } from "./pages/practice";
import { Settings } from "./pages/settings";
import { Writer } from "./components/writer";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Sidebar />
      <Outlet />
    </Layout>
  ),
});
const writerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/writer",
  component: () => <Writer />,
});
const statsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stats",
  component: () => <Stats />,
});
const practiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/practice",
  component: () => <Practice />,
});
const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => <Settings />,
});

const routeTree = rootRoute.addChildren([
  writerRoute,
  statsRoute,
  practiceRoute,
  settingsRoute,
]);
console.log(routeTree);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root = createRoot(document.body);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
