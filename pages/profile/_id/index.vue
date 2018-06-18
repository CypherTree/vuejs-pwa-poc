<template>
  <section class="container">
    <div class="row">
        <div class="col-md-12">
          <div class="profile-div  text-center">
            <a class="profile-bg profile-block"></a>
          <div>
            <div class="profile-button">
                  {{ profile.location }}  
            </div>

            <a  :href="profile.html_url" class="profile-avatarLink" target="_bla">
              <img :alt="profile.name" :src="profile.avatar_url" class="profile-avatarImg">
            </a>

            <div class="profile-divUser">
              <div class="profile-divName">
                <a :href="profile.html_url" target="_blank">{{ profile.name }}</a>
              </div>
              <span>
                <a :href="profile.html_url" target="_blank">@<span>{{ profile.login }}</span></a>
              </span>
            </div>
            <div class="profile-divStats">
              <ul class="profile-Arrange">
                <li class="profile-ArrangeSizeFit">
                  <a  title="9.840 Tweet">
                    <span class="profile-StatLabel profile-block">Public Repos</span>
                    <span class="profile-StatValue">{{ profile.public_repos }}</span>
                  </a>
                </li>
                <li class="profile-ArrangeSizeFit">
                  <a  title="885 Following">
                    <span class="profile-StatLabel profile-block">Public Gists</span>
                    <span class="profile-StatValue">{{ profile.public_gists }}</span>
                  </a>
                </li>
                <li class="profile-ArrangeSizeFit">
                  <a  title="1.810 Followers">
                    <span class="profile-StatLabel profile-block">Followers</span>
                    <span class="profile-StatValue">{{ profile.followers }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <div>
        {{ profile.bio }}
      </div>
    </div>
    <div class="col-md-8">
        {{ repos }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
   data () {
    return {
      login: this.$route.params.id,
    }
  },
fetch ({ store, params, req }) {
    return store.dispatch('profile/fetchProfile', { login: params.id })
  },
methods:{
  
},
	computed: {
			profile: {
				get() {
					return this.$store.state.profile.data
				}
      }
  }
}
</script>
<style>
.profile-div {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e1e8ed;
    border-radius: 6px;
    height: 200px;
}
.profile-bg {
    background-image: url("https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200");
    background-position: 0 50%;
    background-size: 100% auto;
    border-bottom: 1px solid #e1e8ed;
    border-radius: 4px 4px 0 0;
    height: 95px;
    width: 100%;
}
.profile-block {
    display: block !important;
}
.profile-button {
    margin: -35px -10px 0;
    text-align: right;
    width: 100%;
    color:#fff;
}
.profile-avatarLink {
    background-color: #fff;
    border-radius: 6px;
    display: inline-block !important;
    float: left;
    margin: -30px 5px 0 8px;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
}
.profile-avatarImg {
    border: 2px solid #fff;
    border-radius: 7px;
    box-sizing: border-box;
    color: #fff;
    height: 72px;
    width: 72px;
}
.profile-divUser {
    margin: 10px 0 0;
    text-align: left;
}
.profile-divName {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
}
.profile-divName a {
    color: inherit !important;
}
.profile-divStats {
    margin-left: 11px;
    padding: 10px 0;
}
.profile-Arrange {
    box-sizing: border-box;
    display: table;
    margin: 0;
    min-width: 100%;
    padding: 0;
    table-layout: auto;
}
ul.profile-Arrange {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.profile-ArrangeSizeFit {
    display: table-cell;
    padding: 0;
    vertical-align: top;
}
.profile-ArrangeSizeFit a:hover {
    text-decoration: none;
}
.profile-StatValue {
    display: block;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.15s ease-in-out 0s;
}
.profile-StatLabel {
    color: #8899a6;
    font-size: 10px;
    letter-spacing: 0.02em;
    overflow: hidden;
    text-transform: uppercase;
    transition: color 0.15s ease-in-out 0s;
}
</style>
