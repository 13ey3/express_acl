import express from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/sendResponse";

import PegawaiConroller from "../controllers/PegawaiConroller";

export default (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/api/v1", (req, res) => {
    return sendSuccessResponse(res, 200, [
      {
        id: 1,
        name: "heru",
        email: "heru@mail.com",
      },
      {
        id: 2,
        name: "hendra",
        email: "hendra@mail.com",
      },
    ]);
  });

  app.get("/api/v1/getAllPegawai", PegawaiConroller.getAllPegawai);
  app.get("/api/v1/getAllPegawais", PegawaiConroller.getAllPegawais);

  app.get("/", (req, res) => {
    return sendSuccessResponse(res, 200, "selmata datang", "ini response");
  });
};
