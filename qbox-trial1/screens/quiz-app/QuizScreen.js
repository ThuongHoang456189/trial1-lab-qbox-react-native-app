import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, ImageBackground, SafeAreaView, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import QuizContainer from "../../components/quiz-app/QuizContainer";
// import QuestionSlide from "../../components/quiz-app/QuestionSlide";
import KanmuriSquareBox from "../../components/kanji-puzzle-app/radicals/KanmuriSquareBox";
import {getFittingImageSizes} from "../../utils/GetFittingImageSizes";
import {ScrollView} from "react-native-gesture-handler";
import shinnyou from "../../assets/kanji-radicals/shinnyou.png";


const { height } = Dimensions.get("window");

const QuizLoadingScreen = () => {
    const navigator = useNavigation();

    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

    const bambooSnowBg = require('qbox-trial1/assets/kanji-radicals-background/bamboo_snow.jpg');

    const shinnyou = require('qbox-trial1/assets/kanji-radicals/shinnyou.png');
    const edgeWidth = 200;

    const {'resizedHeight':rh, 'resizedWidth':rw} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(shinnyou).height,
        Image.resolveAssetSource(shinnyou).width,1);

    const madare = require('qbox-trial1/assets/kanji-radicals/madare.png');

    const {'resizedHeight':rh1, 'resizedWidth':rw1} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(madare).height,
        Image.resolveAssetSource(madare).width,1);

    const kakushigamae = require('qbox-trial1/assets/kanji-radicals/kakushigamae.png');
    const {'resizedHeight':rh2, 'resizedWidth':rw2} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(kakushigamae).height,
        Image.resolveAssetSource(kakushigamae).width,1);

    const mongamae = require('qbox-trial1/assets/kanji-radicals/mongamae.png');
    const {'resizedHeight':rh3, 'resizedWidth':rw3} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(mongamae).height,
        Image.resolveAssetSource(mongamae).width,1);

    const magarigawa = require('qbox-trial1/assets/kanji-radicals/magarigawa.png');
    const {'resizedHeight':rh4, 'resizedWidth':rw4} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(magarigawa).height,
        Image.resolveAssetSource(magarigawa).width,1);

    const takumi = require('qbox-trial1/assets/kanji-radicals/takumi.png');
    const {'resizedHeight':rh5, 'resizedWidth':rw5} = getFittingImageSizes(
        edgeWidth,
        edgeWidth,
        Image.resolveAssetSource(takumi).height,
        Image.resolveAssetSource(takumi).width,1);

    

    return (
        <ScrollView>
            <QuizContainer navigator={navigator}>
                <View height={100}>
                    <Text>Lalala</Text>
                </View>
                <KanmuriSquareBox edgeWidth={200} topRatio={0.35} radical={"takekanmuri"} bgRadical={"#C026D3"}>
                    <View height={0.65*200} width={200} className="items-center justify-center">
                        <KanmuriSquareBox height={0.65*200} width={200} topRatio={0.1} radical={"ichi"} radicalScale={0.9} anotherRadical={"dai"}/>
                    </View>
                </KanmuriSquareBox>

                <View height={20}>
                    <Text>Sound</Text>
                </View>

                <View height={20}>
                    <Text>Nyou</Text>
                </View>
                <View height={200} width={200} className="flex-row-reverse bg-blue-300">
                    <ImageBackground source={bambooSnowBg} imageStyle={{opacity:0.9}}>
                        <Image source={shinnyou} style={{height: rh, width: rw}}/>
                    </ImageBackground>
                    <View height={148} width={140} className="absolute bg-yellow-400">

                    </View>
                </View>

                <View height={20}>
                    <Text>Takumi</Text>
                </View>
                <View height={200} width={200} className="bg-blue-300 justify-center items-center">
                    <Image source={takumi} style={{height: rh5, width: rw5}}/>
                </View>

                {/*<View height={20}>*/}
                {/*    <Text>Tare</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-col-reverse items-end bg-blue-300">*/}
                {/*    <View height={150} width={150} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={madare} style={{height: rh1, width: rw1}}/>*/}
                {/*</View>*/}

                <View height={20}>
                    <Text>Keigamae</Text>
                </View>
                <View height={200} width={200} className="flex-col-reverse items-center bg-blue-300">
                    <View height={118} width={95} className="absolute bg-yellow-400">

                    </View>
                    <Image source={mongamae} style={{height: rh3, width: rw3}}/>
                </View>

                {/*<View height={20}>*/}
                {/*    <Text>Kunigamae</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-col items-center justify-center bg-blue-300">*/}
                {/*    <View height={150} width={150} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={madare} style={{height: rh1, width: rw1}}/>*/}
                {/*</View>*/}

                {/*<View height={20}>*/}
                {/*    <Text>Tsukuri</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-row-reverse bg-blue-300">*/}
                {/*    <View width={100} height={200} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={madare} style={{height: rh1, width: rw1}}/>*/}
                {/*</View>*/}

                {/*<View height={20}>*/}
                {/*    <Text>Hen</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-row bg-blue-300">*/}
                {/*    <View width={100} height={200} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={madare} style={{height: rh1, width: rw1}}/>*/}
                {/*</View>*/}

                {/*<View height={20}>*/}
                {/*    <Text>Ashi</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-col-reverse bg-blue-300">*/}
                {/*    <View height={50} width={200} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={madare} style={{height: rh1, width: rw1}}/>*/}
                {/*</View>*/}

                {/*<View height={20}>*/}
                {/*    <Text>Parallel</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-row bg-blue-300">*/}
                {/*    <View width={100} className="bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <View className="flex-grow bg-green-300">*/}

                {/*    </View>*/}
                {/*    <View width={30} className="bg-yellow-400">*/}

                {/*    </View>*/}
                {/*</View>*/}

                {/*<View height={20}>*/}
                {/*    <Text>Hakogamae</Text>*/}
                {/*</View>*/}
                {/*<View height={200} width={200} className="flex-col items-end justify-center bg-blue-300">*/}
                {/*    <View height={150} width={150} className="absolute bg-yellow-400">*/}

                {/*    </View>*/}
                {/*    <Image source={kakushigamae} style={{height: rh2, width: rw2}}/>*/}
                {/*</View>*/}
            </QuizContainer>
        </ScrollView>
    );
};

export default QuizLoadingScreen;