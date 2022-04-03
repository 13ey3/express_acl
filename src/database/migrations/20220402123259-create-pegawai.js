export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pegawai', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      nip: {
        type: Sequelize.STRING(20)
      },
      jabatan: {
        type: Sequelize.STRING(30)
      },
      golongan: {
        type: Sequelize.STRING(30)
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['L', 'P'],
        defaultValue: 'L'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pegawai');
  }
};