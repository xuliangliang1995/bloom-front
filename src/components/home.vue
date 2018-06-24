<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.ivu-layout-header{
	background:white
}
.layout-logo{
    width: 100px;
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.logo{
	width: 100%;
	width: 100%;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout  :style="{height: '100%'}">
            <Header>
                <Menu mode="horizontal" theme="light" :active-name="activeTag" @on-select="cutMenu">
                    <div class="layout-logo">
                    	<img class="logo" src="../images/logo.jpg"/>
                    </div>
                    <div class="layout-nav">
                    	<template v-for="tag in tags">
                    		<MenuItem :name="tag.name">
                    			<Icon :type="tag.icon"></Icon>
                    			{{tag.name}}
                    		</MenuItem>
                    	</template>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{height: '100%'}">
                <Sider hide-trigger :style="{background: '#fff',height: '100%'}">
                    <Menu active-name="1-2" theme="light" width="auto" height="100%" :open-names="['1']">
                        <template v-for="menu in menus">
                        	<Submenu :name="menu.name">
                        		<template slot="title">
                        			<Icon :type="menu.icon"></Icon>
                        			{{menu.name}}
                        		</template>
                        		<template v-for="subMenu in menu.menu">
                        			<MenuItem :name="subMenu.name">{{subMenu.name}}</MenuItem>
                        		</template>
                        	</Submenu>
                        </template>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '24px 24px 24px'}">
                    <!--<Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>-->
                    <Content :style="{padding: '24px', height: '100%', background: '#fff'}">
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
	var tag = [
        			{
    					name: "花间",
    					icon: "leaf",
    					menu: [{
	    						name: "花间集",
	    						icon: "leaf",
	    						menu:[{
			    							name: "flower1"
			    						},{
			    							name: "flower2"
			    						},{
			    							name: "flower3"
			    						}]
	    					}]
        			},
        			{
    					name: "流年",
    					icon: "social-twitter-outline",
    					menu: [{
	    						name: "荏苒星霜",
	    						icon: "social-twitter-outline",
	    						menu:[{
			    							name: "flower1"
			    						},{
			    							name: "flower2"
			    						},{
			    							name: "flower3"
			    						}]
	    					}]
        			},
        			{
    					name: "成就",
    					icon: "trophy",
    					menu: [{
	    						name: "成就",
	    						icon: "trophy",
	    						menu:[{
			    							name: "flower1"
			    						},{
			    							name: "flower2"
			    						},{
			    							name: "flower3"
			    						}]
	    					}]
        			},
        			{
    					name: "花匠",
    					icon: "person",
    					menu: [{
	    						name: "花匠",
	    						icon: "person",
	    						menu:[{
			    							name: "flower1"
			    						},{
			    							name: "flower2"
			    						},{
			    							name: "flower3"
			    						}]
	    					}]
        			}
        		];
    export default {
       /* props:{
        	menu:{
        		type: Object
        	}
        },*/
        data: function(){
        	return {
        		tag: tag,
        		activeTag: '',
        		menus: ''
        	}
        },
        computed: {
        	tags: function(){
        		var _this = this;
        		var tags = _this.tag;
        		_this.activeTag = tags[0].name;
        		_this.menus = tags[0].menu;
        		return tags;
        	}
        },
        methods: {
        	cutMenu: function(tagName){
        		var _this = this;
        		var tags = _this.tag;
        		_this.activeTag = tagName;
        		for(var i = 0;i < tags.length; i++){
        			if(tags[i].name == tagName ){
        				_this.menus = tags[i].menu;
        			}
        		}
        	}
        }
    }
</script>


