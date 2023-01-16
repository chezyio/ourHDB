async function getFault(faultId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/faults/records/${faultId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  const data = await res.json();
  return data;
}

const page = async ({ params }: any) => {
  const fault = await getFault(params.id);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="text-slate-700 dark:text-gray text-xs uppercase font-medium">
        {fault.type}
      </p>
      <p className="text-lg font-medium">{fault.id}</p>
      <p className="text-2xl font-bold my-4">{fault.name}</p>
      <p className="text-base ">{fault.description}</p>
      <p className="text- font-bold">{fault.estimated} days</p>

      <br />

      <p className="text-base ">Has this been fixed?</p>
      <button className="bg-rose-500 hover:bg-rose-400 text-white py-2 px-6 rounded-full text-sm">
        Fixed
      </button>
    </div>
  );
};

export default page;
