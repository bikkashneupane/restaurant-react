export const ContactUs = () => {
  return (
    <div className="p-2 flex justify-center items-center gap-1 flex-col w-full">
      <h1 className="font-bold text-2xl">Contact Use Page</h1>

      <form action="" className="flex flex-col gap-2  w-1/3">
        <input
          type="text"
          placeholder="Name"
          className="border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 rounded"
        />
        <textarea
          rows={5}
          placeholder="Message"
          className="border px-4 py-2 rounded"
        />
        <button className="border rounded px-4 py-2 bg-blue-700 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
