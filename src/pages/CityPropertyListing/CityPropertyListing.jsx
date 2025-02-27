import { useParams } from "react-router-dom"

export default function CityPropertyListing() {
    const { name } = useParams()

    return (
        <div>{name}</div>
    )
}