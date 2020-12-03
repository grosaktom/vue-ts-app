/* eslint-disable @typescript-eslint/camelcase */

import axios from "axios";
import IContact from "./models/IContact";
import IContactList from "./models/IContactList";
import ApiService from "./ApiService";

export default class ContactService {
	private static endpoint: string;
	

	static initialize(endpoint: string) {
		this.endpoint = endpoint;
	}
	
	
    static async getContacts(): Promise<Array<IContact>> {
		const res = await ApiService.get(this.endpoint);
		const contactList = new Array<IContact>();
		const contactListObj : IContactList = {
				contacts : new Array<IContact>()
			};
		
		res.data.forEach( function (contactFromApi : any){ 
					
				const contact : IContact = {
						id: contactFromApi.id,
						fullName: contactFromApi.full_name,
						email: contactFromApi.email,
						profilePictureURL: contactFromApi.profile_picture 
				}
				
				contactListObj.contacts.push(contact);
				contactList.push(contact);
				
			}
		);
		
		return contactList;
    }
	
    static async getContact(id: string): Promise<IContact> {
		const res = await ApiService.get(this.endpoint + "/" + id);
		const contact : IContact = {
			id : res.data.id,
			fullName: res.data.full_name,
			email: res.data.email,
			profilePictureURL: res.data.profile_picture
		}
		
		return contact;
    }
	
	static async deleteContact(id: string): Promise<any> {
		const res = await ApiService.delete(this.endpoint + "/" + id);
	}
	
	
    static async addContact(contact: IContact): Promise<any> {
		const contactInApiFormat = {
			full_name : contact.fullName,
			email : contact.email,
			profile_picture : contact.profilePictureURL
		}
		const res = await ApiService.post(this.endpoint, contactInApiFormat);
    }
	
	
    static async editContact(contact: IContact): Promise<any> {
		const contactInApiFormat = {
			full_name : contact.fullName,
			email : contact.email,
			profile_picture : contact.profilePictureURL
		}
		const res = await ApiService.update(this.endpoint + "/" + contact.id, contactInApiFormat);
    }
	
	
}