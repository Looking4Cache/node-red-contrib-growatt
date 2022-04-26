module.exports = function(RED) {

  function GrowattConfigNode(n) {
    RED.nodes.createNode(this,n);
    this.name = n.name;
    this.username = n.username;
    this.password = this.credentials.password;
  }

  RED.nodes.registerType("growatt-config",GrowattConfigNode, {
    credentials: {
      password: {type:"text"}
    }
  });

}
