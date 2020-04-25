import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from "react-native";
import { Header, Body, Left, Right } from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { Fonts, FontColor } from "./constant/theme";
import { Overlay } from "react-native-elements";

// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { toogleDrawer } from "../redux/actions/drawerActions";
// import { DrawerActions } from "react-navigation-drawer";

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      leaveToggle: false,
      leavePopop: false,
    };
  }

  render() {
    return (
      <Header
        style={[
          {
            // paddingBottom: 10,
            // zIndex: 100000000000000,
            // elevation: this.props.elevation ? this.props.elevation : 3,
            width: "100%",
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "#fff",
            borderBottomLeftRadius: this.props.borderBottomLeftRadius
              ? this.props.borderBottomLeftRadius
              : 20,
            borderBottomRightRadius: this.props.borderBottomRightRadius
              ? this.props.borderBottomRightRadius
              : 20,

            height: this.props.height ? this.props.height : 60,
          },
          Platform.OS === "ios" ? { borderBottomWidth: 0 } : {},
        ]}
      >
        {this.state.leavePopop && (
          <Overlay
            onBackdropPress={() => this.setState({ leavePopop: false })}
            overlayBackgroundColor="transparent"
            // overlayBackgroundColor="red"
            windowBackgroundColor="rgba(0,0,0,0.5)"
            height={300}
            width={"90%"}
            overlayStyle={styles.overlays}
            isVisible={this.state.isVisible}
          >
            <View style={styles.timesCont}>
              <View style={styles.enrollCont}>
                <Text
                  style={{
                    color: "#2B65EC",
                    fontSize: 10,
                    fontFamily: Fonts.regular,
                  }}
                >
                  ARE YOU SURE ?
                </Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    color: "#191919",
                    fontSize: 13,
                    fontFamily: Fonts.regular,
                  }}
                >
                  You will no longer be able to answer this question. Do you
                  want to leave this question?
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.visibfalseOne}
              >
                <Text style={styles.leaveTouch}>LEAVE QUESTION</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ leavePopop: false })}
                style={styles.visibfalseTwo}
              >
                <Text style={styles.ReturnTouch}>RETURN</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        )}
        <Left style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.props.Drawer && (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  // backgroundColor: 'blue',
                }}
                onPress={() => {
                  // console.warn(this.props.navigation);
                  this.props.navigation.toggleDrawer();
                  // this.props.navigation.dispatch(DrawerActions.openDrawer());
                  // this.props.toogleDrawer(true);
                }}
              >
                <SimpleLineIcons name="menu" size={26} color="#000" />
              </TouchableOpacity>
            )}

            {this.props.arrow === true && (
              <TouchableOpacity
                // style={{borderWidth: 1}}
                onPress={() => {
                  // this.props.arrowNavigate
                  // ? this.props.navigation.navigate("Drawer")
                  // : this.props.headingText === "Homework"
                  // ? this.props.navigation.navigate("MyTeacherClass")
                  //: // : this.props.headingText === 'Classes' &&
                  //   this.props.secondText == 'Aliquam lobortis interdum'
                  // ? this.props.navigation.navigate('Classes')
                  this.props.navigation.goBack();
                }}
              >
                <FontAwesome5
                  name={"chevron-left"}
                  size={this.props.Arrowsize ? this.props.Arrowsize : 24}
                  color={
                    this.props.BackIconColor ? this.props.BackIconColor : "#000"
                  }
                />
              </TouchableOpacity>
            )}
          </View>
        </Left>

        <Body
          style={{
            flex: this.props.secondText ? 5 : 6,
            // height: '100%',
            left: 20,
            // backgroundColor: 'red',
            justifyContent: "center",
            // borderWidth: 1,
            width: "100%",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {this.props.headingText !== "" ? (
            <View style={{ alignItems: "center" }}>
              <Text
                numberOfLines={1}
                style={{
                  textAlign: "center",
                  color: this.props.color ? this.props.color : "#000",
                  fontSize: this.props.fontSize ? this.props.fontSize : 21,
                  // fontFamily: this.props.fontFamily
                  //   ? this.props.fontFamily
                  //   : Fonts.medium,
                }}
              >
                {this.props.headingText}
              </Text>
              {this.props.secondText ? (
                <Text style={{ color: "rgba(25,25,25,0.5)", fontSize: 12 }}>
                  {this.props.secondText}
                </Text>
              ) : null}
            </View>
          ) : null}
        </Body>

        <Right
          style={{
            flex: 2,
            alignItems: "center",
            // justifyContent: 'center',
            // borderWidth: 1,
            // left: -50,
            height: "100%",
            // width: '100%',
            // marginRight: 5,
            // marginTop: 5,
          }}
        >
          {/* <TouchableOpacity
            style={{
              width: 100,
              height: 45,
              paddingHorizontal: 15,
              backgroundColor: '#191919',
              borderWidth: 1,
              // borderTopLeftRadius: 5,
              // borderBottomLeftRadius: 5,
              // borderBottomRightRadius: 5,
              // position: 'absolute',
              // justifyContent: 'center',
              // alignItems: 'center',
              // right: 50,
              top: 25,
              // zIndex: 10000000000000,
            }}>
            <Text style={{color: '#fff'}}>Leave Question</Text>
          </TouchableOpacity> */}
          {this.state.leaveToggle && (
            <TouchableOpacity
              onPress={() =>
                this.setState({ leavePopop: true, leaveToggle: false })
              }
              style={{
                width: 140,
                height: 45,
                paddingHorizontal: 15,
                backgroundColor: "#191919",
                borderWidth: 1,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                right: 16,
                bottom: -15,
                // zIndex: 10000000000000,
              }}
            >
              <Text style={{ color: "#fff" }}>Leave Question</Text>
            </TouchableOpacity>
          )}
          {this.props.dust && (
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <SimpleLineIcons name="trash" color={FontColor.black} size={28} />
            </TouchableOpacity>
          )}
          {this.props.Search == true ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddAccount")}
              style={styles.arrowView}
            >
              <Image
                source={require("../assets/icons/apple.png")}
                style={{ width: "80%", height: "80%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : this.props.plus == true ? (
            <TouchableOpacity
              onPress={
                () => {
                  this.props.visibleSend
                    ? this.props.handleVisible(true)
                    : this.props.addLessonPlan
                    ? this.props.navigation.navigate("AddLessonPlan")
                    : this.props.navigation.navigate("Addresource");
                }
                // console.warn('preeeeesssssss')
              }
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <FontAwesome5 name="plus" size={25} color="#191919" />
              </View>
            </TouchableOpacity>
          ) : //   :
          //   this.state.leaveToggle ? (
          // <View
          //   style={{
          //     width: 50,
          //     height: 50,
          //     backgroundColor: '#fff',
          //     borderWidth: 1,
          //     // position: 'absolute',
          //     right: 50,
          //     top: 50,
          //   }}></View>
          //   )
          this.props.more == true ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({ leaveToggle: !this.state.leaveToggle })
              }
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                // borderWidth: 1,
                // zIndex: 10000,
              }}
            >
              <View>
                <Fontisto name="more-v-a" size={28} color="#000" />
              </View>
            </TouchableOpacity>
          ) : this.props.logout == true ? (
            <TouchableOpacity
              style={{
                width: "100%",
                left: 10,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <FontAwesome name="sign-out" size={25} color="#191919" />
              </View>
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}

// const mapStateToProps = state => ({
//   drawer: state.drawerReducer.drawer,
// });

// const mapActionsToProps = dispatch => ({
//   toogleDrawer: bindActionCreators(toogleDrawer, dispatch),
// });

// export default connect(mapStateToProps, mapActionsToProps)(GlobalHeader);

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  arrowView: {
    width: "75%",
    height: "75%",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    // marginRight: 10,
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: "white",
    alignSelf: "flex-end",
  },
  Text: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  overlays: {
    elevation: 0,
    borderWidth: 0,
    borderRadius: 5,
  },
  classCont: { marginLeft: 10 },
  plusCont: { bottom: 2, marginRight: 10 },
  visibfalseOne: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    height: 43,
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  visibfalseTwo: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    height: 43,
    width: "45%",
    backgroundColor: "#5281EF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  scantext: {
    color: "#fff",
    fontSize: 14,
    // fontFamily: Fonts.medium,
    top: 2,
  },
  camCont: { marginRight: 10 },
  visib: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    height: 43,
    backgroundColor: "#5281EF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  enrollCont: {
    marginTop: 15,
    marginLeft: 20,
  },
  timesCont: {
    paddingVertical: 10,
    // height: 110,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  TOuchtime: { position: "absolute", top: 15, right: 20 },
  pluss: { marginRight: 8 },
  scroll: { marginVertical: 3 },
  leaveTouch: {
    color: "#191919",
    fontSize: 14,
    // fontFamily: Fonts.medium,
  },
  ReturnTouch: {
    color: "#fff",
    fontSize: 14,
    // fontFamily: Fonts.medium,
  },
});
