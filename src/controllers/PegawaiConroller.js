import model from "../models";
import { sendErrorResponse, sendSuccessResponse } from "../utils/sendResponse";

const { Pegawai } = model;

export default {
  async getAllPegawai(req, res) {
    try {
      return sendSuccessResponse(
        res,
        200,
        await Pegawai.findAll(),
        "Semua data Pegawai"
      );
    } catch (error) {
      console.log(error);
      return sendErrorResponse(res, 500, "Terjadi kesalahan", error);
    }
  },

  async getAllPegawais(req, res) {
    try {
      let data = await model.sequelize.query("SELECT * FROM Pegawai", {
        type: model.sequelize.QueryTypes.SELECT,
      });

      return sendSuccessResponse(res, 200, data, "Semua data pegawai");
    } catch (error) {
      console.log(error);
      return sendErrorResponse(res, 500, "Terjadi kesalahan", error);
    }
  },
};
