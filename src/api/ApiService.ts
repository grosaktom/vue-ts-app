import axios from "axios";

export default class ApiService {
	private static baseUrl: string;

	public static initialize(url: string) {
		this.baseUrl = url;
	}
	
	
    static get(resource: string): Promise<any> {
		const request : Promise<any> = axios.get(this.baseUrl + resource);
		request.catch(this.handleError);
		
		return request;
    }
	
    static post(resource: string, data: any): Promise<any> {
        const request : Promise<any> = axios.post(this.baseUrl + resource, data);
		request.catch(this.handleError);
              
        return request;
    }
	
	
	static delete(resource: string){
		const request : Promise<any> = axios.delete(this.baseUrl + resource);
		request.catch(this.handleError);
		
		return request;
	}
	
	static update(resource: string, data:any){
		const request : Promise<any> = axios.put(this.baseUrl + resource, data);
		request.catch(this.handleError);
		
		return request;
	}
	
	
    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
	
	
}