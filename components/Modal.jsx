// components/Modal.jsx
import React from "react";
import Image from "next/image";
import "../app/globals.css"; // Make sure this path is correct

export default function Modal({ data, onClose, onNext, onPrev }) {
    return (
        <div className="fixed inset-0 bg-black overflow-hidden bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-2xl p-6 rounded-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black text-2xl"
                >
                    ✕
                </button>

                <h1 className="text-5xl font-paytone-custom font-extrabold text-center text-blue-900 mb-6">
                    PREVIOUS <br /> CALENDAR
                </h1>

                <div className="h-[700px]">

                    {/* Right: Info + Grid */}
                   
                        <div className="grid  grid-cols-2 auto-rows-max gap-2">
                            <div className="col-span-1">
                                <Image
                                    src={data.image}
                                    alt="Main"
                                    width={200}
                                    height={200}
                                    className="object-cover h-1/3 w-full rounded-md"
                                />
                                <Image
                                    src={data.image}
                                    alt="1"
                                    width={200}
                                    height={200}
                                    className="object-cover h-1/3 w-full rounded-md"
                                />
                            </div>
                            <div className="col-span-1">
                                <div>
                                     <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-paytone-custom text-blue-900">
                                Day 1
                            </h2>
                            <div className="text-sm text-gray-600">Saxena</div>
                        </div>
                        <div className="text-sm text-gray-600">Appurva Shah</div>

                        <p className="text-sm text-gray-500">From the archive</p>

                                </div>
                                <Image
                                    src={data.image}
                                    alt="2"
                                    width={200}
                                    height={200}
                                    className="object-cover h-1/3 w-full rounded-md"
                                />

                                <Image
                                    src={data.image}
                                    alt="4"
                                    width={200}
                                    height={200}
                                    className="object-cover h-1/3 w-full rounded-md"
                                />
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
        </div>
    );
}
