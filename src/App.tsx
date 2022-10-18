import { Refine } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import Dashboard from "pages/Dashboard";

const API_URL = "https://api.fake-rest.refine.dev";
function App() {
  return (
    <Refine
        routerProvider={routerProvider}
        resources={[ { name: "dashboard", list: Dashboard} ]}
        dataProvider={dataProvider(API_URL)}
        DashboardPage={Dashboard}
    />
  );
}

export default App;
