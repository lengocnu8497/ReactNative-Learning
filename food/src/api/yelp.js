import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Qa_0jETuo3QIlsSflFdVT9QuOeW-3L7n4aSh1LXJORn8KCVns67Tz1lCKOhaTdHfgjExqObi8fc10NGPAqSe6V3JA29ClAvW_W9WqPNN68Bjxsmzi2GdJS3q5ojYXnYx'
    }
});

