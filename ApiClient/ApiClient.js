const axios = require('axios');

class ApiClient {
    /**
     * Constructor function that initializes an instance of the class.
     *
     * @param {string} apiKey - The API key to be used for authentication.
     */
    constructor(apiKey) {
        this.baseurl = "https://uganda.rapharm.shop/api/uganda/data/v1";
        this.apiKey = apiKey;
        this.headers = {
            'X-API-KEY': this.apiKey,
            'Authorization': 'Bearer ' + this.apiKey,
            'X-Requested-With': 'XMLHttpRequest'
        };
    }

    /**
     * Sets the API key and headers for the request.
     *
     * @param {string} apiKey - The API key to be set.
     */
    setApiKey(apiKey) {
        this.apiKey = apiKey;
        this.headers = {
            'X-API-KEY': this.apiKey,
            'Authorization': 'Bearer ' + this.apiKey,
            'X-Requested-With': 'XMLHttpRequest'
        };
    }

    /**
     * Fetches data from the specified URL.
     *
     * @param {string} url - The URL to fetch data from.
     * @return {Promise<any>} The data fetched from the URL.
     */
    async fetchData(url) {
        try {
            const response = await axios.get(url, { headers: this.headers });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    /**
     * Fetches the districts with the specified limit, page, and sort order.
     *
     * @param {number} limit - The number of districts to fetch. Default is 100.
     * @param {number} page - The page number of districts to fetch. Default is 1.
     * @param {string} sort_order - The sorting order of the districts. Default is "asc".
     * @return {Promise} A promise that resolves to the fetched districts.
     */
    async fetchDistricts(limit = 100, page = 1, sort_order = "asc") {
        const url = `${this.baseurl}/districts?limit=${limit}&page=${page}&sort_order=${sort_order}`;
        return this.fetchData(url);
    }

    /**
     * Fetches a district from the API based on the given UUID.
     *
     * @param {string} uuid - The UUID of the district to fetch.
     * @return {Promise} A Promise that resolves with the fetched district data.
     */
    async fetchDistrict(uuid) {
        const url = `${this.baseurl}/district/${uuid}`;
        return this.fetchData(url);
    }
}

module.exports = ApiClient;
