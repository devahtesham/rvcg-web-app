const dateFormatter = () => {
    let inputDate = "2023-09-07"
    // Parse the input date into a JavaScript Date object
    const parsedDate = new Date(inputDate);

    // Set the time to 06:34:02.148 and timezone to UTC
    parsedDate.setUTCHours(6);
    parsedDate.setUTCMinutes(34);
    parsedDate.setUTCSeconds(2);
    parsedDate.setUTCMilliseconds(148);

    // Format the parsed date in the desired format "2023-09-09T06:34:02.148Z"
    const formattedDate = parsedDate.toISOString();
    return formattedDate
}

export { dateFormatter }



export const formatDateForUI = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export const displayTime = (dateString) => {
    if (dateString) {
        const date = new Date(dateString);

        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, // Ensures AM/PM format
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
}


export const LEAD_HISTORY_STATUS = [
    { label: "Contacted", value: 'contacted' },
    { label: "No Response", value: 'no_response' },
    { label: "Interested", value: 'interested' },
    { label: "Rejected", value: 'rejected' },
]

export const LEAD_STATUS = [
    { label: "Open", value: 'open' },
    { label: "In Progress", value: 'in_progress' },
    { label: "Closed", value: 'closed' },
    { label: "Rejected", value: 'rejected' },
]

export const OFFER_STATUS = [
    { label: "Pending", value: 'Pending' },
    { label: "Accepted", value: 'Accepted' },
    { label: "Rejected", value: 'Rejected' }
]

export const USER_ACTIVATION_STATUS = [
    { label: "Active", value: 1 },
    { label: "In Active", value: 0 }
]

export const USER_INCOME_LEVEL = [
    { label: "Low", value: 'Low' },
    { label: "High", value: 'High' },
    { label: "Medium", value: 'Medium' }
]


export const BEDROOMS = [
    { label: "1", value: '1' },
    { label: "2", value: '2' },
    { label: "3", value: '3' },
    { label: "4", value: '4' },
    { label: "5", value: '5' },
    { label: "6", value: '6' },
    { label: "7", value: '7' },
    { label: "8", value: '8' },

]

export const BATHROOMS = [
    { label: "1", value: '1' },
    { label: "2", value: '2' },
    { label: "3", value: '3' },
    { label: "4", value: '4' },
    { label: "5", value: '5' },
    { label: "6", value: '6' },
    { label: "7", value: '7' },
    { label: "8", value: '8' },

]


export const LEAD_STATUS_ENUM = {
    open: "Open",
    in_progress: "In Progress",
    closed: "Closed",
    rejected: "Rejected"
}

export const priceOptions = [
    "$0", "$50K", "$100K", "$200K", "$300K", "$400K", "$500K", "$600K", "$700K", "$800K", "$900K", "Any Price"
];

export const DEFAULT_LAT = 37.80135026038151
export const DEFAULT_LONG = -122.37238799958239


export const USER_PROFILE_DUMMY_JSON = {
    "name": "John",
    "email": "johndosdssfdfe@example.co",
    "password": "password123",
    "password_confirmation": "password123",
    "phone_number": "+1234567890",
    "address": "123 Main St, Springfield, IL",
    "social_media_profiles": [
        "https://facebook.com/johndoe",
        "https://twitter.com/johndoe",
        "https://linkedin.com/in/johndoe"
    ],
    "referral_codes": [
        "eS3vSJObJo",
        "g7Efb3Lpum"
    ],
    "bankruptcy_details": "No bankruptcy history",
    "liens_details": "No liens",
    "contact_email": "contact@johndoe.com",
    "dob": "1990-01-01",
    "income_level": "High",
    "role": "user",
    "email_verified_at": "2023-10-01 12:00:00"
}


export const DUMMY_CITY_DATA = [
    {
        "id": 102,
        "city_name": "Chicago",
        "country_id": 185,
        "lat": 41.8781,
        "long": -87.6298,
        "created_at": "2025-02-11T12:29:55.000000Z",
        "updated_at": "2025-02-11T12:29:55.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 103,
        "city_name": "New York",
        "country_id": 185,
        "lat": 40.7128,
        "long": -74.0060,
        "created_at": "2025-02-12T08:12:46.000000Z",
        "updated_at": "2025-02-12T08:12:46.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 104,
        "city_name": "Los Angeles",
        "country_id": 185,
        "lat": 34.0522,
        "long": -118.2437,
        "created_at": "2025-02-12T08:13:01.000000Z",
        "updated_at": "2025-02-12T08:13:01.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 105,
        "city_name": "Houston",
        "country_id": 185,
        "lat": 29.7604,
        "long": -95.3698,
        "created_at": "2025-02-12T08:13:06.000000Z",
        "updated_at": "2025-02-12T08:13:06.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 106,
        "city_name": "Phoenix",
        "country_id": 185,
        "lat": 33.4484,
        "long": -112.0740,
        "created_at": "2025-02-12T08:13:10.000000Z",
        "updated_at": "2025-02-12T08:13:10.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 107,
        "city_name": "Philadelphia",
        "country_id": 185,
        "lat": 39.9526,
        "long": -75.1652,
        "created_at": "2025-02-12T08:13:14.000000Z",
        "updated_at": "2025-02-12T08:13:14.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 108,
        "city_name": "San Antonio",
        "country_id": 185,
        "lat": 29.4241,
        "long": -98.4936,
        "created_at": "2025-02-12T08:13:22.000000Z",
        "updated_at": "2025-02-12T08:13:22.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 109,
        "city_name": "San Diego",
        "country_id": 185,
        "lat": 32.7157,
        "long": -117.1611,
        "created_at": "2025-02-12T08:13:27.000000Z",
        "updated_at": "2025-02-12T08:13:27.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 110,
        "city_name": "Dallas",
        "country_id": 185,
        "lat": 32.7767,
        "long": -96.7970,
        "created_at": "2025-02-12T08:13:32.000000Z",
        "updated_at": "2025-02-12T08:13:32.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    },
    {
        "id": 111,
        "city_name": "San Jose",
        "country_id": 185,
        "lat": 37.3382,
        "long": -121.8863,
        "created_at": "2025-02-12T08:13:42.000000Z",
        "updated_at": "2025-02-12T08:13:42.000000Z",
        "country": {
            "id": 185,
            "country_name": "United States of America",
            "created_at": "2025-01-10T05:01:29.000000Z",
            "updated_at": null
        }
    }
]


export const cleanPriceVal = (price) => {
    // $300
    if (price.includes("$")) {
        const symbolPrice = price.split("$")[1];
        return symbolPrice.substring(0, symbolPrice.length - 1)
    }
}

export const HIGH_ROI_PROPERTY_DATA = [
    {
        "id": 119,
        "title": "1 bed Appartment",
        "description": "South Uni San Jose",
        "city_id": 171,
        "country_id": 185,
        "property_type_id": 1,
        "property_status_id": 1,
        "listing_date": "2025-02-13 00:00:00",
        "price": "100000.00",
        "square_foot": "1500.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "10.00",
        "longitude": "-121.87863349914551",
        "latitude": "37.33167558501772",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": 98.89937169811321,
        "monthly_rent": "120000.00",
        "cap_rate": null,
        "geolocation_coordinates": null,
        "zip_code": "1121",
        "area": null,
        "gdrp_agreement": null,
        "address": "test 2 San Jsose",
        "bedrooms": 1,
        "bathrooms": 1,
        "half_bathrooms": null,
        "arv": 210833.334,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "1000.00",
        "wholesale_fee": "5000.00",
        "price_per_square_feet": "160.00",
        "user_id": 1,
        "created_at": "2025-02-13T20:56:19.000000Z",
        "updated_at": "2025-02-13T20:56:19.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 141583.3338
    },
    {
        "id": 122,
        "title": "1 bed Appartment",
        "description": "South Uni San Jose",
        "city_id": 171,
        "country_id": 185,
        "property_type_id": 1,
        "property_status_id": 1,
        "listing_date": "2025-02-13 00:00:00",
        "price": "80000.00",
        "square_foot": "1100.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "10.00",
        "longitude": "-121.87863349914551",
        "latitude": "37.33167558501772",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": 71.790124,
        "monthly_rent": "120000.00",
        "cap_rate": null,
        "geolocation_coordinates": null,
        "zip_code": "1121",
        "area": null,
        "gdrp_agreement": null,
        "address": "test 2 San Jsose",
        "bedrooms": 1,
        "bathrooms": 1,
        "half_bathrooms": null,
        "arv": 154611.1116,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "5000.00",
        "wholesale_fee": "5000.00",
        "price_per_square_feet": "120.00",
        "user_id": 1,
        "created_at": "2025-02-13T20:59:04.000000Z",
        "updated_at": "2025-02-13T20:59:04.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 98227.77812
    },
    {
        "id": 114,
        "title": "1 bed Appartment",
        "description": "South Uni San Jose",
        "city_id": 171,
        "country_id": 185,
        "property_type_id": 1,
        "property_status_id": 1,
        "listing_date": "2025-02-13 00:00:00",
        "price": "100000.00",
        "square_foot": "1000.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "10.00",
        "longitude": "-121.87863349914551",
        "latitude": "37.33167558501772",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": 22.22222260869564,
        "monthly_rent": "120000.00",
        "cap_rate": null,
        "geolocation_coordinates": null,
        "zip_code": "1121",
        "area": null,
        "gdrp_agreement": null,
        "address": "test 2 San Jsose",
        "bedrooms": 1,
        "bathrooms": 1,
        "half_bathrooms": null,
        "arv": 140555.55599999998,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "10000.00",
        "wholesale_fee": "5000.00",
        "price_per_square_feet": "120.00",
        "user_id": 1,
        "created_at": "2025-02-13T20:14:48.000000Z",
        "updated_at": "2025-02-13T20:14:48.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 83388.88919999998
    },
    {
        "id": 121,
        "title": "1 bed Appartment",
        "description": "South Uni San Jose",
        "city_id": 171,
        "country_id": 185,
        "property_type_id": 1,
        "property_status_id": 1,
        "listing_date": "2025-02-13 00:00:00",
        "price": "130000.00",
        "square_foot": "1200.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "10.00",
        "longitude": "-121.87863349914551",
        "latitude": "37.33167558501772",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": 20.476190857142853,
        "monthly_rent": "120000.00",
        "cap_rate": null,
        "geolocation_coordinates": null,
        "zip_code": "1121",
        "area": null,
        "gdrp_agreement": null,
        "address": "test 2 San Jsose",
        "bedrooms": 1,
        "bathrooms": 1,
        "half_bathrooms": null,
        "arv": 168666.6672,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "5000.00",
        "wholesale_fee": "5000.00",
        "price_per_square_feet": "150.00",
        "user_id": 1,
        "created_at": "2025-02-13T20:58:21.000000Z",
        "updated_at": "2025-02-13T20:58:21.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 108066.66703999999
    }
]

export const LOW_ROI_DATA = [
    {
        "id": 132,
        "title": "Luxurious Villa in Downtown",
        "price": "500000.00",
        "roi": -2.912621359223301,
        "city": {
            "city_name": "Dallas"
        }
    },
    {
        "id": 128,
        "title": "Luxurious Villa in Downtown",
        "price": "500000.00",
        "roi": -2.912621359223301,
        "city": {
            "city_name": "Dallas"
        }
    },
    {
        "id": 130,
        "title": "5 Bed Appart",
        "price": "150000.00",
        "roi": -11.607142857142858,
        "city": {
            "city_name": "San Francisco"
        }
    },
    {
        "id": 129,
        "title": "5 Bed Villa Townhouse",
        "price": "170000.00",
        "roi": -18.852459016393443,
        "city": {
            "city_name": "San Francisco"
        }
    },
    {
        "id": 115,
        "title": "1 bed Appartment",
        "price": "200000.00",
        "roi": -25.32608695652174,
        "city": {
            "city_name": "San Jose"
        }
    },
    {
        "id": 118,
        "title": "1 bed Appartment",
        "price": "300000.00",
        "roi": -28.9114238410596,
        "city": {
            "city_name": "San Jose"
        }
    },
    {
        "id": 116,
        "title": "1 bed Appartment",
        "price": "300000.00",
        "roi": -37.77173913043478,
        "city": {
            "city_name": "San Jose"
        }
    },
    {
        "id": 117,
        "title": "1 bed Appartment",
        "price": "400000.00",
        "roi": -49.48529411764706,
        "city": {
            "city_name": "San Jose"
        }
    }
];

export const OWNERSHIP_TYPE = [
    { label: "Freehold", value: 'Freehold' },
    { label: "Leasehold", value: 'Leasehold' },
    { label: "Joint Ownership", value: 'Joint Ownership' },
]


export const FAQ_DATA = [
    {
        category: "Property Management",
        question: "Do I have to move out immediately if I sell my house to you?",
        answer: "No! We’ll work with you and your closing terms. We understand that sometimes you want to sell your house quickly but still need to get a few other details in order before you’re able to move out. You can stay in your house for up to 6 full months if you need."
    },
    {
        category: "Lead Management",
        question: "How do you determine the price of my house?",
        answer: "We’ll complete a walkthrough and conduct a comprehensive home assessment to evaluate the condition of your home. Our team of underwriting experts will use that information to determine the fair market value of your house."
    },
    {
        category: "Messaging & Chat",
        question: "Is there a way to chat with potential buyers or sellers?",
        answer: "Yes! Our chat module enables real-time messaging between buyers and sellers for seamless communication."
    },
    {
        category: "Email Campaigns",
        question: "What condition does my house have to be in?",
        answer: "We purchase properties as-is which means you don’t have to worry about fixing or changing anything just to put it on the market. We can fix anything big or small so leave the work up to us."
    },
    {
        category: "Skip Trace",
        question: "Do you pay in cash?",
        answer: "YES! We pay all cash for every property that we purchase."
    },
    {
        category: "MLS Data",
        question: "Does the platform integrate with MLS data?",
        answer: "Yes, our system fetches real-time MLS data, ensuring you have access to the latest property listings and market trends."
    },
    {
        category: "User Management",
        question: "What other benefits do you offer?",
        answer: "We cover all closing costs if you work with one of our preferred closing attorneys."
    }
];

export const setUser = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
}
export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token")

    return {
        user,
        token
    }
}

