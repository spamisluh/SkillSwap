import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { BrowseServices } from "./components/BrowseServices";
import { ServiceDetail } from "./components/ServiceDetail";
import { UserProfile } from "./components/UserProfile";
import { Messages } from "./components/Messages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "dashboard", Component: Dashboard },
      { path: "browse", Component: BrowseServices },
      { path: "service/:id", Component: ServiceDetail },
      { path: "profile/:userId", Component: UserProfile },
      { path: "messages", Component: Messages },
    ],
  },
]);
