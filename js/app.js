/**
 * darxtalkers.com Shared Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effects on load
    document.body.classList.add('animate-fade-in');

    // Navigation Active States
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a, aside a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '#') {
            link.classList.add('text-primary');
            link.classList.add('font-bold');
        }
    });

    // Initialize Components
    initializeSearch();
    initializeSubscriptions();
    if (window.location.pathname.includes('chat.html')) {
        initializeChat();
    }
});

/**
 * Character Search Logic
 */
function initializeSearch() {
    const heroSearch = document.querySelector('#hero-search');
    const navSearch = document.querySelector('#nav-search');
    const grid = document.querySelector('#character-grid');
    
    if (!grid) return;
    
    const cards = grid.querySelectorAll('a');

    function filterCards(query) {
        const lowQuery = query.toLowerCase();
        cards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            const tags = card.querySelector('span.text-secondary')?.textContent.toLowerCase() || '';
            
            if (name.includes(lowQuery) || desc.includes(lowQuery) || tags.includes(lowQuery)) {
                card.style.display = 'block';
                card.classList.add('animate-fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (heroSearch) heroSearch.addEventListener('input', (e) => filterCards(e.target.value));
    if (navSearch) navSearch.addEventListener('input', (e) => filterCards(e.target.value));
}

/**
 * Subscription Perspective
 */
function initializeSubscriptions() {
    const planButtons = document.querySelectorAll('[onclick^="setPlan"]');
    
    // Check if we are on the pricing page logic
    window.setPlan = function(planName) {
        localStorage.setItem('userPlan', planName);
        alert(`Success! You have switched to the ${planName} plan.`);
        window.location.href = 'user_profile.html';
    };

    // Update UI based on plan if needed
    const currentPlan = localStorage.getItem('userPlan') || 'Free';
    const planDisplays = document.querySelectorAll('.current-plan-display');
    planDisplays.forEach(el => el.textContent = currentPlan);
}

/**
 * Chat Simulation for chat.html
 */
function initializeChat() {
    const chatInput = document.querySelector('textarea');
    const sendBtn = document.querySelector('button.neon-glow');
    const chatContainer = document.querySelector('.chat-scroll');

    if (!chatInput || !sendBtn || !chatContainer) return;

    function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'flex flex-col items-end gap-2 max-w-3xl ml-auto animate-fade-in' : 'flex items-start gap-4 max-w-4xl animate-fade-in';
        
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (isUser) {
            messageDiv.innerHTML = `
                <div class="bg-surface-container-highest text-on-surface p-5 rounded-2xl rounded-tr-sm shadow-lg leading-relaxed text-md font-medium max-w-full">
                    ${text}
                </div>
                <span class="text-[10px] text-gray-600 font-medium italic px-2">Sent • ${timestamp}</span>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
                    <img alt="Aria Avatar" class="w-full h-full object-cover" 
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxjEJD9WG1uAfQwxCJVQFcoC5Xm7mmoQvGvLqyqR5A9TZgvy0UWg1FsJMsh9U9bQp7cr4tBhCoLAwtjO-oCTciVD7dNYVaRKneLr0QKH6jDOExpT5GVfx4LfM8VlqWskGopuUHoOvDMsMCZcTiLENTzU8VdjtH9usS3NCdqUDNCnSOFRY_62EB__Gl8oUYPfnd-TxR6jaXIm0znQMSlfNYqJHVtxCM9DiwrcsYAgFT_q5DmE452Up77SJBOHfXdhDW6TqdmF0CEc8">
                </div>
                <div class="space-y-2">
                    <div class="glass-panel text-on-surface-variant p-5 rounded-2xl rounded-tl-sm border border-secondary/10 leading-relaxed text-md font-light shadow-xl">
                        ${text}
                    </div>
                    <div class="flex gap-4 px-2">
                        <span class="text-[10px] text-gray-600 font-medium italic">Aria • ${timestamp}</span>
                    </div>
                </div>
            `;
        }

        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
        const msg = chatInput.value.trim();
        if (msg) {
            addMessage(msg, true);
            chatInput.value = '';
            
            // Simulate AI reply
            setTimeout(() => {
                addMessage("I hear you. That's a fascinating perspective. Let me reflect on that for a moment...", false);
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
}
window.initializeChat = initializeChat;
