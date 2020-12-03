<template>
  <div class="login-box">
    <h1>Login</h1>
	<input v-model="authDetails.user" /><br />
	<input type="password" v-model="authDetails.pass" /><br />
	<button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IContact from "@/api/models/IContact";
import IAuthDetails from "@/api/models/IAuthDetails";
import { Component, Prop } from "vue-property-decorator";

@Options({
   components: {
       
   }
})


export default class LoginForm extends Vue {
	
	authDetails : IAuthDetails = {
		user: '',
		padd: ''
	}

	
	login() : void{
		this.$emit('login', this.authDetails )
	}
}
</script>


<style scoped>
	input,
	input:focus{
		padding:16px;
		border:1px solid grey;
		font-size:14px;
		line-height:14px;
		outline:none;
		margin-bottom:10px;
		width:200px;
	}
	
	button{
		width:232px;
		background-color:#555;
		color:#fff;
		border:none;
		height:46px;
		font-family: Avenir;
		text-transform:uppercase;
		cursor:pointer;
	}
	button:hover{
		background-color:#000;

	}
	
</style>
