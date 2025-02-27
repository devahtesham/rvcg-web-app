import { PROPERTY_BATHS, PROPERTY_BEDS, PROPERTY_MAX_PRICE, PROPERTY_TYPE, PROPERTY_WHERE } from "../../utils/utils";
import CustomSelect from "../UI/CustomSelect/CustomSelect";


export default function SearchCard() {
    return (
        <div className="card py-4 border-0 rounded-1 px-4">
            <form>
                <div className="row mb-3">
                    <div className="col-6">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a keyword" />
                    </div>
                    <div className="col-3">
                        <CustomSelect options={PROPERTY_TYPE} />
                    </div>
                    <div className="col-3">
                        <CustomSelect options={PROPERTY_WHERE} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <CustomSelect options={PROPERTY_BEDS} />
                    </div>
                    <div className="col-3">
                        <CustomSelect options={PROPERTY_BATHS} />
                    </div>
                    <div className="col-3">
                        <CustomSelect options={PROPERTY_MAX_PRICE} />
                    </div>
                    <div className="col-3">
                        <button className="custom-btn primary-btn w-100" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>

    )
}