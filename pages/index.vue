<template>
  <section class="container">
    <div class="row" style="margin-bottom:20px;">
      <div class="col-md-4">
       <b-field label="Name Of user">
          <b-input v-model="query" ></b-input>
       </b-field>
      </div>
    </div>
    <div class="row text-center" >
      <div class="col-md-3" v-for="user in users" :key="user.login" style="margin-bottom: 5px;">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
          <div class="card-body" style="padding-bottom:1px;">
            <h5 class="card-title" style="margin-bottom:2px;" @click="detail(user.login)">@{{ user.login }}</h5>
            <div class="row">
              <div class="col-md-12 text-center text-small" style="font-size:10px; color:gray;">
                <div>Score</div>
                <div>{{ user.score }}</div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
   data () {
    return {
      query: this.$route.params.query,
    }
  },
watch: {
    query: function (value) {
      this.searchUser();
    },
    users: function(value){
      value.forEach(element => {
       // this.getProfile(element.url);
      }); 
    }
  },
methods:{
  searchUser: function() {
				return this.$store.dispatch('userList/fetchUsers',  {
					query: this.query
				});
      },
      getProfile: function(url, index) {
				return this.$store.dispatch('profile/fetchProfile',  {
          url: url,
          
				});
			},
      detail: function (login) {
      this.$router.push({ name: 'profile-id', params: { id: login }});
    }
},
	computed: {
			users: {
				get() {
					return this.$store.state.userList.items
				}
      },
      profiles: {
				get() {
					return this.$store.state.profile
				}
      }
  }
}
</script>