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

                The game is available on Steam and uses its Remote play for multiplayer! 
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
                content: '8 People'
            },
            {
                title: 'Development Time',
                content: '20 Weeks'
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
                text: 'PLAY GAME ON STEAM',
                url: 'https://store.steampowered.com/app/3307300/Chained_2_Violence/'
            }
        ]
    },
    'game2': {
        title: 'Trombone Champ',
        subtitle: 'Rhythm Game',
        description: `
            <p>A retro rhythm game inspired by Trombone Champ with procedurally generated notes from MIDI files allowing any MIDI song to be introduced to the game with just a few clicks!</p>
            <p>Played using a Nintendo Switch Joy-Con controller for a more immersive experience.</p>
            <p>The game was a part of a course where we needed to develop the game with certain constraints in mind. This games constraint was "alternate controllers" hence the joy-con!</p>
            <br></br>
            <h3>My Part</h3>
            <p>
                This projects division of labour worked very fluidly. 
                I worked on a lot of different areas, though I found myself mostly helping with the MIDI generation of the notes.
                I also did a lot of the visual aspects of the game, which surprisingly was very closely related to the MIDI system that we created.
                For example, i implemented a system that calculated the beat of the current song and if the player hit a high streak the screen would then pulsate on beat to the song! 
            </p>
        `,
        images: [
            'images/tromboneChamp/imageOne.png'
            
        ],
        videos: [
            {
                title: 'Gameplay Demo',
                url: 'images/tromboneChamp/videoOne.gif'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '4 People'
            },
            {
                title: 'Development Time',
                content: '3 Weeks'
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
                content: 'Game Designer & Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://viggegee.itch.io/tronbone-champ'
            }
        ]
    },
    'game3': {
        title: 'Jolly Frenzy Games',
        subtitle: 'Party Game',
        description: `
            <p>Jolly Frenzy Games is a party game for 2-4 players where you play various of fun minigames.</p>
            <p>The game was a project made in the System Development course in Malmö University by me and 4 other students. This was my first complete game that I made.
            It was also my first ever group project within Data Science</p>
            <br></br>
            <h3>My Part</h3>
            <p>
            I was responsible for the multiplayer of this game. Since this was my first ever big game this was needless to say a big task! And with it came a lot of issues
            But I got it working in the end and also managed to complete a couple of minigames for the game as well!
            This project was very educational for me and I think it was the game that really ignited the spark on what game development is for me today. 
            </p>
        `,
        images: [
            'images/JollyFrenzyGames/ImageOne.png',
            'images/JollyFrenzyGames/ImageTwo.png'
        ],
        videos: [
            {
                title: 'Trailer',
                url: 'https://www.youtube.com/embed/KDZJ6IHWSmI?si=8WkMJWyn4W9-kwfA'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '5 People'
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
                content: 'PC'
            },
            {
                title: 'Role',
                content: 'Multiplayer Developer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://viggegee.itch.io/jolly-frenzy-games'
            }
        ]
    },
    'game4': {
        title: 'High Noon',
        subtitle: 'Western Standoff Game',
        description: `
            <p>
            A one versus one western standoff game where the players do different speed based minigames. 
            These minigames range from typeracers and buttonmashes, to shootingranges and log balancing.
            The game was part of a course that had different periods to it. So we went from 3 people up to finally 8. 
            Each period gave us new requirments to fullfill such as alternate controllers!
            The course also introduced a strict hierarchy where labour had to be ditributed from the leader of the project. 
            The leader was the only one who had contact with the professor of the course as well
            </p>
            <br></br>
            <h3>My Part</h3>
            <p
            >My main responsibility was first of all to develop the Type Racer minigame. This was the main minigame of the game.
            After that I got the responsibility of creating the aesthetics of the game. This included creating every map, working on post processing, sound, music and much more.
            That is not really my area of expertise but I am very happy with what I accomplished; I made an interactive main menu, a bunch of different maps, created my first animations and much mmore!
            </p>
        `,
        images: [
            'images/HighNoon/gifOne.gif',
            'images/HighNoon/gifTwo.gif'
        ],
        videos: [
            {
                title: 'Typeracer Demo',
                url: 'https://www.youtube.com/embed/ee7-tlgfgOo?si=gscHOZs1H_0xnhCW'
            }
        ],
        details: [
            {
                title: 'Team Size',
                content: '4 People'
            },
            {
                title: 'Development Time',
                content: '5 Weeks'
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
                content: 'Game Programmer & Level Designer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: '#'
            }
        ]
    },
    'pcg-project': {
        title: 'Procedural Content Generation',
        subtitle: ' ',
        description: `
            <p>
            I have been very interested in PCG content and taken every opportunity that I could to extend my knowledge within the area
            I took a course att Malmö University about PCG. There I created an adaptive Dungeon Generator using algorithms such as Binary Space Partitioning and Cellular Automata. 
            I also created my own algorithm for Perlin Noise that creates terrain generation and more.
            In the game Chained 2 Violence I also created a procedural enemy generator, which was very inspired by how borderlands generates their weapons.
            It generates the enemies based on the current era of the game, the class of the enemy etc. It makes it so the enemies always are coherent to the game but still always manages to feel unique.
            </p>
        `,
        images: [
            'Images/pcg/bsp.png',
            'Images/pcg/perlin.png',
            'Images/pcg/chained2violence.gif'
        ],
        details: [
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Technologies',
                content: 'BSP, Cellular Automata, Perlin Noise'
            }
            
        ]
    },
    'physics-engine': {
        title: 'Physics Engine',
        subtitle: ' ',
        description: `
            <p>
           For a school assignment I created a Physics Engine in Unity covering some of the fundamental building blocks. 
           i.e., a software system that manages forces, time integration, collisions, and other concepts related to physics in games.
           </p>
        `,
        images: [
            'Images/physics/gifOne.gif',
            'Images/physics/gifTwo.gif'
        ],
        details: [
            {
                title: 'Engine',
                content: 'Unity, C#'
            },
            {
                title: 'Technologies',
                content: 'Buoyancy, Wind, Collision, Ballistic Trajectory'
            }
            

            
            
        ],
        links: [
            {
                text: 'VIEW CODE',
                url: 'https://github.com/ViggeGee/PhysicsProjVT24'
            }
        ]
    },
    'computer-graphics': {
        title: 'Computer Graphics',
        subtitle: ' ',
        description: `
            <p>
            This project is a 3D renderer built with DirectX 11. My task was to work on this framework that in the beginning just imported the models.
            I started by implementing diffuse maps to give everything textures, then adding a phong shader to give it all realistic lightning.
            This introduces some linear algebra to the project. After that I implemented normal mapping and cube mapping to give the textures depth.
            I also worked on implementing different filtering methods like anisotropic and generating mipmap textures.
            Future work would be to introduce Alpha transparency for the plants in the scene to make them look more realistic
            </p>
            <br> </br>
            <p>
            The different images features Phong, Normal mapping, Cubemap, Diffuse, and lastly everything put together!
            
            </p>
        `,
        images: [
            'Images/eduRend/Phong.png',
            'Images/eduRend/NormalMap.png',
            'Images/eduRend/CubeMap.png',
            'Images/eduRend/Diffuse.png',
            'Images/eduRend/Everything.png'
        ],
        videos: [
            {
                title: 'Completed Project',
                url: 'Images/eduRend/DemoGif.gif'
            }
        ],
        details: [
            {
                title: 'Engine',
                content: 'DirectX 11, HLSL, C++'
            },
            {
                title: 'Technologies',
                content: 'Phong Shading, Normal Map, Cubemap, Diffuse, Mip map, Anisotropic filtering'
            }
            

            
            
        ],
        links: [
            {
                text: 'VIEW CODE',
                url: 'https://github.com/ViggeGee/eduRend'
            }
        ]
    },
    'Hacker-XPerience': {
        title: 'Hacker-XPerience',
        subtitle: 'Game Jam Entry 2024',
        description: `
            <p>
            A short puzzle game that simulates being a hacker in the early 2000s.
            Made during the "Game Lab Jam HT23"
            </p>
            <br></br>
            <h3>My Part</h3>
            <p>
            I was responsible for creating the "operative system" of the game. Which in this context meant to create the different apps or levels,
            which the player needed to run to progress in the game. It was really fun for me to work on this since it is so unconventional and outside of the box.
            It was a great challange to make this work fluently but still give the player the feeling of them actually sitting in front of an old computer.
            </p>
        `,
        images: [
            'images/HackerXPerience/imageOne.png',
            'images/HackerXPerience/imageTwo.png',
            'images/HackerXPerience/imageThree.png'
        ],

        videos: [
            {
            title: 'Gameplay demo',
            url: 'https://www.youtube.com/embed/Mj9edNXO9xA?si=5iMQpPHpHXciY3WM'
            }
        ],
        details: [
            {
                title: 'Jam Duration',
                content: '48 hours'
            },
            {
                title: 'Engine',
                content: 'Unity'
            },
            {
                title: 'Theme',
                content: 'You are the villain'
            },
            {
                title: 'Role',
                content: 'Game Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://kim-svedberg.itch.io/hacker-xperience'
            }
        ]
    },
    'Magnets': {
        title: 'Magnets',
        subtitle: 'Game Jam Entry 2022',
        description: `
            <p>
            A short physics based platformer game made during the "Game Lab Jam VT22". The theme of the Jam was something along the lines with"unconventional forces"
            So we made a game where you as the player plays as a magnet in a platformer game, and you have the ability to switch the force that your magnet have
            So you could attract and repulse to other magnets to complete the obstacle course.   
            </p>
            <br></br>
            <h3>My Part</h3>
            <p>
            This was the first game that I worked on, so I didnt take on too big responsibilities here. My primary goal was to learn Unity.
            I hence took on the task of creating the tutorial of the game. I also added checkpoints, powerpellets and the player controller of the game.
            It was a really fun experience and it made me really excited about what game development had to offer!
            </p>
        `,
        images: [
            
        ],
        details: [
            {
                title: 'Jam Duration',
                content: '48 hours'
            },
            {
                title: 'Engine',
                content: 'Unity'
            },
            {
                title: 'Theme',
                content: 'Unconvnetional Forces'
            },
            {
                title: 'Role',
                content: 'Game Programmer'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://viggegee.itch.io/magnets'
            }
        ]
        
    },
    
    'Janitor Life': {
        title: 'Janitor Life',
        subtitle: 'Game Jam Entry 2024',
        description: `
            <p>
                You are a normal Janitor that works during closed office hours. 
                During this time a crazy amount of thieves come and try to steal the offices computers. 
                It's your job to make these thieves dissapear with your trustful mop. 
                If you don't succeed with this you will get fired for stolen office property!
                This game was made during a week long GameJam along with two other team members. The theme of the GameJam was "Unsung Heroes
            </p>
            <br></br>
            <h3>My Part</h3>
            <p>
            During this game I primarily worked on the player. Trying to create a player-controller that worked very fluently and felt good.
            Aside from that I did a lot of work with animations, learning about key-handles and root motion.
            Lastly I did the UI of the game and some effects, just to add the juice of the game.
            </p>
        `,
        images: [
            
        ],
        details: [
            {
                title: 'Jam Duration',
                content: '48 hours'
            },
            {
                title: 'Engine',
                content: 'Unity'
            },
            {
                title: 'Theme',
                content: 'Unsung Heroes'
            },
            {
                title: 'Role',
                content: 'Gameplay programmer, animations & UI'
            }
        ],
        links: [
            {
                text: 'PLAY GAME',
                url: 'https://viggegee.itch.io/janitor-life'
            }
        ]
        
    }
    
    // Add more projects as needed
};