<template>
	<Contact 
	   v-for="contact in contacts.contacts"
		
	  @deleted="deleteContact"
      :key="contact.id"
      :contact="contact"
	/>
	
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contact from "@/components/Contact.vue"
import IContactList from "@/api/models/IContactList";
import { Component, Prop } from "vue-property-decorator";

@Options({
  components: {
    Contact
  }
})

export default class ContactList extends Vue {
  @Prop({ required: true }) contacts!: IContactList;
  
  deleteContact(id : string): void{
	this.$emit('deleted', id )
  }
}
</script>
