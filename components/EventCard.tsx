const EventCard = ({ name, location, time }: any) => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src="https://images.unsplash.com/photo-1609731169878-93aecfda8779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>{name}</a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{location}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
