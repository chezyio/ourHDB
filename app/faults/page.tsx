import Link from "next/link";
import FaultCard from "../../components/FaultCard";

import CreateFault from "./CreateFault";

async function getFaults() {
    const res = await fetch(
        "http://127.0.0.1:8090/api/collections/faults/records",
        { cache: "no-store" }
    );
    const data = await res.json();
    return data?.items as any[];
}

const Fault = async () => {
    const faults = await getFaults();

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Faults
            </p>
            <div className="grid gap-4">
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
            <CreateFault />
        </div>
    );
};

export default Fault;
