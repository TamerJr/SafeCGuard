import React from "react";

const BooksShilf = () => {
  const aboutUs = [
    {
      name: "Our vesion",
      description:
        "we believe that everyone has the potential to improve themselves and achieve their goals. That's why we specialize in books that help individuals learn about self-improvement, personal growth, and achieving success.",
    },
    {
      name: "Our Team",
      description:
        "Our team of experts includes psychologists, life coaches, and experienced individuals who have firsthand knowledge of the challenges and opportunities of personal growth. We carefully curate our selection of books to ensure that they are informative, engaging, and easy to understand.",
    },
    {
      name: "How we help",
      description:
        "Whether you're looking to improve your career, relationships, health, or overall well-being, our books can help you achieve your goals. From mindfulness to productivity, from communication to leadership, we have the resources you need to unlock your full potential.",
    },
    {
      name: "Keep in touch",
      description:
        "We are committed to providing exceptional customer service and support. If you have any questions or concerns about our products, please don't hesitate to contact us. We are here to help you every step of the way.",
    },
    {
      name: "Thanks",
      description:
        "Thank you for choosing SafeGuard as your trusted source for self-improvement resources. We look forward to helping you achieve your goals and live your best life.",
    },
  ];
  return (
    <section className="w-full mt-20">
      <div className="relative text-center">
        <h2 className="text-2xl font-bold md:text-4xl  before:w-4 before:h-2 before:rounded-sm before:top-1/3 md:before:left-1/3  md:before:absolute before:bg-orange-500 md:after:absolute after:bg-orange-500 md:after:right-1/3   after:w-4 after:h-2 after:rounded-sm after:top-1/3">
          Who we are
        </h2>
      </div>
      <div className="flex justify-center items-center relative mt-12 text-center md:text-left md:w-10/12 md:m-auto">
        <div className="flex md:justify-start md:items-start flex-col  gap-4">
          <h4 className="font-bold text-xl before:w-8 before:h-1 before:mt-1 before:bg-orange-500 md:before:absolute before:top-6">
            {aboutUs[0].name}
          </h4>
          <p className="text-slate-600 md:w-5/6">{aboutUs[0].description}</p>
        </div>
      </div>
      <div className="w-full flex  md:flex-row  flex-col justify-center  items-center flex-wrap mt-12 gap-12 shadow-lg">
        {aboutUs?.slice(1, aboutUs.length)?.map((part, index) => (
          <div className="flex md:justify-start md:items-start m-0 p-0 flex-col md:text-left justify-center items-center text-center  gap-4 md:w-5/12 relative w-full" key={index} >
            <h4 className="font-bold text-xl before:w-8 before:h-1 before:mt-1 before:bg-orange-500 md:before:absolute before:top-6 ">
              {part.name}
            </h4>
            <p className="text-slate-600 w-5/6">{part.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksShilf;
