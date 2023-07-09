const EventCard = ({ name, location, time }: any) => {
    return (
        <div className="flex flex-col align-middle justify-center">
            <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"></div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <p className="mt-1 text-sm text-gray-500">{location}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{time}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
