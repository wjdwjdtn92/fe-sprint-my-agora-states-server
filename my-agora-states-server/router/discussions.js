// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById, create, count } = discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

router.get("/count/", count);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

router.post("/", create);

module.exports = router;
