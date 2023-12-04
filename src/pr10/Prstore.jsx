import { applyMiddleware, createStore } from "redux";
import reducer from "./Prreducer";
import thunk from "redux-thunk";

const Prstore = createStore(reducer, applyMiddleware(thunk))

export default Prstore