/**
 * Project Data
 * Contains information about all projects displayed on the portfolio
 */

// Function to convert YouTube watch URLs to embed URLs
function getYouTubeEmbedUrl(url) {
    // Extract video ID from various YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtube.com/watch')) {
        videoId = new URL(url).searchParams.get('v');
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    }
    
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Return original URL if no pattern matched
    return url;
}

// Project Data Object
const projectData = {
    'game1': {
        title: 'Chained 2 Violence',
        subtitle: '2 Player Arena Survival',
        description: `
            <p>
                Chained 2 Violence is my so far biggest game. 
                I made it together with a team of 7 for our final University Project.
                It's a 2 player co-op arena game similar to games like Vampire Survivor 
                but with the twist of you being chained together with your friend!
            </p>
            <br></br>
            <h3>My Part</h3>
            <p>
                My primary responsibility was to implement the Procedurally generated content of the game.
                I made every enemy be generated visually unique with different constraints based on the enemy type and what the current "era" of the game it is.
                This resulted in around a million uniquely looking enemies. 
                The most difficult part about this was to allow the enemies to always look different but still feel cohesive to the game and easy to understand what enemy type it belonged to
            </p>
            <p>
                I also created all the arenas for the game as well as the majority of the visual effects, shaders, etc.
            </p>
        `,
        images: [
            'images/Chained2Violence/imageOne.jpg',
            'images/Chained2Violence/imageTwo.jpg',
            'images/Chained2Violence/imageThree.jpg'
        ],
        videos: [
            {
                title: 'Game Trailer',
                url: 'https://www.youtube.com/embed/EhS2IWsT0LY'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '7 People'
            },
            {
                title: 'Development Time',
                content: '10 Weeks'
            },
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Platform',
                content: 'PC, Steam Deck'
            },
            {
                title: 'Role',
                content: 'Game Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://store.steampowered.com/app/3307300/Chained_2_Violence/'
            }
        ]
    },
    'game2': {
        title: 'Trombone Champ',
        subtitle: 'Rhythm Game',
        description: `
            <p>A retro rhythm game inspired by Trombone Champ with procedurally generated notes from MIDI files.</p>
            <p>Played using a Nintendo Switch Joy-Con controller for a more immersive experience.</p>
        `,
        images: [
            'images/tromboneChamp/screenshot1.png',
            'images/tromboneChamp/screenshot2.png'
        ],
        videos: [
            {
                title: 'Gameplay Demo',
                url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '4 People'
            },
            {
                title: 'Development Time',
                content: '6 Weeks'
            },
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Platform',
                content: 'PC'
            },
            {
                title: 'Role',
                content: 'Gameplay Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    },
    'game3': {
        title: 'Jolly Frenzy Games',
        subtitle: 'Party Game',
        description: `
            <p>A party game from 2-4 players where you play various fun minigames.</p>
            <p>The game was a project made in the System Development course in Malmö University by me and 4 other students. This was my first complete game.</p>
        `,
        images: [
            'images/JollyFrenzyGames/screenshot1.png',
            'images/JollyFrenzyGames/screenshot2.png'
        ],
        videos: [
            {
                title: 'Gameplay Overview',
                url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '5 People'
            },
            {
                title: 'Development Time',
                content: '8 Weeks'
            },
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Platform',
                content: 'PC'
            },
            {
                title: 'Role',
                content: 'Developer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    },
    'game4': {
        title: 'RPG Adventure',
        subtitle: 'Action RPG Game',
        description: `
            <p>An action RPG featuring character customization, dynamic combat, and procedurally generated dungeons.</p>
            <p>More details about the game development and features here.</p>
        `,
        images: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
        ],
        videos: [
            {
                title: 'Gameplay Demo',
                url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '6 People'
            },
            {
                title: 'Development Time',
                content: '12 Weeks'
            },
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Platform',
                content: 'PC, Mobile'
            },
            {
                title: 'Role',
                content: 'Game Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    },
    'smallgame1': {
        title: 'GAME JAM TITLE 1',
        subtitle: 'Game Jam Entry',
        description: `
            <p>Detailed game description goes here.</p>
            <p>Add more paragraphs as needed.</p>
        `,
        images: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
        ],
        details: [
            {
                title: 'Jam Duration',
                content: '48 hours'
            },
            {
                title: 'Engine',
                content: 'Game Engine'
            },
            {
                title: 'Theme',
                content: 'Jam Theme'
            },
            {
                title: 'Role',
                content: 'Your Role'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    }
    // Add more projects as needed
};