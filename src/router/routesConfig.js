import React from "react"
import { AboutUS, Blogs, BuyProperty, ContactUS, Home, Login, MlsSearch, NFT, PropertyListing, ReferralAssociates, Resources, SellProperty } from "../pages"
import CityPropertyListing from "../pages/CityPropertyListing/CityPropertyListing"
import RegisterForm from "../pages/RegisterForm/RegisterForm"



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
        Component: MlsSearch
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


]