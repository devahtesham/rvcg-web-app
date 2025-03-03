import React, { useEffect } from 'react'
import DisplayMap from './DisplayMap/DisplayMap'
import { useDispatch } from 'react-redux'
import { ViewFavProperties } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'



export default function PropertyListing() {
  const dispatch = useDispatch()

  

  return (
    <DisplayMap />
  )
}