import { pageInterface } from "./../pageInterface";

export const animeultima: pageInterface = {
  name: "animeultima",
  domain: "https://www10.animeultima.eu",
  type: "anime",
  isSyncPage: function(url) {
    if (url.split("/")[3] === "a" && j.$("h1.title.is-marginless span.is-size-4.is-size-5-touch.is-size-6-mobile")[0]) {
      return true;
    } else {
      return false;
    }
  },
  sync: {
    getTitle: function(url){return j.$("h1.title.is-marginless span.is-size-4.is-size-5-touch.is-size-6-mobile").text().replace(/\n.*/g, "").trim();},
    getIdentifier: function(url) {
      return url.split("/")[4];
    },
    getOverviewUrl: function(url){
      return animeultima.domain+'/a/'+animeultima.sync.getIdentifier(url);
    },
    getEpisode: function(url){
      return j.$("h1.title.is-marginless span.is-size-4.is-size-5-touch.is-size-6-mobile").text().replace(/.*\n/g, "").replace(/\D+/g, "");
    }
  },
  init(page){
    if(document.title == "Just a moment..."){
        con.log("loading");
        page.cdn();
        return;
    }
    api.storage.addStyle(require('./style.less').toString());
    j.$(document).ready(function(){page.handlePage()});
  }
};
