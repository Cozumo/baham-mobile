import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(props) {
    return (
        <View style={styles.footer}>
            <Text sylte={styles.copyrightStyle}> {props.copyright}
                <Text style={styles.locationStyle}>{props.location}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.075,
    },
    copyrightStyle: {
        textAlign: 'auto'
    },
    locationStyle: {
        fontStyle: 'italic'
    }
});
