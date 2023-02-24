import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./HesapMakinesi_style";

const HesapMakinesi = () => {

    const [output, setOutput] = useState("");
    const [firstValue, setfirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operation, setOperation] = useState("");

    useEffect(() => { console.log("Program is starting...") }, [])

    useEffect(() => {
        console.log("Output value: " + output);
    }, [output]);

    useEffect(() => {
        console.log("First value: " + firstValue);
        console.log("Operation value: " + operation);
        console.log("Second value: " + secondValue);
        switch (operation) {
            case "+":
                setOutput(String(firstValue + secondValue));
                break;
            case "-":
                setOutput(String(firstValue - secondValue));
                break;
            case "*":
                setOutput(String(firstValue * secondValue));
                break;
            case "/":
                if (secondValue == 0) {
                    Alert.alert("You cant divine by 0");
                    calculate("allClear");
                }
                else {
                    setOutput(String(firstValue / secondValue));
                }
                break;
            case "%":
                setOutput(String(firstValue % secondValue));
                break;
        }
        setfirstValue(output);
        setOperation("");
        setSecondValue(0);
    }, [secondValue])

    const calculate = (buttonType, value) => {

        if (buttonType == "clear") {
            setOutput(output.slice(0, -1));
        }
        else if (buttonType == "allClear") {
            setOutput("");
            setfirstValue(0);
            setSecondValue(0);
            setOperation("");
        }
        else if (buttonType == "number") {
            setOutput(output + value);
        }
        else if (buttonType == "operation") {
            if (output == "") {
                setOperation(value);
            }
            else if (output != "") {
                setfirstValue(Number(output));
                setOperation(value);
            }
            setOutput("");
        }
        else if (buttonType == "equals") {
            if (firstValue == 0 && secondValue == 0 & operation == "") {
                setOutput("0");
            }
            else if (operation != "") {
                if (output != "") {
                    setSecondValue(Number(output));
                }
                else {
                    setSecondValue(0);
                }
            }
        }
        else {
            console.log("You probably clicked ?, right? That button useless");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.calculaterOutputContainer}>
                <FlatList style={styles.flatList} />
                <TextInput style={styles.textInput} editable={false} value={output} />
            </View>
            <View style={styles.calculaterContainer}>
                <View style={styles.calculaterRow}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("allClear")}>
                        <Text style={styles.operationButtonText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("clear")}>
                        <Text style={styles.operationButtonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("operation", "%")}>
                        <Text style={styles.operationButtonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("operation", "/")}>
                        <Text style={styles.operationButtonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculaterRow}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "7")}>
                        <Text style={styles.numberButtonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "8")}>
                        <Text style={styles.numberButtonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "9")}>
                        <Text style={styles.numberButtonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("operation", "*")}>
                        <Text style={styles.operationButtonText}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculaterRow}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "4")}>
                        <Text style={styles.numberButtonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "5")}>
                        <Text style={styles.numberButtonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "6")}>
                        <Text style={styles.numberButtonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("operation", "-")}>
                        <Text style={styles.operationButtonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculaterRow}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "1")}>
                        <Text style={styles.numberButtonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "2")}>
                        <Text style={styles.numberButtonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "3")}>
                        <Text style={styles.numberButtonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("operation", "+")}>
                        <Text style={styles.operationButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.calculaterRow}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("?")}>
                        <Text style={styles.operationButtonText}>?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", "0")}>
                        <Text style={styles.numberButtonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("number", ".")}>
                        <Text style={styles.numberButtonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate("equals")}>
                        <Text style={styles.equalsButtonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default HesapMakinesi;