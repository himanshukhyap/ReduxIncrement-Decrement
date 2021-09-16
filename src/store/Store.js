import { createStore } from "redux";
import { rootreducer } from "../reducer/root";

export const store = createStore(rootreducer);