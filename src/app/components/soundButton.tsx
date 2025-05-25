export default function SoundButton({ text }: { text: string }) {
  const playSound = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={playSound} className="mt-2 bg-green-400 px-4 py-2 rounded-full">
      🔊 Écouter
    </button>
  );
}
