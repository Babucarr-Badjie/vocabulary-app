import Layout from "./components/layouts/Layout";
import Welcome from "./components/layouts/Welcome";
import Dashboard from "./components/layouts/Dashboard";
import Challenge from "./components/layouts/Challenge";

function App() {
  const selectedPage = 1; // 0: Welcome, 1: Dashboard, 2: Challenge

  //
  const pages = {
    0: <Welcome />,
    1: <Dashboard />,
    2: <Challenge />,
  };
  return (
    <Layout>
      {/* Render the page based on the value of 'selectedPage' */}
      {pages[selectedPage]}
    </Layout>
  );
}

export default App;
