import React, {useState} from 'react';
import PlatformSafeView from "../../components/PlatformSafeView";
import {Button, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Audio} from "expo-av";
import BasicButton from "../../components/BasicButton";
import {Recording} from "expo-av/build/Audio/Recording";

const SoundScreen = () => {
    const [sound, setSound] = useState(null);

    const [recording, setRecording] = useState(new Recording());
    // const [recordings, setRecordings] = useState([]);
    // const [message, setMessage] = useState("");
    const [playRecording, setPlayRecording] = useState(null);

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondDisplay}`;
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        });
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);

        const { sound, status } = await recording.createNewLoadedSoundAsync();
        setPlayRecording({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });
    }

    const soundObject = new Audio.Sound();

    async function playSound() {
        await soundObject.loadAsync({
            uri: 'https://file01.fpt.ai/text2speech-v5/short/2022-12-30/ce5d8fdf319441dfc911d8b978beacc6.mp3'
        });

        await soundObject.playAsync();
    }

    async function stopSound() {
        await soundObject.pauseAsync();
    }

    return (
        <SafeAreaView style={PlatformSafeView.PlatformSafeArea} className="bg-white">
            <View height={20}>
                <Text>Sound</Text>
            </View>
            <View>
                <Button title="Play sound" onPress={playSound}/>
                <Button title="Stop sound" onPress={stopSound}/>
            </View>
            <View height={40}>
                <Text>Sound</Text>
            </View>
            <BasicButton
                onPress={recording ? stopRecording : startRecording}
                title={recording ? "STOP RECORDING" : "START RECORDING"} textStyle={{fontSize: 20, fontWeight: 'bold', color: '#1e3a8a'}}
                style={{backgroundColor: 'purple', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 50}}/>
            <View height={40}>
                <Text>Play back successfully</Text>
            </View>
            <BasicButton
                onPress={() => {
                    if(playRecording != null){
                        playRecording.sound.replayAsync().then(() => {
                                console.log("Play successful");
                        })
                    }
                }}
                title="PLAY BACK" textStyle={{fontSize: 20, fontWeight: 'bold', color: '#1e3a8a'}}
                style={{backgroundColor: 'blue', paddingVertical: 20, paddingHorizontal: 50, borderRadius: 50}}/>
        </SafeAreaView>
    );
};


export default SoundScreen;