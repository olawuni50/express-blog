export interface Post {
    topic: string;
    publishedAt:string;
    body: [object];
    category: string;
    pimage: {
        asset: {
            _id: string;
            url: string;
        };
    };
    _id: string;
    postedBy: {
        _id: string;
        userName: string;
        image: string;
    };
    likes:{
        postedBy:{
            _id: string;
            userName:string;
            image: string;
        };
    }[];
    comments:{
        comment:string;
        _key:string;
        postedBy: {
            _ref:string;
        };
    }[];
    userId: string;
    
}