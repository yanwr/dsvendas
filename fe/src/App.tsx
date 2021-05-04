import HeaderComponent from "components/Header";
import DataTableComponent from "components/DataTable";
import FooterComponent from "components/Footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <DataTableComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
