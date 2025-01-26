import { Collection } from "../utils/utils";
export enum EmotionType {
  "HAPPINESS" = "happiness",
  "SADNESS" = "sadness",
  "FEAR" = "fear",
  "ANGER" = "anger",
  "SURPRISE" = "surprise",
  "DISGUST" = "disgust",
}
export enum EmotionEmoji {
  "HAPPINESS" = "😊",
  "SADNESS" = "😢",
  "FEAR" = "😨",
  "ANGER" = "😠",
  "SURPRISE" = "😲",
  "DISGUST" = "🤢",
}

export type SingleEmotion = {
  id: string;
  title: string;
  description: string;
  type: EmotionType;
  selected: number;
  imageUrl: string;
  emoji: EmotionEmoji;
};

export type EmotionsData = Collection<SingleEmotion>;
