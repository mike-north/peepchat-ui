import PhoenixSocket from 'phoenix/services/phoenix-socket';

export default PhoenixSocket.extend({

  init() {
    // You may listen to open, "close" and "error"
    this.on('open', () => {
      console.log('Socket was opened!');
    })
  },

  connect(/*url, options*/) {
    const myjwt = "abacnwih12eh12...";
    // connect the socket
    this._super("wss://myhost.com/socket/mysocket", {
      params: {token: myjwt}
    });

    // join a channel
    const channel = this.joinChannel("room:123", {
      nickname: "Mike"
    });

    // add message handlers
    channel.on("notification", () => _onNotification(...arguments));
  },

  _onNotification(message) {
    alert(`Notification: ${message}`);
  }
});
