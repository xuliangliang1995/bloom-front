<template>
	<div class = "loginBackground">
		<div id="loginBox">
			<Card style="width:330px">
		        <div style="text-align:center">
		            <img :style="{width:'300px',height:'210px'}" src="../images/girl2.jpg"/>
		            <Input type="text" v-model="username" placeholder="用户名" clearable style="width: 300px"></Input>
		            <Input type="password" v-model="password" placeholder="密码" clearable style="width: 300px"></Input>
		            <Button :type="signInBtnType" @click="signIn">登录</Button>
	    			<Button :type="signOutBtnType" @click="signUp">注册</Button>
		        </div>
		    </Card>
		</div>
	</div>
</template>
<script>
	import '../css/login.css';
    export default {
        data: function(){
        	return {
        		username: 'bloom',
        		password: 'bloom',
        		signInOrSignUp: true,
        		url: '/gardener'
        	};
        },
        computed: {
			signInBtnType: function(){
        		var _this = this;
        		return this.signInOrSignUp?'primary':'ghost';
        	},
        	signOutBtnType: function(){
        		var _this = this;
        		return this.signInOrSignUp?'ghost':'primary';
        	}
        },
        methods: {
        	signIn: function(){
        		var _this = this;
        		if (_this.signInOrSignUp){
        			_this.$axios.get(_this.url,{
        				params: {
        					username: _this.username,
        					password: _this.password
        				}
        			}).then(function(response){
        				_this.$Message.success('登录成功');
        				_this.$router.push({ path: '/home' });
        			}).catch(function(error){
        				_this.$Message.error(error.response.data[0].message);
        			});
        		} else {
        			this.signInOrSignUp = true;
        		}
        	},
        	signUp: function(){
        		var _this = this;
        		if (_this.signInOrSignUp){
        			_this.signInOrSignUp = false;
        		} else {
        			_this.$axios.post(_this.url,{
        				username: _this.username,
        				password: _this.password
        			})
        			.then(function(response){
        				_this.$Message.success('注册成功');
        			}).catch(function(error){
        				_this.$Message.error(error.response.data[0].message);
        			});
        		}
        	}
        }
    }
</script>
<style scoped>

</style>