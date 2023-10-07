'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('films', [
            {
                title: 'The Avengers',
                description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
                release_year: 2012,
                rate: 8.0,
                category_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Avengers: Age of Ultron',
                description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
                release_year: 2015,
                rate: 7.3,
                category_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Fast & Furious 6',
                description: 'Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.',
                release_year: 2013,
                rate: 7.1,
                category_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Fast Five',
                description: 'Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.',
                release_year: 2011,
                rate: 7.3,
                category_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Furious 7',
                description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
                release_year: 2015,
                rate: 7.1,
                category_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
