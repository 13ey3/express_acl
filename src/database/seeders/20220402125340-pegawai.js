// import model from "../../models";

export default {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("pegawai", [
      {
        name: "Hendra",
        nip: "1232132 123123 123",
        jabatan: "Kepala Bidang",
        golongan: "V A",
        gender: "L",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Hilmi",
        nip: "3213121 123123 123",
        jabatan: "Kepala Sub Bidang",
        golongan: "III D",
        gender: "P",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Hilmi",
        nip: "3213121 123123 321",
        jabatan: "Kepala Sub Bidang",
        golongan: "III D",
        gender: "L",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("pegawai", null, {});
  },
};
