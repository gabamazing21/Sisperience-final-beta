import firestore from "@react-native-firebase/firestore";
import axios from "axios";
import * as types from "../types";

export const getLiveStremToken = () => (dispatch, getState) => {
  const { user } = getState().authReducer;
};
