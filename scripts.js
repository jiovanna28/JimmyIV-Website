// Example function to dynamically add updates (can be expanded for actual database integration)
function addUpdate(text) {
    const updateSection = document.getElementById("updates");
    const newUpdate = document.createElement("div");
    newUpdate.classList.add("update");
    newUpdate.innerHTML = `<p>${text}</p>`;
    updateSection.appendChild(newUpdate);
}

// Example of adding an update
addUpdate("Check out my socials @JimmyIVMusic for more info!");

// List of available songs
document.addEventListener('DOMContentLoaded', function() {
    // List of available songs
    const songs = [
        'AB.mp3',
        'Fantasy and Lore.mp3',
        'Core prod. Jimmy IV.mp3'
    ];

    // Get the music list container
    const musicList = document.getElementById('music-list');
    
    // Check if the container is accessed
    console.log("Music list container:", musicList);
    
    // Loop through the songs and create audio elements for each
    songs.forEach(song => {
        console.log(`Loading song: ${song}`);
    
        // Create a container for each song
        const songContainer = document.createElement('div');
        
        // Audio player
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = `music/${song}`;  // Path to song file in the music folder
    
        // Song title
        const title = document.createElement('p');
        title.textContent = song.replace(/.mp3$/, '');  // Display title without ".mp3"
    
        songContainer.appendChild(title);
        songContainer.appendChild(audio);
        musicList.appendChild(songContainer);
    });
});


