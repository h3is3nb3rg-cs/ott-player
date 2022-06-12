const ALL_MOVIES = [
  {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "1",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
      ],
    },
  },
  {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "2",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
      ],
    },
  },
  {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "3",
    "page-size-requested": "20",
    "page-size-returned": "14",
    "content-items": {
      content: [
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster7.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg",
        },
        {
          name: "The Birds with an Extra Long Title",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "posterthatismissing.jpg",
        },
      ],
    },
  },
];

export const getMovies = (pageNumber) => {
  let paginatedData = ALL_MOVIES.filter((item) => {
    return item["page-num-requested"] === pageNumber;
  });
  return new Promise((resolve, reject) => {
    if (paginatedData.length) {
      resolve({
        total: paginatedData[0]["total-content-items"],
        list: Object.values(paginatedData[0]["content-items"].content),
      });
    } else resolve([]);
  });
};

export const findMovies = (searchString) => {
  const searchResults = [];
  ALL_MOVIES.forEach((page) => {
    page["content-items"].content.forEach((movie) => {
      if (movie.name.toLowerCase().includes(searchString)) {
        searchResults.push(movie);
      }
    });
  });
  return new Promise((resolve, reject) => {
    resolve({
      total: searchResults.length,
      list: searchResults,
    });
  });
};
