const axios = require('axios');

class UgandaData {
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
    

    /**
     * Fetches a county from the API based on the given UUID of a district.
     *
     * @param {string} uuid - The UUID of the county to fetch.
     * @return {Promise} A Promise that resolves with the fetched county data.
     */
    async fetchDistrictCounty(uuid) {
        const url = `${this.baseurl}/county/${uuid}`;
        return this.fetchData(url);
    }

    ///district/{uuid}/subcounties

    /**
     * Fetches a sub-county from the API based on the given UUID of a district.
     *
     * @param {string} uuid - The UUID of the sub-county to fetch.
     * @return {Promise} A Promise that resolves with the fetched sub-county data.
     */
    async fetchDistrictSubcounty(uuid) {
        const url = `${this.baseurl}/subcounty/${uuid}`;
        return this.fetchData(url);
    }

    ///district/{uuid}/parishes

    /**
     * Fetches a parish from the API based on the given UUID of a district.
     *
     * @param {string} uuid - The UUID of the parish to fetch.
     * @return {Promise} A Promise that resolves with the fetched parish data.
     */
    async fetchDistrictParish(uuid) {
        const url = `${this.baseurl}/parish/${uuid}`;
        return this.fetchData(url);
    }

    ///district/{uuid}/villages

    /**
     * Fetches a village from the API based on the given UUID of a district.
     *
     * @param {string} uuid - The UUID of the village to fetch.
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchDistrictVillage(uuid) {
        const url = `${this.baseurl}/village/${uuid}`;
        return this.fetchData(url);
    }

    ///counties

    /**
     * Fetches all the counties from the API.
     *
     * @param {number} limit - The number of counties to fetch. Default is 100.
     * @param {number} page - The page number of counties to fetch. Default is 1.
     * @param {string} sort_order - The sorting order of the counties. Default is "asc".
     * @return {Promise} A Promise that resolves with the fetched county data.
     */
    async fetchCounties(limit = 100, page = 1, sort_order = "asc") {
        const url = `${this.baseurl}/counties`;
        return this.fetchData(url);
    }

   ///county/{uuid}/subcounties

    /**
     * Fetches a sub-county from the API based on the given UUID of a county.
     *
     * @param {string} uuid - The UUID of the sub-county to fetch.
     * @return {Promise} A Promise that resolves with the fetched sub-county data.
     */
    async fetchCountySubcounty(uuid) {
        const url = `${this.baseurl}/subcounties/${uuid}`;
        return this.fetchData(url);
    }

    ///county/{uuid}/parishes

    /**
     * Fetches a parish from the API based on the given UUID of a county.
     *
     * @param {string} uuid - The UUID of the parish to fetch.
     * @return {Promise} A Promise that resolves with the fetched parish data.
     */
    async fetchCountyParish(uuid) {
        const url = `${this.baseurl}/parishes/${uuid}`;
        return this.fetchData(url);
    }

    ///county/{uuid}/villages

    /**
     * Fetches a village from the API based on the given UUID of a county.
     *
     * @param {string} uuid - The UUID of the village to fetch.
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchCountyVillage(uuid) {
        const url = `${this.baseurl}/villages/${uuid}`;
        return this.fetchData(url);
    }

    ///subcounties

    /**
     * Fetches all the sub-counties from the API.
     *
     * @param {number} limit - The number of sub-counties to fetch. Default is 100.
     * @param {number} page - The page number of sub-counties to fetch. Default is 1.
     * @param {string} sort_order - The sorting order of the sub-counties. Default is "asc".
     * @return {Promise} A Promise that resolves with the fetched sub-county data.
     */
    async fetchSubcounties(limit = 100, page = 1, sort_order = "asc") {
        const url = `${this.baseurl}/subcounties`;
        return this.fetchData(url);
    }

    ///subcounty/{uuid}/parishes

    /**
     * Fetches a parish from the API based on the given UUID of a sub-county.
     *
     * @param {string} uuid - The UUID of the parish to fetch.
     * @return {Promise} A Promise that resolves with the fetched parish data.
     */
    async fetchSubcountyParish(uuid) {
        const url = `${this.baseurl}/parishes/${uuid}`;
        return this.fetchData(url);
    }

    ///subcounty/{uuid}/villages

    /**
     * Fetches a village from the API based on the given UUID of a sub-county.
     *
     * @param {string} uuid - The UUID of the village to fetch.
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchSubcountyVillage(uuid) {
        const url = `${this.baseurl}/villages/${uuid}`;
        return this.fetchData(url);
    }

    ///parishes

    /**
     * Fetches all the parishes from the API.
     *
     * @param {number} limit - The number of parishes to fetch. Default is 100.
     * @param {number} page - The page number of parishes to fetch. Default is 1.
     * @param {string} sort_order - The sorting order of the parishes. Default is "asc".
     * @return {Promise} A Promise that resolves with the fetched parish data.
     */
    async fetchParishes(limit = 100, page = 1, sort_order = "asc") {
        const url = `${this.baseurl}/parishes`;
        return this.fetchData(url);
    }

    ///parish/{uuid}

    /**
     * Fetches a parish from the API based on the given UUID.
     *
     * @param {string} uuid - The UUID of the parish to fetch.
     * @return {Promise} A Promise that resolves with the fetched parish data.
     */
    async fetchParish(uuid) {
        const url = `${this.baseurl}/parish/${uuid}`;
        return this.fetchData(url);
    }

    ///parish/{uuid}/villages 

    /**
     * Fetches a village from the API based on the given UUID of a parish.
     *
     * @param {string} uuid - The UUID of the village to fetch.
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchParishVillage(uuid) {
        const url = `${this.baseurl}/villages/${uuid}`;
        return this.fetchData(url);
    }

    ///villages

    /**
     * Fetches all the villages from the API.
     *
     * @param {number} limit - The number of villages to fetch. Default is 100.
     * @param {number} page - The page number of villages to fetch. Default is 1.
     * @param {string} sort_order - The sorting order of the villages. Default is "asc".
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchVillages(limit = 100, page = 1, sort_order = "asc") {
        const url = `${this.baseurl}/villages`;
        return this.fetchData(url);
    }

    ///village/{uuid}

    /**
     * Fetches a village from the API based on the given UUID.
     *
     * @param {string} uuid - The UUID of the village to fetch.
     * @return {Promise} A Promise that resolves with the fetched village data.
     */
    async fetchVillage(uuid) {
        const url = `${this.baseurl}/village/${uuid}`;
        return this.fetchData(url);
    }

}

module.exports = UgandaData;
