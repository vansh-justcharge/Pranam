import React from "react";
import arrow from '../../assets/Icons/arrow-up.png'
import heart from '../../assets/Icons/heart.png'

const Questions = () => {
  const conversations = [
    {
      name: "Joyce",
      msg: "What if this is just who I am now?",
      img: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "vinirae",
      msg: "❤️❤️",
      img: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      name: "vania",
      msg: "🥺👍🏻👍🏻",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "nia",
      msg: "Am I a burden to the people I love?",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-center  font-bricolage">
      <div
        className="w-full max-w-7xl p-6 md:p-10 relative bg-[#EFF1DD]">
          <img
            src="src/assets/Images/background.png"
            alt="flowers"
            className="absolute left-0 top-0 h-full opacity-60"
            style={{ transform: "scaleX(1)" }}
          />
        {/* Centered Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[40px] font-semibold text-[#5B575F] uppercase tracking-[0px]">
            QUESTIONS/COMMENTS
          </h2>
          <p className="mt-6 text-[#737373] text-[24px] tracking-[-4%] font-semibold leading-[100%] ">- Meena om will respond.</p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Section - Form */}
          <div className="h-full flex flex-col relative">
            <div className="rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <form className="space-y-5 h-full flex flex-col">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-semibold text-[#000000] text-[16px] mb-4"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Inshra Fatma"
                      className="w-full px-4 py-2 rounded-full border shadow-md shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-semibold text-[#000000] text-[16px] mb-4"
                    >
                      Email Id (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Inshrafatma@gmail.com"
                      className="w-full px-4 py-2 rounded-full border shadow-md shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block font-semibold text-[#000000] text-[16px] mb-4"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    placeholder="Select a category"
                    className="w-full px-4 py-2 rounded-full border shadow-md shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#BCC571] bg-[#FFFFFFA6]"
                  />
                </div>

                {/* Question */}
                <div className="flex-1">
                  <label
                    htmlFor="question"
                    className="block font-semibold text-[#000000] text-[16px] mb-4"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    placeholder="Write here....."
                    rows="2"
                    className="w-full px-6 py-4 rounded-[28px] border shadow-md shadow-black/20 focus:outline-none focus:ring-2 focus:ring-[#BCC571] h-full bg-[#FFFFFFA6]"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-10 py-2 text-[#BCC571] bg-white shadow-xl font-medium rounded-2xl hover:opacity-90 transition mt-12"
                  >
                    Submit Question
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Conversations */}
          <div className="h-full flex flex-col">
            <div className="rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md h-full flex flex-col">
              <div className="flex-1">
                {conversations.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 mb-5">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{c.name}</p>
                      <p className="text-[#000000AB]  text-[13px] italic">{c.msg}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 ">
                <div className="flex justify-between px-4 py-2 rounded-[14px] w-7/12 bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BCC571]">
                  <input
                  type="text"
                  placeholder="Comment"
                  className=""
                />
                <img src={arrow} alt="" />
                </div>
                <button className="px-1 py-1 rounded-[10px] bg-white shadow hover:opacity-80">
                  <img src={heart} height={42} width={40}></img>
                </button>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
