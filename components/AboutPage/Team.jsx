import Image from 'next/image'
import React from 'react'
import TeamMan1 from "@/public/TeamMan1.jpg"
import TeamMan2 from "@/public/TeamMan2.jpg"
import TeamWomen1 from "@/public/TeamWomen1.jpg"

export default function Team() {
  return (
    <div className='my-8 className="mt-16 flex flex-wrap items-center justify-center *:shrink gap-8 *:grid *:place-items-center'>
        <div >
            <Image src={TeamMan1} alt="Team Member" />
            <h2 className='text-xl font-semibold mt-3'>Sabiul Alom</h2>
            <p>Founder & Chairman</p>
        </div>
        <div >
            <Image src={TeamWomen1} alt="Team Member" />
            <h2 className='text-xl font-semibold mt-3'>Arabi Khatun</h2>
            <p>Managing Director</p>
        </div>
        <div >
            <Image src={TeamMan2} alt="Team Member" />
            <h2 className='text-xl font-semibold mt-3'>Sauban Islam</h2>
            <p>Product Distributor</p>
        </div>
    </div>
  )
}
 