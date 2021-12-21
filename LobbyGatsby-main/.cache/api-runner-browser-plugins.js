module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-pinterest-twitter-facebook/gatsby-browser.js'),
      options: {"plugins":[],"delayTimer":100,"pinterest":{"enable":false,"tall":true,"round":false},"twitter":{"enable":true,"containerSelector":".twitter-container","handle":"cityofhanahan","showFollowButton":true,"showTimeline":true,"showFollowerCount":true,"timelineTweetCount":5,"width":null,"height":null,"noHeader":true,"noFooter":true,"noBorders":true,"noScrollbar":true,"transparent":true},"facebook":{"enable":true,"containerSelector":".facebook-container","profile":"cityofhanahan","width":null,"height":null,"tabs":"timeline","hideCover":false,"showFacepile":false,"smallHeader":false,"adaptContainerWidth":false}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
