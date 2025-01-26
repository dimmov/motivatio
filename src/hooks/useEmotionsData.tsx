import { useEffect, useState } from "react";
import { SingleEmotion } from "../types/data/EmotionCards";
import { fetchEmotions } from "../services/emotions";
import { AxiosError } from "axios";

export default function useEmotionsData() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [emotions, setEmotions] = useState<SingleEmotion[]>([]);

  const loadEmotions = async () => {
    try {
      const allEmotions = await fetchEmotions();
      setEmotions(allEmotions.items);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmotions();
  }, []);

  return {
    loading,
    error,
    emotions,
  };
}
