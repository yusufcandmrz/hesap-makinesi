import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
    },
    calculaterOutputContainer: {
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 5,
        borderBottomWidth: 1.5,
        borderColor: "gray",
    },
    flatList: {
        flex: 1,
        marginTop: 10,
    },
    textInput: {
        fontSize: 50,
        color: "white",
        textAlign: "right",
        marginHorizontal: 10,
    },

    calculaterContainer: {
        flex: 1,
        marginBottom: 10,
    },
    calculaterRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "space-around",
    },

    //Button
    button: {
        flex: 1,
        width: 105,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
    },
    numberButtonText: {
        fontSize: 25,
        color: "white",
    },
    operationButtonText: {
        fontSize: 25,
        color: "orange",
    },
    equalsButtonText: {
        color: "white",
        backgroundColor: "orange",
        width: 50,
        height: 50,
        fontSize: 35,
        textAlign: "center",
        borderWidth: 1.5,
        borderRadius: 100,
        borderColor: "orange",
    },
})

export default styles;