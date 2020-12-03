<template>
  <div class="content">
    <h1>Contacts page</h1>
	
	<router-link to="/editor">Add Contact</router-link><br /><br />
	
	<ContactList 
		:contacts="contacts"
		@deleted="refresh"
	/>
	
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactList from "@/components/ContactList.vue"
import IContactList from "@/api/models/IContactList";
import IContact from "@/api/models/IContact";
import ContactService from "@/api/ContactService";

@Options({
  components: {
    ContactList
  },
  
})
export default class Home extends Vue {
  isLoading = false;
  
  contacts: IContactList = { contacts: [] };
  
  async refresh(): Promise<void>{
	  await this.fetchContacts();
  }
	
  async mounted(): Promise<void> {
    await this.fetchContacts();
  }
  
  async fetchContacts(): Promise<void> {
    this.isLoading = true;
    try {
      this.contacts.contacts = await ContactService.getContacts();

    } finally {
      this.isLoading = false;
    }
  }
}
</script>
