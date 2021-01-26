require('dotenv').config();

const devSetting = {
  MAX_RECORDS: 10,
  credentials: {
    accessHost: process.env.ACCESS_HOST,
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
  },
  AWS_CONFIG_S3: {
    Bucket: process.env.BUCKET_NAME,
    Timeout: process.env.TIMEOUT,
  },
  AWS_FROM: process.env.AWS_FROM_EMAIL,
  AWS_BUCKET: process.env.BUCKET_NAME,
  SECRET: process.env.SECRET,
  OTP_LENGTH: 6,
};

module.exports = devSetting;
