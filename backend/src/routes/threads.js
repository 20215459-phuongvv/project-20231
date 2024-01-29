const express = require("express");
const router = express.Router();

const threadController = require("../controllers/ThreadController");
const replyController = require("../controllers/ReplyController");
const hotTrendThreads = require("../controllers/HotTrendThreadsController");

// router.get("/hot-trend-threads", hotTrendThreads);
router.get("/search", threadController.searchThread);
router.get("/:threadId/replies/summary", replyController.showSummarizedReplies);
router.get("/:threadId/replies/search", replyController.searchReply);
router.get("/:threadId/replies", replyController.showReply);
router.get("/:threadId/summary", threadController.showSummarizedThread);
router.get("/:threadId", threadController.showThread);
router.get("/", threadController.showAll);
module.exports = router;
