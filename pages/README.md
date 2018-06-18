# PAGES

This directory contains your Application Views and Routes.
The framework reads all the .vue files inside this directory and creates the router of your application.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/routing

      <div class="col-md-3" v-for="user in users" :key="user.login" style="margin-bottom: 5px;">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
          <div class="card-body" style="padding-bottom:1px; p">
            <h5 class="card-title" style="margin-bottom:2px;">{{ profiles[user.id].name }}</h5>
            <p class="card-text" style=" color:gray;">@{{ user.login }}</p>
           
            <div class="row">
              <div class="col-md-12 text-center text-small" style="font-size:10px; color:gray;">
                <div>Score</div>
                <div>{{ profiles[user.id].public_repos }}</div>
              </div>
            </div>
            <div class="row" style="font-size:10px; color:gray;">
              <div class="col-md-6 text-center">
                <div>Public Repos</div>
                <div>{{ profiles[user.id].public_repos }}</div>
              </div>
              <div class="col-md-6 text-center">
                <div>Public Gists</div>
                <div>{{ profiles[user.id].public_gists }}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12" style="    overflow: hidden;  max-height: 50px; min-height: 50px; font-style:10px;">
                {{ profiles[user.id].bio }}
              <!--<a class="btn btn-primary" :href="user.html_url">
                Profile 
              </a>-->
              </div>
               
            </div>
             <div class="row">
                <div class="col-md-12 text-right" style="font-size:10px; color:gray;">
                 {{ profiles[user.id].location }}
                 </div> 
              </div>
          </div>
        </div>
      </div>