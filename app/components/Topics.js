"use client";
import Image from "next/image";
import Button from "./Buttons";

// icons
import ai from "@/public/topics/ai.png"
import blockchain from "@/public/topics/blockchain.png"
import cloud from "@/public/topics/cloud.png"
import gamify from "@/public/topics/gamify.png"
import ar from "@/public/topics/ar.png"
import chatbot from "@/public/topics/chatbot.png"
import robotics from "@/public/topics/robotics.png"
import finance from "@/public/topics/finance.png"
import ml from "@/public/topics/ml.png"
import data from "@/public/topics/data.png"
import energy from "@/public/topics/energy.png"
import entertainment from "@/public/topics/entertainment.png"

import pattern1 from "@/public/topics/pattern1.png"
import pattern2 from "@/public/topics/bulb.png"









export default function Topics() {
    return (
        <section className='py-28 bg-black'>
            <div className='bg-white py-20 px-3 lg:px-32 max-w-6xl mx-auto rounded-none lg:rounded-3xl'>
                <h1 className="capitalize text-4xl font-bold leading-[47.82px]">hot topics we have in store for you.</h1>

                <p className="text-2xl max-w-2xl py-8">We have prepared a list of topics and speakers ready for you. we cooked🔥 and we are ready to serve.</p>

                <div className="space-y-10 relative mt-6">
                    <div className="absolute -right-24 top-0" >
                        <Image src={pattern1} width={85} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                        <Button bg="bg-[#E1EFFF]">
                            <Image src={ai} width={29} /><span className="text-sm font-semibold">AI/ML</span>
                        </Button>
                        <Button bg="bg-[#FEF6CB]">
                            <Image src={blockchain} width={29} /><span className="text-sm font-semibold">Blockchain</span>
                        </Button>

                        <Button bg="bg-[#D1FFC6]">
                            <Image src={cloud} width={29} /><span className="text-sm font-semibold">Cloud<br></br>Computing</span>
                        </Button>

                        <Button bg="bg-[#D1FFC6]">
                            <Image src={gamify} width={29} /><span className="text-sm font-semibold">Gamification</span>
                        </Button>
                    </div>




                    <div className=" relative lg:left-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
                            <Button bg="bg-[#E1EFFF]">
                                <Image src={ar} width={29} /><span className="text-sm font-semibold">AR/VR</span>
                            </Button>
                            <Button bg="bg-[#FEF6CB]  ">
                                <Image src={chatbot} width={29} /><span className="text-sm font-semibold">Chatbot</span>

                            </Button>
                            <Button bg="bg-[#E1EFFF]">
                                <Image src={robotics} width={29} /><span className="text-sm font-semibold">Robotics/IOTs</span>

                            </Button>
                            <Button bg="bg-[#D2FFC6]">
                                <Image src={finance} width={29} /><span className="text-sm font-semibold">Finance/IOTs</span>
                            </Button>
                        </div>
                    </div>




                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
                        <Button bg="bg-[#D2FFC6]">
                            <Image src={ml} width={29} /><span className="text-sm font-semibold">Soft SKills</span>
                        </Button>
                        <Button bg="bg-[#D2FFC6]">
                            <Image src={data} width={29} /><span className="text-sm font-semibold">Data Analysis</span>
                        </Button>
                        <Button bg="bg-[#FFDECF]">
                            <Image src={energy} width={29} /><span className="text-sm font-semibold">Energy</span>
                        </Button>
                        <Button bg="bg-[#FEF6CB]">
                            <Image src={entertainment} width={29} /><span className="text-sm font-semibold">Entertainment</span>
                        </Button>

                    </div>

                    <div className="absolute -right-24 bottom-3" >
                        <Image src={pattern2} width={85} />
                    </div>
                </div>
            </div>
        </section >
    )
}
