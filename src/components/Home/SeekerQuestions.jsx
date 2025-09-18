import React from "react";

const SeekerQuestions = () => {
  const conversations = [
    {
      title: "The Art of Mindful Living",
      msg: "Embracing mindfulness can transform our daily routines into profound experiences of presence and gratitude...",
      name: "Emma Li",
      time: "3 days ago",
    },
    {
      title: "Harnessing the Power of Nature",
      msg: "Nature has a unique ability to soothe the soul, offering a retreat from the chaos of urban life...",
      name: "James Thompson",
      time: "1 week ago",
    },
    {
      title: "The Journey of Self-Discovery",
      msg: "Exploring our inner selves can lead to unexpected revelations and a deeper understanding of our true purpose...",
      name: "Sophia Reynolds",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-center font-bricolage bg-[#EFF1DD] relative">
      <img
        src="src/assets/Images/flowers.png"
        alt="flowers"
        className="absolute left-0 top-0 h-full opacity-60"
        style={{ transform: "scaleX(1)" }}
      />

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 p-6 md:p-10">
        {/* Left Section */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl md:text-[40px] font-semibold text-[#5B575F] uppercase tracking-wide mb-2" style={{lineHeight : "100%"}}>
            Seeking Guidance or Healing
          </h2>
          <p className="text-[#737373] text-[24px] font-semibold mb-6" style={{lineHeight : "100%" , letterSpacing : "-4%"}}>
            Feeling entangled or burdened with woes of life, Pranam
            bandhus-mentors can support and send you healing.
          </p>

          {/* Transparent Form Box */}
          <div className="rounded-2xl shadow-md border border-[#BCC571] p-6 md:p-8">
            <form className="space-y-5">
              {/* Name & Seeking For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-[#000000] text-[16px] mb-4"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jai Chachra"
                    className="w-full px-4 py-2 rounded-full border shadow-md focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="seekingFor"
                    className="block font-semibold text-[#000000] text-[16px] mb-4"
                  >
                    Seeking For
                  </label>
                  <input
                    type="text"
                    id="seekingFor"
                    placeholder="Relationship"
                    className="w-full px-4 py-2 rounded-full shadow-md border focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label
                  htmlFor="question"
                  className="block font-semibold text-[#000000] text-[16px] mb-4"
                >
                  Short Description
                </label>
                <textarea
                  id="question"
                  placeholder="This is confidential"
                  rows="1"
                  className="w-full px-4 py-2 rounded-full shadow-md border focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                />
              </div>

              {/* Attach Photo */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="photo"
                  className="block font-semibold text-[#000000] text-[16px] mb-4">
                  Attach Photo For Healing
                </label>
                <img
                  src="src/assets/Icons/icon_bag.png"
                  alt="attach"
                  className="h-4 w-4 mr-12"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-16 py-2 text-[#BCC571] text-[18px] bg-[#FFFFFFA6] shadow-md font-semibold rounded-2xl hover:opacity-90 transition uppercase"
                >
                  Receive Healing
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl md:text-[40px] font-semibold text-[#5B575F] uppercase tracking-wide mb-6" style={{letterSpacing :'0%' , lineHeight : "100%"}}>
            Recent Conversations Between Seekers and Meena Om
          </h2>

          <div className="space-y-6">
            {conversations.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-md border px-5 py-4  backdrop-blur-sm"
              >
                <h3 className="text-lg md:text-[26px] font-semibold text-[#000000]">
                  {c.title}
                </h3>
                <p className="text-[#737373] w-11/12 font-semibold mt-2 text-[16px]" style={{lineHeight : "100%" , letterSpacing : "-4%"}}>{c.msg}</p>
                <p className="text-sm text-gray-500 mt-3 text-right">
                  {c.name} <br /> {c.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerQuestions;
