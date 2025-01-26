import { SingleEmotion } from "../../types/data/EmotionCards";
import Tooltip from "../Tooltip/Tooltip";

type Props = {
  emotion: SingleEmotion;
  onStartEmotion(emotionId: string): void;
};

export default function EmotionCard({ emotion, onStartEmotion }: Props) {
  function onStartEmotionHandler() {
    onStartEmotion(emotion.id);
  }
  return (
    <li
      className="flex justify-between m-5 cursor-pointer"
      onClick={onStartEmotionHandler}
    >
      <Tooltip title={emotion.title}>
        <div className="border border-blue-500 w-full rounded-lg">
          <h2 className="text-6xl">{emotion.emoji}</h2>
        </div>
      </Tooltip>
    </li>
  );
}
