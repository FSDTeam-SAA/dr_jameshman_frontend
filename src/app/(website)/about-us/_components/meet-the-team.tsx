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
          With extensive experience in both classical and modern orthodontic
          techniques including clear aligners, aesthetic and conventional
          braces, and advanced digital treatment planning. Dr. Anca combines
          meticulous attention to detail with a calm, reassuring approach.{" "}
          <br /> <br />
          Her philosophy centres on patient comfort and collaboration. She
          believes every smile is unique and takes the time to understand each
          patient’s goals, tailoring treatments to deliver natural, lasting
          results. Dedicated to continuous professional development, Dr. Anca
          remains at the forefront of orthodontic innovation to ensure her
          patients receive the highest standard of care in a friendly, welcoming
          environment.
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
          Known for his approachable manner and gentle care, Dr. James takes the
          time to get to know each patient and works closely with them to design
          personalised treatment plans that suit their goals and lifestyle. His
          calm, reassuring approach helps make every visit a positive and
          comfortable experience. <br /> <br />
          Dr. James combines his clinical expertise with the latest orthodontic
          techniques and technologies to deliver excellent results for children,
          teens, and adults alike.
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
          Our Treatment Coordinator is here to guide you through every step of
          your orthodontic journey. He supports the doctors during appointments
          and ensures every patient feels comfortable and at ease. He help with
          procedures, offer guidance on caring for braces or aligners, and is
          always ready with a reassuring smile for children, teens, and adults
          alike. <br /> <br />
          From scheduling appointments to explaining treatment options and
          helping with payments, Andrei makes sure your experience is smooth,
          clear, and stress-free. He is your friendly first point of contact and
          always happy to answer questions.
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
          Our Receptionist is the friendly face you’ll see when you first arrive
          at Perrystown Orthodontics. She is here to welcome you, answer your
          questions, help with appointments, and make sure your visit is as
          smooth and enjoyable as possible. <br />
          Always approachable and cheerful, Alison is the first smile you’ll
          encounter and she loves making every patient feel at home.
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
          {teamMembers?.map((member) => {
            return (
              <div key={member?.id} className="h-auto bg-white rounded-b-[8px]">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  width={1000}
                  height={1000}
                  className="w-full h-[300px] object-cover rounded-t-[8px]"
                />
                <div className=" p-4 ">
                  <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#202020] leading-[150%]">
                    {member?.name}
                  </h3>
                  <h5 className="text-sm font-medium text-primary leading-[120%] py-2 md:py-[10px]">
                    {member?.title}
                  </h5>
                  <p className="text-xs font-normal text-[#656565] leading-[120%] text-justify">
                    {member?.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
