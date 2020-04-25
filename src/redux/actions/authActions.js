import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";
// import { LoginManager, AccessToken } from "react-native-fbsdk";
import firestore from "@react-native-firebase/firestore";
import * as types from "../types";
import { CommonActions } from "@react-navigation/native";

GoogleSignin.configure({
  webClientId:
    "144832231492-65es1pghh0o77osgv3ilkvuvvqbls1mg.apps.googleusercontent.com",
});

let errorMessage = null;

export const registerUser = (user_data, navigation) => (dispatch, getState) => {
  const { userMode } = getState().authReducer;
  dispatch({
    type: types.LOADING_START,
    payload: true,
  });

  auth()
    .createUserWithEmailAndPassword(user_data.email, user_data.password)
    .then((resp) => {
      firestore()
        .collection(`${userMode}s`)
        .doc(resp.user.uid)
        .set({
          user_name: user_data.user_name,
          email: user_data.email,
          uid: resp.user.uid,
          user_type: user_data.user_type,
        })
        .then((response) => {
          dispatch({
            type: types.USER_REGISTRATION_SUCCESS,
            payload: {
              isLoading: false,
              user: {
                user_name: user_data.user_name,
                email: user_data.email,
                uid: resp.user.uid,
                user_type: user_data.user_type,
              },
              isError: false,
              errorMessage: null,
            },
          });
          if (user_data.user_type === "user") {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "UserAppNavigator" }],
              })
            );
          } else if (user_data.user_type === "trainer") {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "TrainerAppNavigator" }],
              })
            );
          } else {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "AdminAppNavigator" }],
              })
            );
          }
        })
        .catch((error) => {
          dispatch({
            type: types.USER_REGISTRATION_ERROR,
            payload: {
              isLoading: false,
              user: null,
              isError: true,
              errorMessage: error.message,
            },
          });
        });
    })
    .catch((error) => {
      if (error.message.indexOf("[auth/email-already-in-use]") !== -1) {
        errorMessage = "The email address is already in use by another account";
      } else if (error.message.indexOf("[auth/weak-password]") !== -1) {
        errorMessage = "Password should be at least 6 characters";
      } else {
        errorMessage = error.message;
      }

      dispatch({
        type: types.USER_REGISTRATION_ERROR,
        payload: {
          isLoading: false,
          user: null,
          isError: true,
          errorMessage: errorMessage,
        },
      });
    });
};

export const loginWithEmailAndPassword = (user_data, navigation) => (
  dispatch,
  getState
) => {
  const { userMode } = getState().authReducer;
  dispatch({
    type: types.LOADING_START,
    payload: true,
  });

  auth()
    .signInWithEmailAndPassword(user_data.email, user_data.password)
    .then((resp) => {
      firestore()
        .collection(`${userMode}s`)
        .doc(resp.user.uid)
        .get()
        .then((response) => {
          if (response.exists) {
            dispatch({
              type: types.USER_REGISTRATION_SUCCESS,
              payload: {
                isLoading: false,
                user: { ...response.data(), password: user_data.password },
                isError: false,
                errorMessage: null,
              },
            });
            if (response.data().user_type === "user") {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "UserAppNavigator" }],
                })
              );
            } else if (response.data().user_type === "trainer") {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "TrainerAppNavigator" }],
                })
              );
            } else {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "AdminAppNavigator" }],
                })
              );
            }
          } else {
            dispatch({
              type: types.USER_REGISTRATION_ERROR,
              payload: {
                isLoading: false,
                user: null,
                isError: true,
                errorMessage: `This email is not register for ${userMode}`,
              },
            });
          }
        })
        .catch((error) => {
          dispatch({
            type: types.USER_REGISTRATION_ERROR,
            payload: {
              isLoading: false,
              user: null,
              isError: true,
              errorMessage: error.message,
            },
          });
        });
    })
    .catch((error) => {
      console.log("asdflkld", error);
      if (error.message.indexOf("[auth/wrong-password]") !== -1) {
        errorMessage = "The password is invalid";
      } else if (error.message.indexOf("[auth/user-not-found]") !== -1) {
        errorMessage =
          "There is no user record corresponding to this identifier. The user may have been deleted.";
      } else {
        errorMessage = error.message;
      }
      dispatch({
        type: types.USER_REGISTRATION_ERROR,
        payload: {
          isLoading: false,
          user: null,
          isError: true,
          errorMessage: errorMessage,
        },
      });
    });
};

