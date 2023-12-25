const cron = require("node-cron");

/**
 crontab syntax
  * * * * *
  | | | | |
  | | | | day of week
  | | | month
  | | day of month
  | hour
  minute
 */

//send email after 1 minute
cron.schedule("* * * * *", function () {
  console.log("====> Running a task every minute.");
});