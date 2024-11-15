'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add a temporary column
    await queryInterface.addColumn('users', 'dob_temp', {
      type: Sequelize.DATEONLY,
    });

    // Convert valid dates and set NULL for invalid ones
    await queryInterface.sequelize.query(`
      UPDATE "users" 
      SET "dob_temp" = CASE
        WHEN "dob" ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' AND "dob"::DATE IS NOT NULL
        THEN "dob"::DATE
        ELSE NULL
      END
    `);

    // Remove the old 'dob' column
    await queryInterface.removeColumn('users', 'dob');

    // Rename the 'dob_temp' column to 'dob'
    await queryInterface.renameColumn('users', 'dob_temp', 'dob');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'dob', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
