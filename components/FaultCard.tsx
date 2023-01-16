import Image from "next/image";

const FaultCard = ({ name, icon, description, estimated, type }: any) => {
  return (
    <div className="bg-rose-100 dark:bg-slate-800 rounded-lg px-6 py-4 mb-4 flex flex-col">
      <div>
        <p className="text-slate-700 dark:text-gray text-xs uppercase font-medium">
          {type}
        </p>

        <div className="flex justify-between">
          <div>
            <p className="text-slate-900 dark:text-white text-xl font-bold">
              {name}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {description}
            </p>
          </div>
          <div className="flex justify-items-end flex-col">
            <p className="text-xl font-bold">{estimated}</p>
            <p className="text-slate-700 dark:text-slate-400 text-md">days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaultCard;
