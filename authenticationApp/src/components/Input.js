import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function Input({
    label,
    iconName,
    error,
    password,
    onFocus = () => { },
    ...props
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.input_container,
            {
                borderColor:
                    error ? "red" : isFocused ? "green" : "#eeeff1"
            }
            ]}>
                <Icon name={iconName} style={styles.icon} />
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    style={styles.input_text}
                    {...props}
                />
                {
                    password && (
                        <Icon
                            onPress={() => {
                                setHidePassword(!hidePassword)
                            }}
                            name={hidePassword ? 'eye-slash' : "eye"}
                            style={{ fontSize: 20 }}
                        />
                    )
                }
            </View>
            {
                error && <Text style={styles.err}>{error}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: "grey"
    },
    input_container: {
        height: 55,
        backgroundColor: "#eaf4f4",
        paddingHorizontal: 15,
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 22,
        marginRight: 10
    },
    input_text: {
        flex: 1,
    },
    err: {
        fontSize: 12,
        color: "red",
        marginTop: 7
    }
})

export default Input;