export const removeUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
}

export const ROLE_MAPPER = {
    admin: "Admin",
    user: "User",
    investor: "Investor",
    vendor: "Vendor",
}

export const DUMMY_FAV = [
    {
        "id": 166,
        "title": "215 Country Club Rd",
        "description": "This is Faslamp Quarter",
        "city_id": 139,
        "country_id": 185,
        "property_type_id": 1,
        "property_status_id": 1,
        "listing_date": "2025-02-22 00:00:00",
        "price": "120000.00",
        "square_foot": "1200.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "20.00",
        "longitude": "-117.16000556945801",
        "latitude": "32.71147770079216",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": 18.909991742361683,
        "monthly_rent": "15000.00",
        "cap_rate": "20.00",
        "geolocation_coordinates": null,
        "zip_code": "02255",
        "area": null,
        "gdrp_agreement": "https://rvcg-git.designsbits.com/uploads/Listings/Image/gdrp/1740205715_67b96e9369fac.png",
        "address": "San Diego Heights, IL 60411",
        "bedrooms": 2,
        "bathrooms": 2,
        "half_bathrooms": null,
        "arv": 144000,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "500.00",
        "wholesale_fee": "600.00",
        "price_per_square_feet": "120.00",
        "user_id": 1,
        "created_at": "2025-02-22T06:26:22.000000Z",
        "updated_at": "2025-02-22T06:28:35.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 99700,
        "owner_full_name": "Shaun",
        "lead_types_id": 25,
        "Owner_Property_Documents_Url": "https://rvcg-git.designsbits.com/uploads/listings/Owner_Property_Documents",
        "city": {
            "id": 139,
            "city_name": "San Diego"
        },
        "media": [
            {
                "id": 52,
                "listing_id": 166,
                "file_name": "1740205582_67b96e0e4b321.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740205582_67b96e0e4b321.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:26:22.000000Z",
                "updated_at": "2025-02-22T06:26:22.000000Z"
            },
            {
                "id": 53,
                "listing_id": 166,
                "file_name": "1740205582_67b96e0e4ba62.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740205582_67b96e0e4ba62.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:26:22.000000Z",
                "updated_at": "2025-02-22T06:26:22.000000Z"
            },
            {
                "id": 54,
                "listing_id": 166,
                "file_name": "1740205582_67b96e0e4c0ab.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740205582_67b96e0e4c0ab.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:26:22.000000Z",
                "updated_at": "2025-02-22T06:26:22.000000Z"
            }
        ],
        "user": {
            "id": 1,
            "name": "Shazaib Testt"
        },
        "country": {
            "id": 185,
            "country_name": "United States of America"
        },
        "property_type": {
            "id": 1,
            "title": "Single Family"
        },
        "property_status": {
            "id": 1,
            "status": "Sold"
        },
        "features": [
            {
                "id": 1,
                "name": "Garrage",
                "created_at": "2025-01-20T14:41:46.000000Z",
                "updated_at": "2025-01-20T14:41:46.000000Z",
                "pivot": {
                    "listings_id": 166,
                    "feature_id": 1
                }
            },
            {
                "id": 8,
                "name": "Sauna",
                "created_at": null,
                "updated_at": null,
                "pivot": {
                    "listings_id": 166,
                    "feature_id": 8
                }
            }
        ],
        "leadtypes": {
            "id": 25,
            "type_name": "absentee owner",
            "created_at": "2025-02-17T09:00:51.000000Z",
            "updated_at": "2025-02-18T07:23:01.000000Z",
            "description": "Property owners who do not live in the property."
        }
    },
    {
        "id": 167,
        "title": "207 Country Club Rd",
        "description": "This is East Village",
        "city_id": 139,
        "country_id": 185,
        "property_type_id": 3,
        "property_status_id": 1,
        "listing_date": "2025-02-22 00:00:00",
        "price": "150000.00",
        "square_foot": "1200.00",
        "parking": null,
        "year_built": 2025,
        "lot_size": "20.00",
        "longitude": "-117.1538257598877",
        "latitude": "32.71371643564367",
        "school_district": null,
        "walkability_score": null,
        "crime_rate": null,
        "roi": -17.192982456140353,
        "monthly_rent": "15000.00",
        "cap_rate": "12.00",
        "geolocation_coordinates": null,
        "zip_code": "0255",
        "area": null,
        "gdrp_agreement": "https://rvcg-git.designsbits.com/uploads/Listings/Image/gdrp/1740206643_67b97233ef971.pdf",
        "address": "San Deigo Heights, IL 60411",
        "bedrooms": 1,
        "bathrooms": 1,
        "half_bathrooms": null,
        "arv": 141600,
        "gross_margin": null,
        "estimated_roi": null,
        "repair_cost": "10000.00",
        "wholesale_fee": "11000.00",
        "price_per_square_feet": "118.00",
        "user_id": 1,
        "created_at": "2025-02-22T06:44:03.000000Z",
        "updated_at": "2025-02-22T06:44:49.000000Z",
        "is_featured": 1,
        "is_approved": true,
        "moa": 78120,
        "owner_full_name": "Mickel",
        "lead_types_id": 26,
        "Owner_Property_Documents_Url": "https://rvcg-git.designsbits.com/uploads/listings/Owner_Property_Documents",
        "city": {
            "id": 139,
            "city_name": "San Diego"
        },
        "media": [
            {
                "id": 55,
                "listing_id": 167,
                "file_name": "1740206643_67b97233f08f0.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740206643_67b97233f08f0.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:44:03.000000Z",
                "updated_at": "2025-02-22T06:44:03.000000Z"
            },
            {
                "id": 56,
                "listing_id": 167,
                "file_name": "1740206643_67b97233f0e52.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740206643_67b97233f0e52.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:44:03.000000Z",
                "updated_at": "2025-02-22T06:44:03.000000Z"
            },
            {
                "id": 57,
                "listing_id": 167,
                "file_name": "1740206643_67b97233f13f1.jpg",
                "file_url": "https://rvcg-git.designsbits.com/uploads/Listings/Image/1740206643_67b97233f13f1.jpg",
                "media_type": "image/jpeg",
                "created_at": "2025-02-22T06:44:03.000000Z",
                "updated_at": "2025-02-22T06:44:03.000000Z"
            }
        ],
        "user": {
            "id": 1,
            "name": "Shazaib Testt"
        },
        "country": {
            "id": 185,
            "country_name": "United States of America"
        },
        "property_type": {
            "id": 3,
            "title": "Townhouse"
        },
        "property_status": {
            "id": 1,
            "status": "Sold"
        },
        "features": [
            {
                "id": 1,
                "name": "Garrage",
                "created_at": "2025-01-20T14:41:46.000000Z",
                "updated_at": "2025-01-20T14:41:46.000000Z",
                "pivot": {
                    "listings_id": 167,
                    "feature_id": 1
                }
            },
            {
                "id": 8,
                "name": "Sauna",
                "created_at": null,
                "updated_at": null,
                "pivot": {
                    "listings_id": 167,
                    "feature_id": 8
                }
            },
            {
                "id": 12,
                "name": "Air Conditioning",
                "created_at": null,
                "updated_at": null,
                "pivot": {
                    "listings_id": 167,
                    "feature_id": 12
                }
            }
        ],
        "leadtypes": {
            "id": 26,
            "type_name": "cash buyer",
            "created_at": "2025-02-17T09:21:46.000000Z",
            "updated_at": "2025-02-18T07:23:31.000000Z",
            "description": "Owners who have likely paid cash for their property."
        }
    }
]

export const getLaterMonthDate = (monthCount) => {
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + monthCount);
    const formattedDate = nextMonthDate.toISOString().split('T')[0];
    return formattedDate

}




