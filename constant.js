exports.STORE_PERIOD_MS = 1_000 * 60 * 60 * 24;
exports.NUM_OF_DATA_PER_PAGE = 50;

exports.PORT = 8080;

exports.LOST_SCHEDULE = { hour: 21, minute: 0 };
exports.FOUND_SCHEDULE = { hour: 19, minute: 30 };
exports.NOTIFICATION_SCHEDULE = { hour: 22, minute: 30 };

exports.NOTIFICATION_ARN = "arn:aws:sns:ap-northeast-2:474508938513:Lost_Catch";
exports.NOTIFICATION_TITLE = "DB Updated!";
exports.NOTIFICATION_MESSAGE = "check your lost";
