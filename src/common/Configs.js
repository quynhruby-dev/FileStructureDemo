const Configs = {
    HOME_CONFIG: {  
        widgets: [
            {
                type: 'CATEGORY_LIST',
                value: 1, // blogID
                limit: 10,
                layout: 'FeatureItem' 
            },
            {
                type: 'ARTICLE_LIST', 
                value: 45, // blogID
                limit: 10,
                layout: 'FeatureItem' 
            }
        ]
    }
}

export default Configs