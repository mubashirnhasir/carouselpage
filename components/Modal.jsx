// components/Modal.jsx
import React from "react";
import Image from "next/image";
import "../app/globals.css"; // Make sure this path is correct

export default function Modal({ data, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl"
        >
          ✕
        </button>

        <h1 className="text-5xl font-paytone-custom font-extrabold text-center text-blue-900 mb-6">
          PREVIOUS <br /> CALENDAR
        </h1>
        <div className="lg:h-[500px] xl:h-[650px]">
          <div className="grid gap-4  grid-cols-3 ">
            <div className="col-span-1 space-y-4">
              <div>
                <Image
                  src={data?.image}
                  alt="Main"
                  width={1000}
                  height={1000}
                  className="object-cover w-full xl:h-[300px] lg:h-[250px]"
                />
              </div>
              <div>
                <Image
                  src={data?.image}
                  alt="1"
                  width={1000}
                  height={1000}
                  className="object-cover w-full xl:h-[306px] lg:h-[250px]"
                />
              </div>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-paytone-custom text-blue-900">
                    Day 1
                  </h2>
                  <div className="text-sm text-[#020C4C] font-paytone-custom">Saxena</div>
                </div>
                <div className="text-sm text-[#020C4C] font-paytone-custom">Appurva Shah</div>
              </div>
              <div>
                <p className="text-sm font-poppins-custom font-semibold text-[20px] text-[#020C4C]">
                  From the archive
                </p>

                <Image
                  src={data?.image}
                  alt="2"
                  width={1000}
                  height={1000}
                  className="object-cover  w-full xl:h-[200px] lg:h-[150px] "
                />
              </div>
              <div>
                <Image
                  src={data?.image}
                  alt="4"
                  width={1000}
                  height={1000}
                  className="object-cover  w-full xl:h-[305px] lg:h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onNext}
            className="text-blue-900 font-paytone-custom text-xl"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
