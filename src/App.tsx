import { Provider as ProviderRedux } from "react-redux";
import { store } from "./store";
import Player from "./pages/Player";

function App() {
  return (
    <>
      <div>
        <ProviderRedux store={store}>
          <Player />
        </ProviderRedux>
      </div>
    </>
  );
}

export default App;
