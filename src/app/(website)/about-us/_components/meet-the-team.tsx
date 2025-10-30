import Image from "next/image";
import React from "react";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Anca Herman",
      image: "/assets/images/meet-1.jpg",
      title: "Specialist Orthodontist",
      desc: (
        <>
          Dr. Anca Herman is a highly skilled Specialist Orthodontist registered
          with the Irish Dental Council. She is passionate about creating
          confident, healthy smiles through precision, innovation, and
          compassionate care. <br /> <br />
          With expertise in both classical and modern orthodontic techniques,
          including clear aligners, aesthetic braces, and digital treatment
          planning, Dr. Herman combines clinical excellence with a gentle,
          patient-focused approach. She provides exceptional results in a warm,
          welcoming environment for patients of all ages.
        </>
      ),
    },
    {
      id: 2,
      name: "Dr. James Herman",
      image: "/assets/images/meet-2.jpg",
      title: "Specialist Orthodontist",
      desc: (
        <>
          Dr. James Herman is an Australian-born Specialist Orthodontist
          registered with the Irish Dental Council. He is dedicated to helping
          patients of all ages achieve their best smiles in a caring,
          family-friendly environment. <br /> <br />
          Known for his approachable manner and gentle care, Dr. Herman takes
          time to understand each patient and create personalized treatment
          plans that fit their goals and lifestyle. Combining clinical expertise
          with the latest orthodontic techniques, he delivers exceptional
          results with a calm, reassuring approach that builds confidence.
        </>
      ),
    },
    {
      id: 3,
      name: "Andrei",
      image: "/assets/images/meet-3.jpg",
      title: "Treatment Coordinator and Orthodontic Nurse",
      desc: (
        <>
          Our Treatment Coordinator, Andrei, is here to guide you through every
          step of your orthodontic journey. He supports the doctors during
          appointments and ensures every patient feels comfortable and at ease.{" "}
          <br /> <br />
          From assisting with procedures to offering guidance on caring for
          braces or aligners, Andrei is always ready with a reassuring smile. He
          helps with scheduling, explains treatment options, and manages
          payments, making your experience smooth, clear, and stress-free.
          Friendly and approachable, Andrei is always happy to answer your
          questions.
        </>
      ),
    },
    {
      id: 4,
      name: "Alison",
      image: "/assets/images/meet-4.jpg",
      title: "Receptionist and Nurse",
      desc: (
        <>
          Our receptionist, Alison, is the friendly face who greets you when you
          arrive at Perrystown Orthodontics. Warm, approachable, and always
          cheerful, she ensures every visit begins with a welcoming smile.{" "}
          <br /> <br />
          Alison is here to help with scheduling, answer your questions, and
          make sure your experience is smooth and enjoyable from start to
          finish. Dedicated to creating a positive atmosphere, she loves getting
          to know patients and making everyone—children, teens, and adults
          alike—feel comfortable and at home.
        </>
      ),
    },
  ];
  return (
    <div className="pb-10 md:pb-16 lg:pb-24">
      <div className="container">
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-[#202020] leading-[150%] font-semibold text-center">
          Meet The Team
        </h2>
        <p className="text-sm md:text-base text-[#373737] text-center pt-2 leading-[150%] font-normal">
          Our diverse team combines expertise in finding your problem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 pt-8 md:pt-12 lg:pt-12">
            {
                teamMembers?.map((member)=>{
                    return <div key={member?.id} className="">
                        <Image src={member?.image} alt={member?.name} width={1000} height={1000} className="w-full h-[300px] object-cover rounded-t-[8px]"/>
                        <div className="bg-white p-4 rounded-b-[8px]">
                            <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#202020] leading-[150%]">{member?.name}</h3>
                            <h5 className="text-sm font-medium text-primary leading-[120%] py-2 md:py-[10px]">{member?.title}</h5>
                            <p className="text-xs font-normal text-[#656565] leading-[120%] text-justify">{member?.desc}</p>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
