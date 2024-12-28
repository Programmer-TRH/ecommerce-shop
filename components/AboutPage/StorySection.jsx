import React from 'react'
import Title from '../Common/Title'
import Image from 'next/image'
import AboutImg from "@/public/AboutUsImg.png"

export default function StorySection() {
    return (
        <>
            <Title text="Our Story" className="text-start" />
            <div className='flex items-center justify-between w-full flex-col-reverse sm:flex-row *:w-full *:sm:w-1/2  gap-4'>
                <div className='grid place-content-center'>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur distinctio dignissimos libero accusamus iste aut saepe! Sapiente nobis magni fugiat! Sit maxime unde sunt vero laboriosam, inventore adipisci autem sequi quia voluptatibus cumque nemo dicta illo enim soluta error! Ex doloremque molestias animi ducimus earum soluta, dignissimos eligendi amet, non perferendis suscipit nemo porro quidem voluptas aliquam? Recusandae accusamus laudantium rem fuga quibusdam? Aut dolor reprehenderit temporibus labore laboriosam quam pariatur ullam, explicabo quasi mollitia nostrum veritatis odit debitis!</p>
                </div>
                <figure className='flex items-center justify-center'>
                    <Image src={AboutImg} alt="About Us Image" className='w-full sm:w-[120%] lg:w-8/10 aspect-[16/9] ' />
                </figure>
            </div>
        </>
    )
}
