import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction"


const initialState = {
    cart: [],
    products: [{
        "id": 1,
        "img": "https://resources.pulse.icc-cricket.com/players/284/287.png",
        "name": "Tamim Iqbaal",
        "email": "cleborgne0@nih.gov",
        "gender": "Polygender",
        "ip_address": "197.45.180.29",
        "salary": 88200,
        "country": "Bangladesh"
      }, {
        "id": 2,
        "img": "https://resources.pulse.icc-cricket.com/players/284/391.png",
        "name": "Mashrafee Mortoja",
        "email": "rhanwright1@blog.com",
        "gender": "Non-binary",
        "ip_address": "129.68.172236",
        "salary": 42451,
        "country": "Bangladesh"
      }, {
        "id": 3,
        "img": "https://resources.pulse.icc-cricket.com/players/284/491.png",
        "name": "Mushfikur Rahim",
        "email": "lfoort2@about.com",
        "gender": "Polygender",
        "ip_address": "92.187.61.175",
        "salary": 94320,
        "country": "Bangladesh"
      }, {
        "id": 4,
        "img": "https://static.toiimg.com/thumb/msid-76356800,width-500,resizemode-4,imgsize-/76356800.jpg",
        "name": "Mahmudullah Riad",
        "email": "eedwins3@unicef.org",
        "gender": "Genderfluid",
        "ip_address": "4.72.166.109",
        "salary": 91151,
        "country": "Bangladesh"
      }, {
        "id": 5,
        "img": "https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Liton-Das-CWC19.ashx",
        "name": "Liton Das ",
        "email": "lsorsbie4@google.com",
        "gender": "Male",
        "ip_address": "159.29.47.169",
        "salary": 31692,
        "country": "Bangladesh"
      }, {
        "id": 6,
        "img": "https://resources.pulse.icc-cricket.com/players/284/201.png",
        "name": "Sakib Al Hasan",
        "email": "tbowller5@icio.us",
        "gender": "Female",
        "ip_address": "155.227.133.133",
        "salary": 21793,
        "country": "Bangladesh"
      }, {
        "id": 7,
        "img": "https://resources.pulse.icc-cricket.com/players/284/1919.png",
        "name": "Soumya Sarkar",
        "email": "csafell6@spiegel.de",
        "gender": "Male",
        "ip_address": "209.143.75.5",
        "salary": 72311,
        "country": "Bangladesh"
      }, {
        "id": 8,
        "img": "https://resources.pulse.icc-cricket.com/players/champions-trophy-2017/284/1493.png",
        "name": "Imrul Kayes",
        "email": "abenning7@com.com",
        "gender": "Bigender",
        "ip_address": "215.117.183.45",
        "salary": 61906,
        "country": "Bangladesh"
      }, {
        "id": 9,
        "img": "https://resources.pulse.icc-cricket.com/players/284/1734.png",
        "name": "Sabbir Rahman",
        "email": "cmartindale8@fastcompany.com",
        "gender": "Genderqueer",
        "ip_address": "80.201.75.4",
        "salary": 19411,
        "country": "Bangladesh"
      }, {
        "id": 10,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWe_LnaaWhaNiR9AB2x1hrazmk5MvwiAYFw&usqp=CAU",
        "name": "Afif Husain",
        "email": "afolland9@gmpg.org",
        "gender": "Non-binary",
        "ip_address": "211.116.55.209",
        "salary": 24515,
        "country": "Bangladesh"
      }, {
        "id": 11,
        "img": "https://resources.pulse.icc-cricket.com/players/284/1588.png",
        "name": "Mosaddek Soikat",
        "email": "dkohrdinga@marketwatch.com",
        "gender": "Agender",
        "ip_address": "107.212.88.242",
        "salary": 81612,
        "country": "Bangladesh"
      }, {
        "id": 12,
        "img": "https://resources.pulse.icc-cricket.com/players/284/2915.png",
        "name": "Saif Uddin",
        "email": "cmatthewsb@bravesites.com",
        "gender": "Genderqueer",
        "ip_address": "255.19.224.32",
        "salary": 72332,
        "country": "Bangladesh"
      }, {
        "id": 13,
        "img": "https://resources.pulse.icc-cricket.com/players/champions-trophy-2017/284/1839.png",
        "name": "Taskin Ahmed",
        "email": "bwindrumc@auda.org.au",
        "gender": "Bigender",
        "ip_address": "155.224.217.63",
        "salary": 72844,
        "country": "Bangladesh"
      }, {
        "id": 14,
        "img": "https://resources.pulse.icc-cricket.com/players/284/1135.png",
        "name": "Rubel Hasan",
        "email": "hpittwoodd@cnn.com",
        "gender": "Female",
        "ip_address": "115.156.73.204",
        "salary": 61994,
        "country": "Bangladesh"
      }, {
        "id": 15,
        "img": "https://resources.pulse.icc-cricket.com/players/284/1594.png",
        "name": "Mustafizz",
        "email": "ssedwicke@abc.net.au",
        "gender": "Polygender",
        "ip_address": "198.183.242.47",
        "salary": 54169,
        "country": "Bangladesh"
      }]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
            return { ...state, cart: newCart };

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return { ...state, cart: remainingCart}

        default:
            return state;
    }
}

export default cartReducers;