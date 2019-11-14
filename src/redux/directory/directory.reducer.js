const INITIAL_STATE = {
  sections: [
    {
      title: "computers",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008__340.jpg",
      id: 1,
      linkUrl: "shop/computers"
    },
    {
      title: "phones",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/12/30/android-1869510__340.jpg",
      id: 2,
      linkUrl: "shop/phones"
    },
    {
      title: "drones",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/12/07/14/18/drone-1080844_960_720.jpg",
      id: 3,
      linkUrl: "shop/drones"
    },
    {
      title: "headphones",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__340.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/headphones"
    },
    {
      title: "watches",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167__340.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/watches"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
