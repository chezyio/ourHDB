async function getEvent(eventId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/events/records/${eventId}`,
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
  const event = await getEvent(params.id);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="text-slate-700 dark:text-gray text-xs uppercase font-medium">
        {fault.type}
      </p>
      <p className="text-lg font-medium">{event.id}</p>
      <p className="text-2xl font-bold my-4">{event.name}</p>
      <p className="text-base ">{event.description}</p>

      <br />
    </div>
  );
};

export default page;
