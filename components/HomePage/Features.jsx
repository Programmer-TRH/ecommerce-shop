import React from 'react'
import HighLightedSubtitle from '../Common/HighLightedSubtitle'
import Title from '../Common/Title'
import FeatureCards from '../Common/FeatureCards'

export default function Features() {
  return (
    <section className='py-8'>
      <HighLightedSubtitle text="Feature" />
      <Title text="We offers" />
      <FeatureCards />
    </section>
  )
}
 