function User() {}

User.prototype.playVideo = function () {
  console.log(111);
};

function VipUser() {}

Object.setPrototypeOf(VipUser.prototype, User.prototype);

const vip = new VipUser();

vip.playVideo();
