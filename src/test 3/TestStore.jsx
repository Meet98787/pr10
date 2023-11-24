import { createStore } from "redux";
import TestReducer from "./TestReducer";

const TestStore = createStore(TestReducer)
export default TestStore