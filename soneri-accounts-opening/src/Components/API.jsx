import { useEffect } from 'react';
import axios from 'axios';

const TestingApi = () => {

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://rda-api-qa.cloudasset.com/api/v1/digital/onboard/products/new';
            const response = await axios.get(apiUrl)
            console.log(response.data, 'API Response')
        };

        fetchData();
    }, []);
};

export default TestingApi;