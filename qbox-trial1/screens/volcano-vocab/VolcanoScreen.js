import React from 'react';
import {Text, View} from "react-native";
import AnimatedLottieView from "lottie-react-native";

const VolcanoScreen = () => {
    const animation = React.useRef(null);

    React.useEffect(() => {
        animation.current.play(0, 200);
    }, [])

    return (
        <View>
            <AnimatedLottieView
                ref={animation}
                style={{width: 100, height: 100, marginLeft: 20}}
                source={require('qbox-trial1/assets/lottie/temp/coins.json')}
                autoPlay={false}
                loop={false}
            />
        </View>
    );
};

export default VolcanoScreen;