export const loginWithGmail = (user_type, navigation) => async (
  dispatch,
  getState
) => {
  const { userMode } = getState().authReducer;
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  auth()
    .signInWithCredential(googleCredential)
    .then((resp) => {
      dispatch({
        type: types.LOADING_START,
        payload: true,
      });
      if (resp?.additionalUserInfo?.isNewUser) {
        firestore()
          .collection(`${userMode}s`)
          .doc(resp.user.uid)
          .set({
            user_name: resp.user.displayName,
            email: resp.user.email,
            uid: resp.user.uid,
            user_type: userMode,
            photoURL: resp.user.photoURL,
          })
          .then((response) => {
            dispatch({
              type: types.USER_REGISTRATION_SUCCESS,
              payload: {
                isLoading: false,
                user: {
                  user_name: resp.user.displayName,
                  email: resp.user.email,
                  uid: resp.user.uid,
                  user_type: userMode,
                  photoURL: resp.user.photoURL,
                },
                isError: false,
                errorMessage: null,
              },
            });
            if (response.data().user_type === "user") {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "UserAppNavigator" }],
                })
              );
            } else if (response.data().user_type === "trainer") {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "TrainerAppNavigator" }],
                })
              );
            } else {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "AdminAppNavigator" }],
                })
              );
            }
          })
          .catch((error) => {
            dispatch({
              type: types.USER_REGISTRATION_ERROR,
              payload: {
                isLoading: false,
                user: null,
                isError: true,
                errorMessage: error.message,
              },
            });
          });
      } else {
        firestore()
          .collection(`${userMode}s`)
          .doc(resp.user.uid)
          .get()
          .then((response) => {
            if (response.exists) {
              dispatch({
                type: types.USER_REGISTRATION_SUCCESS,
                payload: {
                  isLoading: false,
                  user: { ...response.data(), doc_id: response.id },
                  isError: false,
                  errorMessage: null,
                },
              });
              if (response.data().user_type === "user") {
                navigation.navigate("UserAppNavigator");
              } else if (response.data().user_type === "trainer") {
                navigation.navigate("TrainerAppNavigator");
              } else {
                navigation.navigate("AdminAppNavigator");
              }
            } else {
              dispatch({
                type: types.USER_REGISTRATION_ERROR,
                payload: {
                  isLoading: false,
                  user: null,
                  isError: true,
                  errorMessage: `This email is not register for ${userMode}`,
                },
              });
            }
          })
          .catch((error) => {
            dispatch({
              type: types.USER_REGISTRATION_ERROR,
              payload: {
                isLoading: false,
                user: null,
                isError: true,
                errorMessage: error.message,
              },
            });
          });
      }
    })
    .catch((error) => {
      dispatch({
        type: types.USER_REGISTRATION_ERROR,
        payload: {
          isLoading: false,
          user: null,
          isError: true,
          errorMessage: error.message,
        },
      });
    });
};

export const logout = (navigation) => async (dispatch) => {
  dispatch({
    type: types.LOADING_START,
    payload: true,
  });
  auth()
    .signOut()
    .then(() => {
      dispatch({
        type: types.LOGOUT_SUCCESS,
        payload: {
          isLoading: false,
          user: null,
          isError: false,
          errorMessage: null,
        },
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "CategorySelect" }],
        })
      );
    })
    .catch((error) => {
      dispatch({
        type: types.LOGOUT_ERROR,
        payload: {
          isLoading: false,
          user: null,
          isError: true,
          errorMessage: error.message,
        },
      });
    });
};

