export default function PrimaryButton({ text }) {
  return (
    <>
      <button className="w-4/6 px-4 py-2 mx-auto mt-16 text-lg font-bold text-white transition-all bg-pink-800 rounded-full hover:scale-110 hover:bg-pink-900">
        {text}
      </button>
    </>
  );
}
