'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actors', [
      {
        firstName: 'Syifaul',
        lastName: 'Qolbi',
        date: new Date(),
        age: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Auliya',
        lastName: 'Darojat',
        date: new Date(),
        age: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Adinda',
        lastName: 'Aulia',
        date: new Date(),
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Carissa',
        lastName: 'Aprilia',
        date: new Date(),
        age: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Cindy',
        lastName: 'Dila',
        date: new Date(),
        age: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actors', null, {});
  }
};
