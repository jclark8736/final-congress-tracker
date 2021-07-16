const { RESTDataSource } = require('apollo-datasource-rest');

class CongressAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://whoismyrepresentative.com/getall_mems.php?';
    }
    async getCongress() {
      const response = await this.get('zip=31023&output=json');
      return Array.isArray(response)
        ? response.map(congress => this.launchReducer(congress))
        : [];
    }
    congressReducer(congress) {
      return {
        name: congress.results[0].name,
        party:congress.results[0].party,
        link: congress.results[0].link
      }
    }
    
  }


  
  
  module.exports = CongressAPI;

//zip=31023&output=json