const state = {
    profile: {
        posts: [
            {
                id: 1,
                userInfo: {
                    nickname: `John Garner`,
                    avatar: `https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg`
                },
                message: `Hey. How are you feeling today?`,
                likeCount: 20
            },
            {
                id: 2,
                userInfo: {
                    nickname: `Michael Smith`,
                    avatar: `https://i.guim.co.uk/img/media/b3f9db5d504c00304c37724927b6e407da17c36b/0_197_5850_3511/master/5850.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=87966753ed0906994f60f72735295414`
                },
                message: `I finished my album. Go check it out!`,
                likeCount: 34
            },
            {
                id: 3,
                userInfo: {
                    nickname: `Alex Drake`,
                    avatar: `https://sticker-collection.com/stickers/plain/johnnysinsbrazzers/512/c912f70a-f67f-4fe1-af3c-10b5c590047ffile_368359.webp`
                },
                message: `I'm going on a picnic. Do you wanna join?`,
                likeCount: 1
            },
        ],
    },
    dialogs: [
            {id: 1, name: `John Garner`},
            {id: 2, name: `Jane Heaton`},
            {id: 3, name: `Alex Drake`},
            {id: 4, name: `Jakub Mathis`},
            {id: 5, name: `Elisabeth Plummer`},
        ],
}

export default state;