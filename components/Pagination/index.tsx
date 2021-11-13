export default function Pagination() {
  return (
    <div className="flex space-x-2 mt-5 justify-end">
      <div className="w-10 h-10 rounded-full bg-white text-purple-800 flex items-center justify-center opacity-10">
        &lt;
      </div>
      <div className="w-10 h-10 rounded-full bg-yellow-200 text-purple-800 items-center flex justify-center">
        1
      </div>
      <div className="w-10 h-10 rounded-full items-center flex justify-center">
        2
      </div>
      <div className="w-10 h-10 rounded-full items-center flex justify-center">
        3
      </div>
      <div className="w-10 h-10 rounded-full items-center flex justify-center">
        4
      </div>
      <div className="w-10 h-10 rounded-full items-center flex justify-center">
        ...
      </div>
      <div className="w-10 h-10 rounded-full items-center flex justify-center">
        6
      </div>
      <div className="w-10 h-10 rounded-full bg-white text-purple-800 items-center flex justify-center">
        &gt;
      </div>
    </div>
  );
}
