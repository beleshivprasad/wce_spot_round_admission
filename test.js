const bcrypt = require("bcryptjs");
const salt = bcrypt.genSalt(10).then((salt) => {
  const hash = bcrypt.hash("admin", salt).then((hash) => {
    console.log(salt);
    console.log(hash);
  });
});

bcrypt
  .compare(
    "sysAdmin",
    "$2a$10$gRQjlpAHrikotQQ3sTNcv.NC4KaxBYnl3mBuRNx5Y8dnkbxXUgnc2"
  )
  .then((same) => {
    console.log(same);
  });
