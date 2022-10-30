import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId: 'nqr0i4gf',
    dataset:'production',
    apiVersion:'2022-10-16',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})