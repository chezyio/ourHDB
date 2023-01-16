import Link from "next/link";
import EventCard from "../../components/EventCard";

async function getEvents() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/events/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
        Events
      </p>
      <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {events.map((event) => {
          return (
            <Link href={`/events/${event.id}`}>
              <EventCard
                key={event.id}
                name={event.name}
                location={event.location}
                time={event.time}
              />
            </Link>
          );
        })}

        {console.log(events)}
      </div>
    </div>
  );
};

export default EventsPage;
