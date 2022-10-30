export default {
    name: 'post',
    title: 'Post',
    type:'document',
    fields: [
        {
            name:'topic',
            title:'Topic',
            type:'string'
        },

        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        },

        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
          
        {
            name: 'pimage',
            title: 'Image',
            type: 'file',
            options: {
                hotspot: true,
            }
        },

        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        },

        {
            name:'postedBy',
            title:'Posted By',
            type: 'postedBy'
        },

        {
            name:'likes',
            title: 'Likes',
            type: 'array',
            of: [
                {
                    type:'reference',
                    to: [{type: 'user'}]
                }
            ]
        },

        {
            name: 'comments',
            title: 'Comments',
            type:'array',
            of:[{type: 'comment'}]
        },

        {
            name: 'category',
            title: 'Category',
            type: 'string'
        }
    ]
}