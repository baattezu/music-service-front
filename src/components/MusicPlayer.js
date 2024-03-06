


const MusicPlayer = () => {
    return (
        <div class="music-player">
            <img src="your-music-cover.jpg" alt="Music Cover"/>

                <div class="music-info">
                    <div class="music-title">Song Title</div>
                    <div class="music-artist">Artist Name</div>
                </div>

                <div class="controls">
                    <button class="control-btn">Previous</button>
                    <button class="control-btn">Play</button>
                    <button class="control-btn">Next</button>
                </div>

                <div class="progress-bar">
                    <div class="progress" style="width: 50%;"></div>
                </div>
        </div>
    )


}

export default MusicPlayer