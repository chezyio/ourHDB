import singpassUi from "../../singpass.png";
import Image from "next/image";
const page = () => {
    return (
        <div>
            <Image src={singpassUi} width={100} height={100} alt="image" />
        </div>
    );
};

export default page;
