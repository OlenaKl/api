import { API_LINKS } from './UtilsLinks'

class DataService{
    static async apiCall(value, options){
        const url = API_LINKS.cors_enable + value;
        const response = fetch(url, options)
        .then(response=>(
          response.json()
        ))
        .catch(error => { 
          console.log("We have an error", error)
         });
         return response;
    }

    static async basicSearch(value, limit){
      const url = API_LINKS.search.replace('{0}', value) + '&limit={0}'.replace('{0}', limit);
      const results = value.length > 0 ? await this.apiCall(url) : null;
      return results;
  }
    static async chooseAlbum(value){
      const results = await this.apiCall(value);
      return results;
    }
}

export default DataService;