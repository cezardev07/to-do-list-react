import { Provider } from "./context/provider";
import { Home } from "./page/home";

export const App = () => {
  return (
    <Provider>
      <Home/>
    </Provider>
  )
}