// export const loginWithFacebook = (user_type, navigation) => async (
//   dispatch
// ) => {
//   dispatch({
//     type: types.LOADING_START,
//     payload: true,
//   });

//   const result = await LoginManager.logInWithPermissions([
//     "public_profile",
//     "email",
//   ]);

//   if (result.isCancelled) {
//     console.log("User cancelled the login process");
//   }

//   // Once signed in, get the users AccesToken
//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     console.log("Something went wrong obtaining access token");
//   }

//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(
//     data.accessToken
//   );

//   auth()
//     .signInWithCredential(facebookCredential)
//     .then((resp) => {
//       console.log("Response of google login", resp);
//       dispatch({
//         type: types.LOADING_START,
//         payload: false,
//       });
//       // firestore()
//       //   .collection("users")
//       //   .doc(resp.user.uid)
//       //   .get()
//       //   .then((response) => {
//       //     dispatch({
//       //       type: types.USER_REGISTRATION_SUCCESS,
//       //       payload: {
//       //         isLoading: false,
//       //         user: { ...response.data(), doc_id: response.id },
//       //         isError: false,
//       //         errorMessage: null,
//       //       },
//       //     });
//       //     navigation.navigate("Drawer");
//       //   })
//       //   .catch((error) => {
//       //     dispatch({
//       //       type: types.USER_REGISTRATION_ERROR,
//       //       payload: {
//       //         isLoading: false,
//       //         user: null,
//       //         isError: true,
//       //         errorMessage: error.message,
//       //       },
//       //     });
//       //   });
//     })
//     .catch((error) => {
//       console.log("asdflkld", error);
//       if (error.message.indexOf("[auth/wrong-password]") !== -1) {
//         errorMessage = "The password is invalid";
//       } else if (error.message.indexOf("[auth/user-not-found]") !== -1) {
//         errorMessage =
//           "There is no user record corresponding to this identifier. The user may have been deleted.";
//       } else {
//         errorMessage = error.message;
//       }
//       dispatch({
//         type: types.USER_REGISTRATION_ERROR,
//         payload: {
//           isLoading: false,
//           user: null,
//           isError: true,
//           errorMessage: errorMessage,
//         },
//       });
//     });
// };

export const editProfile = (user_data, password = null) => (dispatch) => {
  dispatch({
    type: types.LOADING_START,
    payload: true,
  });
  if (password) {
    dispatch(changePassword(user_data, password));
  } else {
    dispatch(updateProfile(user_data, password));
  }
};

export const updateProfile = (user_data, password) => (dispatch, getState) => {
  let user = getState().authReducer.user;

  firestore()
    .collection("users")
    .doc(user.uid)
    .update({
      ...user_data,
    })
    .then((response) => {
      dispatch({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: {
          isLoading: false,
          user: {
            ...user,
            ...user_data,
            password: password ? password : user?.password,
          },
          isError: false,
          errorMessage: null,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_PROFILE_ERROR,
        payload: {
          isLoading: false,
          isError: true,
          errorMessage: error.message,
        },
      });
    });
};

export const changePassword = (user_data, password) => async (dispatch) => {
  let currentUser = auth().currentUser;
  currentUser
    .updatePassword(password)
    .then(() => {
      dispatch(updateProfile(user_data, password));
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_PROFILE_ERROR,
        payload: {
          isLoading: false,
          isError: true,
          errorMessage: error.message,
        },
      });
    });
};

export const selectUserMode = (userMode, navigation, screenPath) => async (
  dispatch
) => {
  dispatch({
    type: types.SET_USER_MODE,
    payload: {
      userMode: userMode,
    },
  });
  navigation.navigate(screenPath);
};
