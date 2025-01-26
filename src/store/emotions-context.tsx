import { createContext, useState } from "react";
import { SingleEmotion } from "../types/data/EmotionCards";
import { ChildrenProps } from "../types/utils/ChildrenProps";
import useEmotionsData from "../hooks/useEmotionsData";

type EmotionsContextProps = {
  currentEmotion: SingleEmotion | undefined;
  emotions: SingleEmotion[];
  setCurrentEmotion(emotionId: string): void;
};

export const EmotionsContext = createContext<EmotionsContextProps>({
  currentEmotion: undefined,
  emotions: [],
  setCurrentEmotion: () => {},
});

export default function EmotionsContextProvider({ children }: ChildrenProps) {
  const [currentEmotion, setCurrentEmotion] = useState<SingleEmotion>();
  const { emotions, loading, error } = useEmotionsData();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  function setCurrentEmotionHandler(emotionId: string) {
    setCurrentEmotion(emotions.find((e) => e.id === emotionId));
  }

  const contextValue = {
    currentEmotion,
    emotions,
    setCurrentEmotion: setCurrentEmotionHandler,
  };
  return (
    <EmotionsContext.Provider value={contextValue}>
      {children}
    </EmotionsContext.Provider>
  );
}
