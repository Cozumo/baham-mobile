import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

const FeedbackForm =()=>{
    const [feedback,setfeedback] = useState('');

    const handleFeedChange=(value)=>{
        setfeedback(value)
    }

    return(
        <View style={styles.feedbackContainer}>
            <Text>Enter Feedback : </Text>
            <TextInput
                value={feedback}
                multiline
                placeholder="Thoughts about Baham!"
                onChangeText={handleFeedChange}
                keyboardType={"default"}
            />

            <Button 
                title="Submit" 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    feedbackContainer: {
        backgroundColor: 'gray',
        padding: 20
    },
});

export default FeedbackForm;