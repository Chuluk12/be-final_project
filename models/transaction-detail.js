"use strict";
module.exports = (sequelize, DataTypes) => {
  const transaction_details = sequelize.define(
    "transaction_details",
    {
      
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        default: DataTypes.UUID4
      },
      product_id: DataTypes.STRING,
      transaction_id: DataTypes.STRING,
      qty: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER
    },
    {
        tableName: 'transaction_details',
    }
  );
 
  return transaction_details;
};
