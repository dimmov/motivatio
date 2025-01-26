import Emotions from "../../components/Emotions/Emotions";
import Heading from "../../components/Heading/Heading";
import SingleEmotion from "../../components/SingleEmotion/SingleEmotion";
import EmotionsContextProvider from "../../store/emotions-context";
import UsersContextProvider from "../../store/users-context";

export default function Home() {
  return (
    <UsersContextProvider>
      <Heading />
      <EmotionsContextProvider>
        <Emotions />
        <SingleEmotion />
      </EmotionsContextProvider>
    </UsersContextProvider>
  );
}
