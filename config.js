module.exports = {
    app: {
        token: 'OTUyNDUyNzY3MzY3MTY4MDMx.GsVRuz.tjONQ3kBsYAwcXTuPh4WKA2TbgEAtXCviZ4AEU',
        playing: 'music',
        global: false,
        guild: '906882553468813352'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
