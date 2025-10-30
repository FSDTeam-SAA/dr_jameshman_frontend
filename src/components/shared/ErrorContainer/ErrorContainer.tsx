
import Image from "next/image";

interface ErrorContainerProps {
  message: string;
}

const ErrorContainer = ({ message }: ErrorContainerProps) => {
  return (
    <div className="container py-10">
      <div className="flex h-[400px] w-full flex-col items-center justify-center bg-white">
        <Image src="/assets/images/404.png" alt="404" width={1000} height={1000} className="w-[150px] h-[150px] object-cover"/>
        <h3 className="mt-2 text-2xl md:text-3xl text-black font-semibold">{message}</h3>
      </div>
    </div>
  );
};

export default ErrorContainer;