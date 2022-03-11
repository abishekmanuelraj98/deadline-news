import classes from "./App.module.css";
import Header from "./components/header/Header";
import NewsFlash from "./components/header/NewsFlash";
import PageRoutes from "./PageRoutes";
function App() {
  return (
    <div className={classes.page_container}>
      <div className={classes.header}>
        <Header />
      </div>
      <NewsFlash />
      <PageRoutes />
    </div>
  );
}

export default App;
