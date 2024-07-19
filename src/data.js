const getDummyData = () => {
    return [
        {
            id: 1,
            title: "bola",
            body: "deskripsi bola",
            createdAt: '2024-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: 2,
            title: "voli",
            body: "deskripsi voli",
            createdAt: '2024-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: 3,
            title: "basket",
            body: "deskripsi basket",
            createdAt: '2024-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: 4,
            title: "tenis",
            body: "deskripsi tenis",
            createdAt: '2024-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: 5,
            title: "bulutangkis",
            body: "deskripsi bulutangkis",
            createdAt: '2024-04-14T04:27:34.572Z',
            archived: true,
        },
        {
            id: 6,
            title: "renang",
            body: "deskripsi renang",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: true,
        },
    ];
};

//   const showFormattedDate = (date) => {
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric"
//     }
//     return new Date(date).toLocaleDateString("id-ID", options)
//   }

export { getDummyData, showFormattedDate };
