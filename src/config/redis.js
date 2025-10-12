const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-10674.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10674
    }
});

module.exports = redisClient;
