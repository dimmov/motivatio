import { useContext } from "react";
import Button from "../Button/Button";
import LoadingBar from "../LoadingBar/LoadingBar";
import EmotionImage from "../EmotionImage/EmotionImage";
import { EmotionsContext } from "../../store/emotions-context";

export default function SingleEmotion() {
  const { currentEmotion, setCurrentEmotion } = useContext(EmotionsContext);

  if (!currentEmotion) {
    return <div>No Emotion selected</div>;
  }

  function onCloseEmotionHandler() {
    setCurrentEmotion("");
  }

  return (
    <div className="border border-blue-500 p-2 m-5 rounded-lg">
      <div className="flex items-center justify-center">
        <EmotionImage emotion={currentEmotion.emoji} />
        <Button onClick={onCloseEmotionHandler}>Close</Button>
      </div>
      <LoadingBar />
      <div>
        <h2>{currentEmotion.title}</h2>
        <p>{currentEmotion.description}</p>
      </div>
      <Button onClick={onCloseEmotionHandler}>Close</Button>
    </div>
  );
}
