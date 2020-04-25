import firestore, { firebase } from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import * as types from "../types";

export const submitReportAndSuggestion = (report_data) => (
  dispatch,
  getState
) => {
  dispatch({
    type: types.USER_LOADING_START,
    payload: true,
  });

  let user = getState().authReducer.user;

  uploadImage(report_data.selectedImage)
    .then((image_url) => {
      firestore()
        .collection("reports")
        .add({
          type: report_data.type,
          description: report_data.description,
          image_url: image_url,
          submitted_by: user.uid,
          submit_date: firebase.firestore.Timestamp.now().toMillis(),
        })
        .then((response) => {
          dispatch({
            type: types.SUBMIT_REPORT_SUCCESS,
            payload: {
              isLoading: false,
              isError: false,
              errorMessage: null,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: types.SUBMIT_REPORT_ERROR,
            payload: {
              isLoading: false,
              isError: true,
              errorMessage: error.message,
            },
          });
        });
    })
    .catch((error) => {
      dispatch({
        type: types.SUBMIT_REPORT_ERROR,
        payload: {
          isLoading: false,
          isError: true,
          errorMessage: error.message,
        },
      });
    });
};

const uploadImage = (file) => {
  const ImagesRef = storage().ref(
    "report_images/report_" +
      Math.random().toString().substring(2, 14) +
      file.name
  );

  return new Promise((resolve, reject) => {
    ImagesRef.putFile(file.path)
      .then((resp) => {
        ImagesRef.getDownloadURL()
          .then((downloadURL) => {
            resolve(downloadURL);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
