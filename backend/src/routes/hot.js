const express = require('express');
const router = express.Router();
const hotTrendThreadsController = require('../controllers/HotTrendThreadsController');
const hotTrendTopicsController = require('../controllers/HotTopicController');
const emailController = require('../controllers/EmailController');
const cron = require('node-cron');

router.get('/threads', hotTrendThreadsController.getHotTrendThreads);
router.get('/topics/:topic', hotTrendTopicsController.getTopicThreads);
router.get('/topics', hotTrendTopicsController.getHotTrendTopics);
router.post('/send-emails', (req, res) => {
  //set schedule 9PM
  cron.schedule('0 21 * * *', async () => {
    try {
      await emailController.sendThreads();
      await emailController.sendTopics();
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  });
  res.send('Emails are scheduled to be sent at 7');
});

module.exports = router;
