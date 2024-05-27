import Box from "./components/Box";
import reviews from "./data.js";

const App = () => {
  return (
    <div className="bg-slate-50">
      <Box reviews={reviews} />
    </div>
  );
};

export default App;
