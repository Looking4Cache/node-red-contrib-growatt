# node-red-contrib-growatt

With this node you can download data from the Growatt© Shine Webserver. It is only a wrapper around the existing library of PLCHome. Thanks for that!


## Installation of Node-RED nodes

You can install the growatt node through the Node-RED library. Search for 'node-red-contrib-growatt'.


## Usage

After creating a 'Growatt' node, create at least one config node for the credentials you use to login at your ShinePhone app or on https://server.growatt.com. The config node you can reuse on several 'Growatt' nodes.

As soon as a message arrives at the input of the node, the API call will be performed. The API result will be send as a new message through the output.


## Known issues

This node does not support the parameters historyLastStartDate, historyLastEndDate and historyStart at the moment, which is already available on the underlaying library.


## Contact / Issues

If you have issues with the Node-RED implementation: https://github.com/Looking4Cache/node-red-contrib-growatt

If you have issues with the underlaying growatt API library: https://github.com/PLCHome/growatt


## Version History

Version 1.0.0:
- Initial release
