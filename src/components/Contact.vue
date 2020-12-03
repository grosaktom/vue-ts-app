<template>

<div class="contact-box" >
	<img src="https://images.creativemarket.com/0.1.0/ps/7313307/300/200/m2/fpc/wm0/mzgx46y7g7chtq2czlzc2oe9uu7x9jiub8xpbkprfmq71siisox5zwjvqtlyaz5k-.jpg?1573930933&s=52f5893b7a0a7b81f61a1e6a751b8641" />
	Name: {{contact.fullName}} <br />
	E-mail: {{contact.email}} <br />
	<div class="edit-box">
		<span v-on:click="deleteContact" >Delete</span> /
		<span v-on:click="redirectToEdit">Edit</span> 
		
	</div>
</div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IContact from "@/api/models/IContact";
import { Component, Prop } from "vue-property-decorator";
import ContactService from "@/api/ContactService";

export default class Contact extends Vue {
  @Prop({ required: true }) readonly contact!: IContact;
  
  async deleteContact(): Promise<void>{
	await ContactService.deleteContact(this.contact.id); 
	this.$emit('deleted', this.contact.id )
  }
  
  redirectToEdit(): void{
	  this.$router.push({ name: 'Editor', params: { id : this.contact.id } })
  }
}
</script>


<style scoped>
.contact-box{
	width:200px;
	margin:auto;
	padding:15px;
	background-color: #efefef;
	margin-bottom:30px;
}

.contact-box img{
	width: 100%;
	margin-bottom:20px;
	filter: grayscale(100%);
}

.contact-box .edit-box{
	border-top:1px solid #555;
	padding-top: 15px;
	margin-top:15px;
	font-size:12px;
	text-align: center;
	text-transform:uppercase
}

.contact-box .edit-box span{
	cursor: pointer;
}

</style>