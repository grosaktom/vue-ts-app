<template>

	Name:
	<input v-model="contact.fullName"/> <br>
	E-mail:
	<input v-model="contact.email" /> <br>
	<button v-on:click="saveContact">OK</button>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IContact from "@/api/models/IContact";
import { Component, Prop } from "vue-property-decorator";

 
export default class EditForm extends Vue {
  @Prop({ required: true  }) contact!: IContact;
  
  saveContact(): void{
	  this.$emit('save', this.contact )
  }
}
</script>


