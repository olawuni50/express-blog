export const allPostsQuery = () => {
    const query = `*[_type == "post"] | order(_createdAt desc){
        _id,
        topic,
        publishedAt,
        body,
        category,
        pmage{
            asset->{
                _id, 
                url,
            }
        },
        userId,
        postedBy ->{
            _id,
            userName,
            image
        },
        likes,
        comments[]{
            comment,
            _key,
            postedBy->{
                _id,
                userName,
                image
            },
        },
    }`;

    return query
        
    
}