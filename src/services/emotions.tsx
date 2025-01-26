import { EMOTIONS_DATA } from "../data/Emotions";
import { SingleEmotion } from "../types/data/EmotionCards";
import { Collection } from "../types/utils/utils";
import { clientGET } from "../utils/api/methods";

export function fetchEmotions() {
  return Promise.resolve(EMOTIONS_DATA);

  return clientGET<Collection<SingleEmotion>>({
    path: "emotions",
  });
}
