import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, BASE_URL_AUTH } from "../../../config/service";
import { displayTime, DUMMY_CITY_DATA, formatDateForUI, getUser } from "../../../data/global";


const INITIAL_STATE = {
    isLoading: true,
    propertyTypes: [],
    allProperty: [],
    propertyDetails: {},
    leadDetails: {},
    propertyFeatures: [],
    cities: [],
    propertyStatuses: [],
    leads: [],
    leadSources: [],
    leadTypes: [],
    adminUsers: [],
    packages: [],
    packageItems: [],
    chats: [],
    allUsers: [],
    offers: [],
    allEmails: [],
    emailView: {},
    users: [],
    kpiDetails: [],
    allUsersLogs: [],
    userLogDetails: [],
    userProfileDetails: {},
    offerDetails: {},
    offerHistory: {},
    mapCities: [],
    favProperties: [],
    highROIProperty: [],
    lowROIProperty: [],
    vendors: [],
    vendorDetails: {},
    mlsData: [],


}

const PropertySlice = createSlice({
    initialState: INITIAL_STATE,
    name: 'auth',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetPropertyTypes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPropertyTypes.fulfilled, (state, action) => {
            state.isLoading = false
            state.propertyTypes = action.payload.map(item => [item.id, item.title, item])
        })
        builder.addCase(GetPropertyTypes.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllProperties.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetAllProperties.fulfilled, (state, action) => {
            state.isLoading = false
            state.allProperty = action.payload
        })
        builder.addCase(GetAllProperties.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetPropertyById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPropertyById.fulfilled, (state, action) => {
            state.isLoading = false
            state.propertyDetails = { ...action.payload, media: action.payload?.media?.map((imgObj) => ({ url: imgObj.file_url, alt: imgObj.file_name })) }
        })
        builder.addCase(GetPropertyById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetLeadsById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetLeadsById.fulfilled, (state, action) => {
            state.isLoading = false
            state.leadDetails = action.payload
        })
        builder.addCase(GetLeadsById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetPropertyFeatures.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPropertyFeatures.fulfilled, (state, action) => {
            state.isLoading = false
            state.propertyFeatures = action.payload
        })
        builder.addCase(GetPropertyFeatures.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(GetAllCities.fulfilled, (state, action) => {
            state.cities = action.payload
        })

        builder.addCase(GetPropertyStatuses.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPropertyStatuses.fulfilled, (state, action) => {
            state.isLoading = false
            state.propertyStatuses = action.payload
        })
        builder.addCase(GetPropertyStatuses.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllLeads.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetAllLeads.fulfilled, (state, action) => {
            state.isLoading = false
            state.leads = action.payload
        })
        builder.addCase(GetAllLeads.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetLeadSources.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetLeadSources.fulfilled, (state, action) => {
            state.isLoading = false
            state.leadSources = action.payload
        })
        builder.addCase(GetLeadSources.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetLeadType.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetLeadType.fulfilled, (state, action) => {
            state.isLoading = false
            state.leadTypes = action.payload.map(item => [item.id, item, formatDateForUI(item?.created_at), item])
        })
        builder.addCase(GetLeadType.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllAdminUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetAllAdminUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.adminUsers = action.payload
        })
        builder.addCase(GetAllAdminUsers.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetPackages.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPackages.fulfilled, (state, action) => {
            state.isLoading = false
            state.packages = action.payload
        })
        builder.addCase(GetPackages.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetPackagItems.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetPackagItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.packageItems = action.payload
        })
        builder.addCase(GetPackagItems.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getChats.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getChats.fulfilled, (state, action) => {
            state.isLoading = false
            state.chats = action.payload
        })
        builder.addCase(getChats.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.allUsers = action.payload
        })

        builder.addCase(GetOffers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetOffers.fulfilled, (state, action) => {
            state.isLoading = false
            state.offers = action.payload
        })
        builder.addCase(GetOffers.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllEmails.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetAllEmails.fulfilled, (state, action) => {
            state.isLoading = false
            state.allEmails = action.payload
        })
        builder.addCase(GetAllEmails.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(SendEmail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(SendEmail.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(SendEmail.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetEmailById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetEmailById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.emailView = action.payload?.email_campaigns
        })
        builder.addCase(GetEmailById.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(getAllUsersAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAllUsersAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload?.map(user => [user.id, user.name, user.email, user.role, user.phone_number, user.is_active === 1 ? 'verified' : 'Not Verified'])
        })
        builder.addCase(getAllUsersAction.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllUserLogs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetAllUserLogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allUsersLogs = action.payload?.map(user => [user?.id, user?.user_id, user?.user?.name, user?.user?.email, user?.user?.role, user])
        })
        builder.addCase(GetAllUserLogs.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetUserLogById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetUserLogById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userLogDetails = action.payload
        })
        builder.addCase(GetUserLogById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetUserProfileDetails.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetUserProfileDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userProfileDetails = action.payload
        })
        builder.addCase(GetUserProfileDetails.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetOfferById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetOfferById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.offerDetails = action.payload
        })
        builder.addCase(GetOfferHistory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.offerHistory = action.payload
        })
        builder.addCase(GetOfferById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetAllCitiesForMap.fulfilled, (state, action) => {
            state.mapCities = action.payload
        })

        builder.addCase(ViewFavProperties.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ViewFavProperties.fulfilled, (state, action) => {
            state.isLoading = false
            state.favProperties = action.payload
        })
        builder.addCase(ViewFavProperties.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetHighROIProperty.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetHighROIProperty.fulfilled, (state, action) => {
            state.isLoading = false
            state.highROIProperty = action.payload
        })
        builder.addCase(GetHighROIProperty.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetLowROIProperty.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetLowROIProperty.fulfilled, (state, action) => {
            state.isLoading = false
            state.lowROIProperty = action.payload
        })
        builder.addCase(GetLowROIProperty.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetVendors.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetVendors.fulfilled, (state, action) => {
            state.isLoading = false
            state.vendors = action.payload
        })
        builder.addCase(GetVendors.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetVendorById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetVendorById.fulfilled, (state, action) => {
            state.isLoading = false
            state.vendorDetails = action.payload
        })
        builder.addCase(GetVendorById.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(GetMLSData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(GetMLSData.fulfilled, (state, action) => {
            state.isLoading = false
            state.mlsData = action.payload?.results
        })
        builder.addCase(GetMLSData.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(FilterMLSData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(FilterMLSData.fulfilled, (state, action) => {
            state.isLoading = false
            state.mlsData = action.payload?.results
        })
        builder.addCase(FilterMLSData.rejected, (state) => {
            state.isLoading = false
        })


    }
})

export default PropertySlice.reducer



export const GetLeadSources = createAsyncThunk('/lead-source/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/lead-source`, { headers });
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const GetAllUserLogs = createAsyncThunk('/user-logs/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/user-logs`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const GetUserLogById = createAsyncThunk('/user-logs/id/GET', async (id, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/user-logs/${id}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetPropertyTypes = createAsyncThunk('/propertiestypes/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL}/website/propertiestypes`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetPropertyFeatures = createAsyncThunk('/other-features/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/other-features`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


export const AddPropertyLeadSource = createAsyncThunk('/lead-source/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/lead-source`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddPropertyTypes = createAsyncThunk('/propertiestypes/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/propertiestypes`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddPropertyFeatureAction = createAsyncThunk('/other-features/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/other-features`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditPropertyType = createAsyncThunk('/propertiestypes/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/propertiestypes/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const EditLeadSource = createAsyncThunk('/lead-source/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/lead-source/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})



export const DeleteLeadSource = createAsyncThunk('/lead-source/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/lead-source/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const DeletePropertyFromFav = createAsyncThunk('/saved-properties/delete/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/saved-properties/delete/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


export const DeletePropertyTypes = createAsyncThunk('/propertiestypes/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/propertiestypes/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditPropertyFeature = createAsyncThunk('/other-features/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/other-features/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const DeletePropertyFeature = createAsyncThunk('/other-features/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/other-features/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetAllProperties = createAsyncThunk('/property-listings/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const { token } = getUser()
        let url = token ? `${BASE_URL}/website/listings/auth` : `${BASE_URL}/website/listing`

        const response = await axios.get(url, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const GetPropertyById = createAsyncThunk('/property-listings/id/GET', async (param, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/listings/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const GetVendorById = createAsyncThunk('/vendors/id/GET', async (param, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/vendors/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


export const GetAllCities = createAsyncThunk('/cities/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL}/website/cities/185`, { headers });  // 185 for the USA cities
        return response.data.map((item) => {
            return {
                value: item.id,
                label: item.city_name
            }
        })
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetAllCitiesForMap = createAsyncThunk('/cities/map/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL}/website/cities/185`, { headers });  // 185 for the USA cities
        return response.data

    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetPropertyStatuses = createAsyncThunk('/property-statuses/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/property-statuses`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddPropertyStatusAction = createAsyncThunk('/property-statuses/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/property-statuses`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditPropertyStatus = createAsyncThunk('/property-statuses/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/property-statuses/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const DeletePropertyStatus = createAsyncThunk('/property-statuses/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/property-statuses/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


export const AddPropertyAction = createAsyncThunk('/listings/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/listings`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const DeletePropertyAction = createAsyncThunk('/listings/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/listings/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetAllLeads = createAsyncThunk('/leads/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/leads`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetLeadsById = createAsyncThunk('/leads/id/GET', async (param, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/leads/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const GetOfferById = createAsyncThunk('/offers/id/GET', async (id, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/offers/${id}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetOfferHistory = createAsyncThunk('/offer/id/history/GET', async (id, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/offer/${id}/history`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddLeadHistory = createAsyncThunk('/leads/history/id/POST', async ({ id, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/leads/history/${id}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})




export const GetAllAdminUsers = createAsyncThunk('/GetAdminusers/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/GetAdminusers`, { headers });
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const AddLead = createAsyncThunk('/leads/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/leads`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditLead = createAsyncThunk('/leads/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/leads/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const DeleteLeadAction = createAsyncThunk('/leads/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/leads/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditProperty = createAsyncThunk('/listings/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/listings/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const getChats = createAsyncThunk('/messages/contacts/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/messages/contacts`, { headers });
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddChats = createAsyncThunk('/messages/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/messages`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
export const getAllUsers = createAsyncThunk('/getallusers/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/getallusers`, { headers });
        return response.data?.map((user) => {
            return {
                label: user.name,
                value: user.id
            }
        })
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const getAllUsersAction = createAsyncThunk('/getalluser/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/getallusers`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// GET
export const GetLeadType = createAsyncThunk('/lead-types/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL}/website/lead-types`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const AddPropertyLeadType = createAsyncThunk('/lead-types/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/lead-types`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// PUT
export const EditLeadType = createAsyncThunk('/lead-types/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/lead-types/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// DELETE
export const DeleteLeadType = createAsyncThunk('/lead-types/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/lead-types/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
// GET
export const GetPackages = createAsyncThunk('/packages/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/packages`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const AddPackage = createAsyncThunk('/packages/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/packages`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// PUT
export const EditPackage = createAsyncThunk('/packages/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/packages/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// DELETE
export const DeletePackage = createAsyncThunk('/packages/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/packages/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
// GET
export const GetOffers = createAsyncThunk('/offers/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/offers`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const AddOffers = createAsyncThunk('/offers/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/offers`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// PUT
export const EditOffers = createAsyncThunk('/offers/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/offers/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// DELETE
export const DeleteOffers = createAsyncThunk('/offers/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/offers/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// GET
export const GetAllEmails = createAsyncThunk('/get-email-record/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/get-email-record`, { headers });
        return response.data?.email_campaigns
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const SendEmail = createAsyncThunk('/send-email-campaign/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/send-email-campaign`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetEmailById = createAsyncThunk('/showemailrecord/id/GET', async (param, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/showemailrecord/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})





export const GetPropertyKPI = createAsyncThunk('/Kpi-show/id/GET', async (id, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/Kpi-show/${id}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// PUT
export const UpdateUserProfile = createAsyncThunk('/User/update/id/EDIT', async ({ id, data }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL}/User/update/${id}`, data, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const GetUserProfileDetails = createAsyncThunk('/show_single_user/id/EDIT', async (id, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/show_single_user/${id}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// GET
export const FilterMapListing = createAsyncThunk('/listings/search/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        // const cityQuery = city ? `city=${city}&` : ''
        // const priceQuery = price ? `price_min=${price}&` : ''
        // const propertyTypeQuery = propertyType ? `property_type=${propertyType}&` : ''
        // const bedQuery = bed ? `bedrooms=${bed}&` : ''
        // const bathQuery = bath ? `bathrooms=${bath}&` : ''
        // const query = `${cityQuery}${priceQuery}${propertyTypeQuery}${bedQuery}${bathQuery}`


        const { token } = getUser()
        let url = token ? `${BASE_URL}/website/listings/auth/search` : `${BASE_URL}/website/listings/search`

        const response = await axios.post(url, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const AddToFav = createAsyncThunk('/saved-properties/add/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/saved-properties/add`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// GET
export const ViewFavProperties = createAsyncThunk('/saved-properties/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/saved-properties`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})



// GET
export const GetHighROIProperty = createAsyncThunk('/highroizone/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/highroizone`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// GET
export const GetLowROIProperty = createAsyncThunk('/lowroizone/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/lowroizone`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})
// GET
export const GetVendors = createAsyncThunk('/vendors/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/vendors`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// POST
export const AddVendorAction = createAsyncThunk('/vendors/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/vendors`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EditVendor = createAsyncThunk('/vendors/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/vendors/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// DELETE
export const DeleteVendor = createAsyncThunk('/vendors/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/vendors/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// GET
export const GetMLSData = createAsyncThunk('/mls-data/GET', async (text, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const query = text ? `/search?query=${text}` : ''

        const response = await axios.get(`${BASE_URL}/website/mls-data-website?page=1`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const FilterMLSData = createAsyncThunk('/mls/filter-data/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/mls/filter-data`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const SubmitContactForm = createAsyncThunk('/website/contact-form/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL}/website/contact-form`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

export const EvaluateProperty = createAsyncThunk('/website/property-valuation/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL}/website/property-valuation`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const FileUpload = createAsyncThunk('/temp_files/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/temp_files`, payload, { headers });
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})


// GET
export const GetPackagItems = createAsyncThunk('/Package-items/GET', async (payload, { rejectWithValue }) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.get(`${BASE_URL_AUTH}/Package-items`, { headers });
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// POST
export const AddPackageItems = createAsyncThunk('/Package-items/POST', async (payload, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.post(`${BASE_URL_AUTH}/Package-items`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// PUT
export const EditPackageItems = createAsyncThunk('/Package-items/EDIT', async ({ param, payload }, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.put(`${BASE_URL_AUTH}/Package-items/${param}`, payload, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

// DELETE
export const DeletePackageItems = createAsyncThunk('/Package-items/DELETE', async (param, { rejectWithValue }) => {
    // 
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        const response = await axios.delete(`${BASE_URL_AUTH}/Package-items/${param}`, { headers });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || 'Something Went Wrong !')
    }
})

