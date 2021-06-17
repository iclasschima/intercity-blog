module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "intercity.bm05j.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "intercity-blog"),
        username: env("DATABASE_USERNAME", "iclasschima"),
        password: env("DATABASE_PASSWORD", "iclasschima"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST", "intercity.bm05j.mongodb.net"),
//         srv: env.bool("DATABASE_SRV", true),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME", "intercity-blog"),
//         username: env("DATABASE_USERNAME", "iclasschima"),
//         password: env("DATABASE_PASSWORD", "iclasschima"),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", true),
//       },
//     },
//   },
// });
