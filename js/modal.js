/**
 * Modal Functionality
 * Handles opening, closing, and populating project modals
 */

// DOM Elements
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    
    if (!project) {
        // For demo purposes, show a placeholder
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>PROJECT DETAILS</h2>
                <p>This is a placeholder for project details. Replace with your actual game information.</p>
            </div>
            <div class="modal-body">
                <div class="project-description">
                    <p>Add detailed information about this game, including the concept, gameplay mechanics, development process, and your role in its creation.</p>
                    <p>Include information about any challenges faced and how you overcame them.</p>
                </div>
                
                <h3>SCREENSHOTS</h3>
                <div class="project-gallery">
                    <div class="gallery-item">
                        <img src="/api/placeholder/600/400" alt="Screenshot 1">
                    </div>
                    <div class="gallery-item">
                        <img src="/api/placeholder/600/400" alt="Screenshot 2">
                    </div>
                </div>
                
                <h3>PROJECT DETAILS</h3>
                <div class="project-details">
                    <div class="detail-item">
                        <h4>DEVELOPMENT TIME</h4>
                        <p>Time period</p>
                    </div>
                    <div class="detail-item">
                        <h4>ENGINE</h4>
                        <p>Game engine used</p>
                    </div>
                    <div class="detail-item">
                        <h4>PLATFORM</h4>
                        <p>Target platforms</p>
                    </div>
                    <div class="detail-item">
                        <h4>ROLE</h4>
                        <p>Your role in the project</p>
                    </div>
                </div>
                
                <h3>LINKS</h3>
                <div class="project-links">
                    <a href="#" class="pixel-btn">PLAY GAME</a>
                    </div>
                    </div>
                    `;
                  //upp 3 rader om du vill ha source code med:   <a href="#" class="pixel-btn">VIEW SOURCE</a>
    } else {
        // Create gallery items HTML
        let galleryHTML = '';
        if (project.images && project.images.length > 0) {
            project.images.forEach(img => {
                galleryHTML += `
                    <div class="gallery-item">
                        <img src="${img}" alt="Project Screenshot">
                    </div>
                `;
            });
        }
        
        // Create video items HTML
        let videoHTML = '';
        if (project.videos && project.videos.length > 0) {
            project.videos.forEach(video => {
                // Convert any YouTube watch URLs to embed URLs
                const embedUrl = getYouTubeEmbedUrl(video.url);
                
                videoHTML += `
                    <div class="video-item">
                        <h4>${video.title}</h4>
                        <div class="video-container">
                            <iframe 
                                width="100%" 
                                height="315" 
                                src="${embedUrl}" 
                                title="${video.title}"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                `;
            });
        }
        
        // Create details HTML
        let detailsHTML = '';
        if (project.details && project.details.length > 0) {
            project.details.forEach(detail => {
                detailsHTML += `
                    <div class="detail-item">
                        <h4>${detail.title}</h4>
                        <p>${detail.content}</p>
                    </div>
                `;
            });
        }
        
        // Create links HTML
        let linksHTML = '';
        if (project.links && project.links.length > 0) {
            project.links.forEach(link => {
                linksHTML += `
                    <a href="${link.url}" class="pixel-btn" target="_blank">${link.text}</a>
                `;
            });
        }
        
        // Populate modal with project data, including the new video section
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <h3>${project.subtitle}</h3>
            </div>
            <div class="modal-body">
                <div class="project-description">${project.description}</div>
                
                <div class="project-media-tabs">
                    <button class="media-tab active" data-tab="screenshots">SCREENSHOTS</button>
                    <button class="media-tab" data-tab="videos">VIDEOS</button>
                </div>
                
                <div class="media-content active" id="screenshots-content">
                    <div class="project-gallery">${galleryHTML || '<p>No images available for this project.</p>'}</div>
                </div>
                
                <div class="media-content" id="videos-content">
                    <div class="project-videos">${videoHTML || '<p>No videos available for this project.</p>'}</div>
                </div>
                
                <h3>PROJECT DETAILS</h3>
                <div class="project-details">${detailsHTML}</div>
                
                <h3>LINKS</h3>
                <div class="project-links">${linksHTML}</div>
            </div>
        `;
        
        // Add tab switching functionality
        setTimeout(() => {
            const tabs = document.querySelectorAll('.media-tab');
            const contents = document.querySelectorAll('.media-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Show corresponding content
                    const tabName = tab.getAttribute('data-tab');
                    document.getElementById(`${tabName}-content`).classList.add('active');
                });
            });
        }, 100);
    }
    
    // Show and animate modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Close Modal with animation
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); // Match this to your transition duration
});

// Same for clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
});