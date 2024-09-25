
import React from 'react'
import Text from '../Text'
import { SIZES } from '../../styles'

export default function SectionTitleBig({title}) {
  return (
    <Text bold fontsize={SIZES.LargeText} style={{ paddingTop: 18 }}>
      {title}
    </Text>
  )
}