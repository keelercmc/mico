
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { id: 1,
          JSON_front:
          `{title: whatever,
            cardnumber: 23,
            kanji: 好き
          }`,
          JSON_back:
          `{answer: stuff,
            pronunciation: suki,
            translation: to like
          }`,
          deck_id: 1
      },
      { id: 2,
        JSON_front:
        `{title: cardtitle,
          cardnumber: 33,
          kanji: 走る
        }`,
        JSON_back:
        `{hirigana: はしる,
          pronunciation: hashiru,
          translation: to run
        }`,
        deck_id: 1
    },
    { id: 3,
      JSON_front:
      `{title: lettitle,
        cardnumber: 43,
        kanji: 辞典
      }`,
      JSON_back:
      `{hirigana: じてん,
        pronunciation: jiten,
        translation: dictionary
      }`,
      deck_id: 3
  }
      ]);
    });
};
