import { useContext } from "react";
import { EmotionsContext } from "../../store/emotions-context";
import EmotionCard from "../EmotionCard/EmotionCard";

export default function Emotions() {
  const { emotions, setCurrentEmotion } = useContext(EmotionsContext);

  function startEmotionHandler(emotionId: string) {
    setCurrentEmotion(emotionId);
  }
  return (
    <ul className="flex flex-wrap justify-between">
      {emotions.map((emotion) => (
        <EmotionCard
          key={emotion.id}
          emotion={emotion}
          onStartEmotion={startEmotionHandler}
        />
      ))}
    </ul>
  );
}
