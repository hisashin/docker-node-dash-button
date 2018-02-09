[Github](https://github.com/hisashin/docker-node-dash-button), [DockerHub](https://hub.docker.com/r/hisashin/node-dash-button/)

Please use [hisashin/rpi-node-dash-button](https://hub.docker.com/r/hisashin/rpi-node-dash-button/) if it's Raspberry Pi.

Based on [node-dash-button](https://github.com/hortinstein/node-dash-button#first-time-dash-setup). Great work!

* First time Dash Setup
* Run This Image
* Get MAC address of your Dash
* Customize script
* Restart

# First time Dash Setup

As described [here](https://github.com/hortinstein/node-dash-button#first-time-dash-setup)

"Follow Amazon's instructions to configure your button to send messages when you push them but not actually order anything. When you get a Dash button, Amazon gives you a list of setup instructions to get going. Just follow this list of instructions, but don’t complete the final step. **Do not select a product, just exit the app.**"

# Run This Image

    docker run -it --net host --name node-dash-button hisashin/node-dash-button

# Get MAC address of your Dash

    # /node_modules/node-dash-button/bin/findbutton
    Watching for arp & udp requests on your local network, please try to press your dash now
    Dash buttons should appear as manufactured by 'Amazon Technologies Inc.' 

Then press Dash. Messages will be added like this.

    Possible dash hardware address detected: 11:22:33:44:55:66 Manufacturer: unknown Protocol: udp
    Possible dash hardware address detected: 11:22:33:44:55:66 Manufacturer: unknown Protocol: arp

In this case, 11:22:33:44:55:66 is MAC address of your Dash.

# Customize script

    vi /dash.js
 
    dash_button('aa:bb:cc:dd:ee:ff', null, null, 'all').on('detected', function() {
    //  https_get('www.google.com', '/foo/bar');	// for example to GET https://www.google.com/foo/bar
    //  http_get('www.google.com', '/foo/bar');	// for example to GET http://www.google.com/foo/bar
    });
Edit around this section as you want with the MAC address you got.

    dash_button('11:22:33:44:55:66', null, null, 'all').on('detected', function() {
      https_get('maker.ifttt.com', '/trigger/{your IFTTT event}/with/key/{your IFTTT secret key}');
    });
If you want to call IFTTT webhook, it will be like this.

# Restart

    forever stop /dash.js
    /start.sh

Ctrl+P, Ctrl+Q to escape. To autostart, add following line to /etc/rc.local

    docker start node-dash-button


