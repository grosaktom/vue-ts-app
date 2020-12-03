# Oh what an ugly and meaningless app :)

It does not really implement image upload, does not have any validation

Sorry I didnt really have much time...
This app is quick and dirty because:

It does not really handle exceptions.  
It does not really care what the API answers  
It does not use Vuex store  
Its not documented  
Sometimes it just uses Promise of type any    
It does not really hande authentification and does not use navigation guards  

,but it has:  

Service layer for api  
Interfaces for data objects to use between the service layer and presentation layer  


if you want to run it with the api change the following lines in main.ts. Yeeees it should be in a separate config.  

const API_URL = "http://localhost/laravel/public/api/" ;  
const API_CONTACT_ENDPOINT = "contacts" ;  
