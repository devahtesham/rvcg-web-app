import React from "react"
import { AboutUS, Blogs, BuyProperty, ContactUS, Home, Login, NFT, PropertyListing, ReferralAssociates, Resources, SellProperty,MLSSearch } from "../pages"
import CityPropertyListing from "../pages/CityPropertyListing/CityPropertyListing"
import RegisterForm from "../pages/RegisterForm/RegisterForm"
import Favourites from "../pages/Favourites/Favourites.jsx"
import DisplayDetails from "../pages/DisplayDetails/DisplayDetails.jsx"
import CheckoutPageSkipTrace from "../pages/payments/CheckoutPageSkipTrace.jsx"
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx"
import Terms from "../pages/Terms/Terms.jsx"
import BecomeReferral from "../pages/BecomeReferral/BecomeReferral.jsx"


export const PUBLIC_ROUTES = [
    {
        key: "home",
        path: '/',
        Component: Home
    },
    {
        key: "resources",
        path: '/resources',
        Component: Resources
    },
    {
        key: "sell-with-us",
        path: '/sell-with-us',
        Component: SellProperty
    },
    {
        key: "buy-from-us",
        path: '/buy-from-us',
        Component: BuyProperty
    },
    {
        key: "referral-associates",
        path: '/referral-associates',
        Component: ReferralAssociates
    },
    {
        key: "nft",
        path: '/nft',
        Component: NFT
    },
    {
        key: "blogs",
        path: '/blogs',
        Component: Blogs
    },
    {
        key: "our-listing",
        path: '/our-listing',
        Component: PropertyListing
    },
    {
        key: "mls-search",
        path: '/mls-search',
        Component: MLSSearch
    },
    {
        key: "about-us",
        path: '/about-us',
        Component: AboutUS
    },
    {
        key: "contact-us",
        path: '/contact-us',
        Component: ContactUS
    },
    {
        key: "login",
        path: '/login',
        Component: Login
    },
    {
        key: "register",
        path: '/register',
        Component: RegisterForm
    },

    // dynamic routes
    {
        key: "city",
        path: '/city/:name',
        Component: CityPropertyListing
    },

    {
        key: "favorites",
        path: '/favorites',
        Component: Favourites
    },
    {
        key: "display-details",
        path: '/display-details/:id',
        Component: DisplayDetails
    },

    {
        key: "payments",
        path: '/payments/:id',
        Component: CheckoutPageSkipTrace
    },
    {
        key: "privacy-policy",
        path: '/privacy-policy',
        Component: PrivacyPolicy
    },
    {
        key: "terms",
        path: '/terms',
        Component: Terms
    },
    {
        key: "become-referral",
        path: '/become-referral',
        Component: BecomeReferral
    },
]
