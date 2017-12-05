import SimpleWebRTC from 'simplewebrtc';

var webrtc = new SimpleWebRTC({
    localVideoEl: 'localVideo',
    remoteVideosEl: 'remoteVideos',
    autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
    webrtc.joinRoom('your awesome room name');
});
