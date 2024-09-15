// eslint-disable-next-line react/prop-types
export default function SecondaryBtn({ content }) {
  return (
    <div className="flex justify-center mx-auto">
      <button className="px-4 py-2 border-b-4 border-b-gray-900 rounded-xl text-xl uppercase ">
        {content}
      </button>
    </div>
  );
}
