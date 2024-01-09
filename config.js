// Configuration object for the application settings

export default {
  // Authentication settings
  auth: {
    // Secret key for user tokens
    userTokenSecret: "863f685A-1ax%W@d3141YY6Q!!0-31c20d3127683c71f7b3",
  },
  whatsApp: {
    access_token:
      "EAADJAuMhqqoBOZBrwtjxGzZCqUlSQ4mU41ZCNxgj4ysKkafhG6mkajnBnlpdAP5oPfsOBf99I7KYrzMpef9zTXX7tGwtQCQ3DpgrZCwPRe3kNrm0jZBVFsLv7J2qd7yxRzcH4x7HY3snlSsvsmeIJ84ZCzFD9ya0ITvNS8dmHSSL9l9Y66ry4A4BJCtptuHkAwJ1vY7YIvnFA1aCKDsyP7orUK7ZBIZD",

    phone_number_id: "183706784834662",

    version: "v18.0",

    app_id: 221014237751978,

    recipient_waid: "233505636611",

    app_secret: "f9260c2c969776fae8ced88ce45d2c45",
  },

  // Database connection settings
  database: {
    // Database name
    name: "subscribers",

    // Database type
    type: "postgres",

    // Database host
    host: "localhost",

    // Database username
    username: "postgres",

    // Database password
    password: "naaghart",

    // Database port
    port: "5432",

    // Database character set
    charset: "utf8",

    // Limit on the number of records fetched (pagination)
    recordlimit: 10,

    // Order type for sorting records (assuming it's in descending order)
    ordertype: "DESC",
  },
};
