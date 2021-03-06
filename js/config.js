const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [
    {
      name: "Duckduckgo",
      key: "*",
      url: "https://duckduckgo.com",
      search: "/?q={}",
    },

    {
      category: "Programming",
      name: "GitHub",
      key: "g",
      url: "https://github.com",
      search: "/search?q={}",
      color: "linear-gradient(135deg, #2b2b2b, #3b3b3b)",
      icon: "github",
      quickLaunch: true,
    },
    {
      category: "Programming",
      name: "StackOverflow",
      key: "st",
      url: "https://stackoverflow.com",
      search: "/search?q={}",
      color: "linear-gradient(135deg, #53341C, #F48024)",
      icon: "stackoverflow",
      quickLaunch: true,
    },
    {
      category: "Programming",
      name: "MDN",
      key: "md",
      url: "https://developer.mozilla.org/en-US",
      search: "/search?q={}",
      color: "#212121",
      icon: "mdn",
      quickLaunch: false,
    },
    {
      category: "Programming",
      name: "DevDocs",
      key: "dd",
      url: "https://devdocs.io",
      color: "linear-gradient(135deg, #33373A, #484949)",
      icon: "devdocs",
      quickLaunch: false,
    },

    {
      category: "Media",
      name: "YouTube",
      key: "y",
      url: "https://youtube.com",
      search: "/results?search_query={}",
      color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
      icon: "youtube",
      quickLaunch: false,
    },
    {
      category: "Media",
      name: "Reddit",
      key: "r",
      url: "https://reddit.com",
      search: "/search?q={}",
      color: "linear-gradient(135deg, #FF8456, #FF4500)",
      icon: "reddit",
      quickLaunch: false,
    },
    {
      category: "Media",
      name: "Twitch",
      key: "tw",
      url: "https://www.twitch.tv",
      search: "/directory/game/{}",
      color: "linear-gradient(135deg, #6441a5, #4b367c)",
      icon: "twitch",
      quickLaunch: false,
    },

    {
      category: "Media",
      name: "Twitter",
      key: "t",
      url: "https://www.twitter.com",
      search: "/search?q={}&src=typed_query",
      color: "linear-gradient(135deg, #1DA1F2, #19608F)",
      icon: "twitter",
      quickLaunch: true,
    },
    {
      category: "Media",
      name: "Notion",
      key: "ns",
      url: "https://www.notion.so",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "notion",
      quickLaunch: true,
    },

    {
      category: "Destiny",
      name: "DIM",
      key: "dim",
      url: "https://beta.destinyitemmanager.com",
      color: "linear-gradient(135deg, #393956 , #161627 )",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Destiny",
      name: "Braytech",
      key: "br",
      url: "https://www.braytech.org",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Destiny",
      name: "D2 Checklist",
      key: "ch",
      url: "https://www.d2checklist.com",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Destiny",
      name: "D2 Optimizer",
      key: "do",
      url: "https://www.destinyoptimizer.com",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Destiny",
      name: "D2 Recipes",
      key: "dr",
      url: "https://www.destinyrecipes.com",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Destiny",
      name: "ArmorPicker",
      key: "ap",
      url: "https://mijago.github.io/D2ArmorPicker/#/v2",
      color: "linear-gradient(135deg, #FFF, #3F3F3F)",
      icon: "",
      quickLaunch: true,
    },

    {
      category: "Warframe",
      name: "Wiki",
      key: "ww",
      url: "https://warframe.fandom.com/wiki/WARFRAME_Wiki",
      color: "linear-gradient(135deg, #FFF, #afd8ff)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Warframe",
      name: "Tenno.Tools",
      key: "tt",
      url: "https://tenno.tools/",
      color: "linear-gradient(135deg, #FFF, #1f2c34)",
      icon: "",
      quickLaunch: true,
    },
    {
      category: "Warframe",
      name: "Beginner 2021",
      key: "wb",
      url: "https://www.youtube.com/watch?v=FURvOjv3teI&list=PLUUaJNS7yZIEDRsDQQ3mlOnTAGMeg7r9t",
      color: "linear-gradient(135deg, #FFF, #1f2c34)",
      icon: "",
      quickLaunch: true,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [
    {
      name: "Commands",
      limit: 2,
    },
    {
      name: "Default",
      limit: 4,
    },
    {
      name: "History",
      limit: 1,
    },
    {
      name: "DuckDuckGo",
      limit: 0,
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ["g/issues", "g/pulls", "gist.github.com"],
    r: ["r/r/unixporn", "r/r/startpages", "r/r/webdev", "r/r/technology"],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: true,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ":",

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: "/",

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: " ",

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: "png",
}
