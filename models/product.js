'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: {
        defaultValue: DataTypes.UUID4,
        type: DataTypes.UUID,
        primaryKey: true
    },
    nama_produk: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {});
//   booking.associate = function(models) {
//     // associations can be defined here

//     booking.belongsTo(models.user, {
//       as: 'bookingCustomer',
//       foreignKey: 'user_id',
//       attributes: {
//         exlude: ['password', 'createdAt', 'updatedAt']
//         // include: ['id', 'fullname', 'email', 'phone']
//       }
//     });

//     booking.belongsTo(models.dorm, {
//       as: 'bookingDorm',
//       foreignKey: 'dorm_id',
//       // attributes: {
//       //   exlude: ['password', 'createdAt', 'updatedAt']
//       //   // include: ['id', 'fullname', 'email', 'phone']
//       // }
//     });
//   };
  return product;
};