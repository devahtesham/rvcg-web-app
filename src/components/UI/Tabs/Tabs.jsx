import { SEARCH_PROPERTY_TABS_MENU } from "../../../utils/utils";
import SearchCard from "../../SearchCard/SearchCard";


export default function Tabs() {
    return (
        <div className="">
            <ul className="nav nav-tabs justify-content-center border-0" id="myTab" role="tablist">
                {
                    SEARCH_PROPERTY_TABS_MENU.map((tab, index) => (
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${index === 0 && 'active'}`} id={`${tab.id}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab.id}`} type="button" role="tab" aria-controls={`${tab.id}`} aria-selected="true">
                                {tab.name}
                            </button>
                        </li>
                    ))
                }

            </ul>
            <div className="tab-content pb-5" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab"
                >
                    <SearchCard />
                </div>

                <div className="tab-pane fade" id="for-rent" role="tabpanel" aria-labelledby="for-rent-tab">
                    <SearchCard />
                </div>
                <div className="tab-pane fade" id="for-sale" role="tabpanel" aria-labelledby="for-sale-tab">
                    <SearchCard />
                </div>
            </div>
        </div>
    )
}