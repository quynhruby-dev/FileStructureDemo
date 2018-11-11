const BlogAPI = {
    getNews() {
        return Promise.resolve([
            {
                id: 1,
                image_url: 'http://yelmtravel.com/images/beachPier.jpg',
                category: {
                    name: 'TRENDING'
                },
                date: '5 min ago',
                title: 'To Grow Your Business Start Focusing on',
                author: {
                    avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-64.png',
                    name: 'John Camber'
                }
            },
            {
                id: 2,
                image_url: 'https://www.goway.com/media/cache/48/c6/48c6dcde340f21ba2c2928e620c15337.jpg',
                category: {
                    image_url: 'https://cdn.bleacherreport.net/images/team_logos/32x32/trending.png',
                    name: 'TRENDING'
                },
                date: '5 min ago',
                title: 'To Grow Your Business Start Focusing on',
                author: {
                    avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-64.png',
                    name: 'John Camber'
                }
            },
            {
                id: 3,
                image_url: 'https://www.myc.my/public/articles/334/image.jpg?1515493662',
                category: {
                    image_url: 'https://cdn.bleacherreport.net/images/team_logos/32x32/trending.png',
                    name: 'TRENDING'
                },
                date: '5 min ago',
                title: 'To Grow Your Business Start Focusing on',
                author: {
                    avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-64.png',
                    name: 'John Camber'
                }
            },
            {
                id: 4,
                image_url: 'http://mercurytouroperator.com/images/slider/bg1.jpg',
                category: {
                    image_url: 'https://cdn.bleacherreport.net/images/team_logos/32x32/trending.png',
                    name: 'TRENDING'
                },
                date: '5 min ago',
                title: 'To Grow Your Business Start Focusing on',
                author: {
                    avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-64.png',
                    name: 'John Camber'
                }
            }
        ]);
    },
    getCategoryList() {
        return Promise.resolve([
            {
                id: 1,
                image_url: 'http://yelmtravel.com/images/beachPier.jpg',
                title: '0 to 100.000 Customers in 6 months',
                subTitle: 'The human foundation in truth And I love you like Kanye'
            },
            {
                id: 2,
                image_url: 'https://www.goway.com/media/cache/48/c6/48c6dcde340f21ba2c2928e620c15337.jpg',
                title: ' The Best Productivity',
                subTitle: 'Dont be scared of the truth because we need to restart the human foundation in'
            },
            {
                id: 3,
                image_url: 'https://www.myc.my/public/articles/334/image.jpg?1515493662',
                title: '0 to 100.000 Customers in 6 months',
                subTitle: 'The human foundation in truth And I love you like Kanye'
            },
            {
                id: 4,
                image_url: 'http://mercurytouroperator.com/images/slider/bg1.jpg',
                title: ' The Best Productivity',
                subTitle: 'Dont be scared of the truth because we need to restart the human foundation in'
            }
        ]);
    }
};

export default BlogAPI;