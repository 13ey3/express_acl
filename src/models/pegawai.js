import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pegawai.init(
    {
      name: DataTypes.STRING,
      nip: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Nip sudah ada",
        },
      },
      jabatan: DataTypes.STRING,
      golongan: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM('L', 'P'),
        defaultValue: "L",
      },
    },
    {
      sequelize,
      modelName: "Pegawai",
      freezeTableName: true,
      tableName: 'pegawai'
    }
  );
  return Pegawai;
};
