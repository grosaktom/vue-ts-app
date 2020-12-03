<template>
  <div class="content">
    <h1>Edit or Add</h1>
	<EditForm 
		:contact="this.contact"
		@save="saveContact"	/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EditForm from "@/components/EditForm.vue"
import IContact from "@/api/models/IContact";
import { Component, Prop } from "vue-property-decorator";
import ContactService from "@/api/ContactService";

@Options({
  components: {
    EditForm
  }
})
export default class Edit extends Vue {
  
  id = "";
  
  
  contact : IContact = {
	  fullName: "",
	  email: "",
	  id: "",
	  profilePictureURL: ""
  };
 
   async mounted(): Promise<void> {
	  
	  
	  this.id = this.$route.params.id as string;
	  await this.fetchContact();
	  
  }
  
  async fetchContact(): Promise<void>{
	if (typeof this.id != "undefined"){
		this.contact = await ContactService.getContact(this.id);
	}
  }
  
   async addContact():  Promise<void>{
	  await ContactService.addContact(this.contact);
	  console.log("contact added " +  JSON.stringify(this.contact) );
  }
  
  async saveContact(contact : IContact): Promise<void>{
	if (contact.id != ""){
		await ContactService.editContact(this.contact);
	}else{
		await ContactService.addContact(this.contact);
	}	
	  
	this.$router.push({ name: 'Home' })
  }


}
</script>
