import PocketBase from "pocketbase";

import {
    BoltIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    StarIcon,
    UserCircleIcon,
    ComputerDesktopIcon,
    MapIcon,
    ScaleIcon,
} from "@heroicons/react/24/outline";

import FaultCard from "../components/FaultCard";
import undraw_2 from "../undraw_2.svg";

import Avatar from "../avatar.jpeg";
import Image from "next/image";
import Link from "next/link";

async function getFaults() {
    const res = await fetch(
        "http://127.0.0.1:8090/api/collections/faults/records",
        { cache: "no-store" }
    );
    const data = await res.json();
    return data?.items as any[];
}
async function getEvents() {
    const res = await fetch(
        "http://127.0.0.1:8090/api/collections/events/records",
        { cache: "no-store" }
    );
    const data = await res.json();
    return data?.items as any[];
}

const features = [
    {
        name: "Simple yet powerful",
        description:
            "OurHBD allows residents to perform a multitude of tasks that improve quality of life or report any faults that have occured in their estate, connect with neighbours digitally like never before with the use of technology and see the events available in one’s neighbourhood easily at a glance.",
        icon: GlobeAltIcon,
    },
    {
        name: "Check Carpark Anywhere",
        description:
            "OurHDB operates 24/7 to help drivers find a perfect place to park their vehicle. Based on live data from over 2000 carparks with more than 660,000 parking lots, our service supports more than 500,000 unique motorists who make more than 2,5 million daily transactions around Singapore.",
        icon: ScaleIcon,
    },
    {
        name: "Fault Reporting made Simpler",
        description:
            "OurHDB allows residents to report any faults in their estate. Making it a breeze for residents to submit requests, reducing the amount of time taken for maintenance to be completed. Fields such as name and block do not need to be filed in as OurHDB takes information from your account and completes the relevant fields for you.",
        icon: BoltIcon,
    },
    {
        name: "Host Events and More",
        description:
            "With OurHDB, residents are able to find and host events in their own respective neighbourhoods. Allowing them to further connect with their neighbours. OurHDB also supports many online interest groups and communities which lets like-minded individuals to more easily find each other and bond.",
        icon: DevicePhoneMobileIcon,
    },
];
const features2 = [
    {
        name: "Ownership",
        description:
            "OurCarpark allows residents to take ownership of their own estates carpark by being able to monitor the state and improve it by providing feedback or reporting faults.",
        icon: UserCircleIcon,
    },
    {
        name: "Monitor Carparks Easily",
        description:
            "Allows Resident to monitor carparks comfortably straight from their mobile devices. Data from each carpark is updated in real time and provides an accurate way to plan one’s route.",
        icon: ComputerDesktopIcon,
    },
    {
        name: "Save your Favourites",
        description:
            "OurCarpark allows residents to set their default, favourites or most frequently visited carparks. Making accessing the information from these carparks more seamlessly.",
        icon: StarIcon,
    },
    {
        name: "Islandwide Accessibility",
        description:
            "Be able to see details for every public carpark across the island no matter where you are.",
        icon: MapIcon,
    },
];

const callouts = [
    {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
            "https://www.mynicehome.gov.sg/wp-content/uploads/2021/05/HdB-estate-in-Punggol.jpg",
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
    },
    {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
];

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function HomePage() {
    // const authData = await pb
    //   .collection("users")
    //   .authWithPassword("admin", "password");

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);

    const faults = await getFaults();
    const events = await getEvents();

    return (
        <div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="">
                    <div className="flex items-center">
                        <div className="mr-14">
                            <p className="text-xl md:text-lg font-medium text-slate-900 dark:text-white mb-2">
                                Welcome!
                            </p>

                            <p className="text-4xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                John Doe
                            </p>
                        </div>
                        <Image
                            src={Avatar}
                            width={140}
                            height={140}
                            className="rounded-full"
                            alt="image"
                        />
                    </div>
                </div>
                <div className="">
                    <Image src={undraw_2} width={600} alt="image" />
                </div>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-16 bg-gray-100 rounded-2xl">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Under Maintenance
                </p>
                <div className="grid gap-2">
                    {faults.map((fault) => {
                        return (
                            <Link href={`/faults/${fault.id}`} key={fault.id}>
                                <FaultCard
                                    key={fault.id}
                                    name={fault.name}
                                    description={fault.description}
                                    estimated={fault.estimated}
                                    type={fault.type}
                                    icon="https://images.unsplash.com/photo-1527465094057-db061fdbfaf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
            {/* projects section */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What is OurHDB?
                    </h2>
                    <p className="mt-4 text-gray-500">
                        OurHDB is a initiative created to help residents living
                        in HDBs with common daily tasks and make it easier to
                        solve frequent issues that many of the residents may
                        face and give them a platform that is easy to use yet
                        powerful.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="border-t border-gray-200 pt-4"
                            >
                                <dt className="font-medium text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://www.mynicehome.gov.sg/wp-content/uploads/2021/05/HdB-estate-in-Punggol.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://www.mynicehome.gov.sg/wp-content/uploads/2020/07/1-2-3-1024x682.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://mustsharenews.com/wp-content/uploads/2022/07/dawson-hdb-3.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://thesmartlocal.com/wp-content/uploads/2022/02/hdb-rooftop-garden-5.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-rose-500">
                        OurCarpark
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Parking made Easy
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        OurCarpark allows residents to check available lots at
                        any carpark across the island, making planning ahead
                        much more convenient.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features2.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white sm:shrink-0">
                                    <feature.icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-lg font-semibold leading-8 text-gray-900">
                                        {feature.name}
                                    </p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Popular Events
                    </h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {events.map((event) => (
                            <Link href={`/events/${event.id}`} key={event.id}>
                                <div
                                    key={event.name}
                                    className="group relative"
                                >
                                    {/* <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src="https://www.mynicehome.gov.sg/wp-content/uploads/2021/05/HdB-estate-in-Punggol.jpg"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div> */}

                                    <div className="flex justify-between mt-4">
                                        <div>
                                            <p className=" text-lg font-bold text-black">
                                                {event.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {event.location}
                                            </p>
                                        </div>
                                        <p className="text-sm font-heavy">
                                            {event.time}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
