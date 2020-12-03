<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /><br/>
	<span v-if="showError">Wrong username or password</span>
    <LoginForm @login="login" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/components/LoginForm.vue"; // @ is an alias to /src
import IAuthDetails from "@/api/models/IAuthDetails";

@Options({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {
	showError = false;
	
	login( authDetails : IAuthDetails): void{
		
		if( (authDetails.user == "user") && (authDetails.pass == "user") ){
			this.$router.push({ name: 'Home' });
		}else{
			this.showError = true;
		}		
	}
	
}
</script>
