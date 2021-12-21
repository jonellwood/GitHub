require ('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Welcome to the City of Hanahan `,
    description: `description`,
    author: `@ellwood_dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-pinterest-twitter-facebook`,
			options: {
				delayTimer: 100,
				pinterest: {
					enable: false,
					tall: true,
					round: false
				},
				twitter: {
					enable: true,
					containerSelector: '.twitter-container',
					handle: process.env.GATSBY_TWITTER_SOURCE,
					showFollowButton: true,
					showTimeline: true,
					showFollowerCount: true,
					timelineTweetCount: 5,
					width: null,
					height: null,
					noHeader: true,
					noFooter: true,
					noBorders: true,
					noScrollbar: true,
					transparent: true
				},
				facebook: {
					enable: true,
					containerSelector: '.facebook-container',
					profile: process.env.GATSBY_FACEBOOK_SOURCE,
					width: null,
					height: null,
					tabs: 'timeline',
					hideCover: false,
					showFacepile: false,
					smallHeader: false,
					adaptContainerWidth: false
				},
			},
		},
	`gatsby-plugin-sharp`,
	{
		resolve: `gatsby-source-openweathermap`,
		options: {
			apikey: process.env.GATSBY_OPENWEATHER_API,
			location: 'Hanahan',
			units: 'metric',
			type: 'forecast'
		},
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
