import { Injectable } from "@angular/core";
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { afDBUser } from "../app/app.module";

@Injectable()

export class OfferService{

	afDBUser:AngularFireDatabase;
	constructor() {
		this.afDBUser = afDBUser;
	}
	
	//---new offer 
	public newOffer(serviceData : any = [],keyNew?:any){
	// public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
		console.log('metodoNewOffer');
		let key = undefined;
		//default star
		console.log(JSON.stringify(serviceData));
		// console.log('key:'+key);
		console.log('keyNew:'+keyNew);
		if(keyNew && keyNew != null  && keyNew != undefined){
			keyOffer = keyNew;
		}else{
			var d = new Date();
			key = d.getTime();
			var keyOffer = "offer_"+(key);
		}
		
		console.log(serviceData);
		// console.log(JSON.stringify(serviceData));
		// console.log(subCategory);
		this.afDBUser.object('/offer/'+keyOffer).set(serviceData).catch(error => {console.log('error offer setNOff'); console.log(error);console.log(JSON.stringify(error));});
		console.info('offer create');
	}
	//sets
	public setStatus(keyOffer,status){
		return this.afDBUser.object('/offer/'+keyOffer+'/status/').set(status).catch(error => {console.log('error offer setstatus'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setSale(keyOffer,sale){
		return this.afDBUser.object('/offer/'+keyOffer+'/sale/').set(sale).catch(error => {console.log('error offer setSale'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setUser(keyOffer,User){
		return this.afDBUser.object('/offer/'+keyOffer+'/User/').set(User).catch(error => {console.log('error offer setUser'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setProvider(keyOffer,Provider){
		return this.afDBUser.object('/offer/'+keyOffer+'/Profession/').set(Provider).catch(error => {console.log('error offer setUser'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setOfferProviderLocation(keyOffer,ProviderLocation){
		console.info('set ProviderLocation');
		this.afDBUser.object('/offer/'+keyOffer+'/ProviderLocacion').set(ProviderLocation).catch(error => {console.log('error offer setOfferProviderLocation'); console.log(error);console.log(JSON.stringify(error));});
	}

	//-gets
	public getStatus(keyOffer){
		return this.afDBUser.object('/offer/'+keyOffer+'/status/');
	}
	public getOffer(keyOffer){
		return this.afDBUser.object('/offer/'+keyOffer);
	}
	public getOfferUserLocation(keyOffer){
		console.info('get UserLocation');
		return this.afDBUser.object('/offer/'+keyOffer+'/UserLocacion');
	}
	public getOfferProviderLocation(keyOffer){
		console.info('get ProviderLocation');
		return this.afDBUser.object('/offer/'+keyOffer+'/ProviderLocacion');
	}
	
	public getOfferNew(){
		return this.afDBUser.list('/offer/',{
			query: {
				orderByChild: 'status',
				equalTo: 'Published'
			  }
		});
	}

	public getTimmer(keyOffer){
		return	this.afDBUser.object('/time/'+keyOffer+'/Timer');
	}
	public getAddressOffer(keyOffer){
		return this.afDBUser.object('/offer/'+keyOffer+'/Address');
	}
}