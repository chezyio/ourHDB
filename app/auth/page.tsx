import singpassUi from "../../singpass.png";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Image src={singpassUi} width="100vw" height="100vh" />
    </div>
  );
};

export default page;
