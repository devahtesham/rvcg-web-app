import React, { useEffect } from 'react'
import DisplayMap from './DisplayMap/DisplayMap'
import { useDispatch } from 'react-redux'
import { ViewFavProperties } from '../../store/slices/propertyManagementSlice/propertyManagementSlice'
import { moveToTop } from '../../data/global'



export default function PropertyListing() {
  const dispatch = useDispatch()

   useEffect(() => {
      moveToTop()
    }, [])

  return (
    <DisplayMap />
  )
}