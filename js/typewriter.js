/* ============================================
   TYPEWRITER EFFECT
   Smooth Typing Animation
   ============================================ */

class Typewriter {
    constructor(element, options = {}) {
        if (!element || !(element instanceof Element)) {
            throw new Error('Typewriter requires a valid DOM element');
        }

        this.element = element;
        this.speed = options.speed || 40;
        this.delay = options.delay || 0;
        this.cursor = options.cursor !== false;
        this.onComplete = options.onComplete || (() => {});
        this.cursorElement = null;

        // Used to cancel in-flight typing when restarted/stopped
        this._runId = 0;
    }

    async type(text) {
        const runId = ++this._runId;
        const content = String(text ?? '');

        // Clear existing content
        this.element.innerHTML = '';
        this.cursorElement = null;
        
        // Check if text contains section markers
        if (content.includes('|||')) {
            await this.typeSections(content, runId);
            return;
        }

        // Add cursor
        if (this.cursor) {
            this.cursorElement = document.createElement('span');
            this.cursorElement.className = 'typing-cursor';
            this.element.appendChild(this.cursorElement);
        }

        // Wait for initial delay
        if (this.delay > 0) {
            await this.wait(this.delay);
        }

        // If we were stopped/restarted during delay
        if (runId !== this._runId) return;

        // Type each character
        for (let i = 0; i < content.length; i++) {
            if (runId !== this._runId) return;

            const char = content[i];
            
            // Insert character before cursor
            if (char === '\n') {
                const br = document.createElement('br');
                if (this.cursorElement) {
                    this.element.insertBefore(br, this.cursorElement);
                } else {
                    this.element.appendChild(br);
                }
            } else {
                const textNode = document.createTextNode(char);
                if (this.cursorElement) {
                    this.element.insertBefore(textNode, this.cursorElement);
                } else {
                    this.element.appendChild(textNode);
                }
            }

            // Variable speed for natural feel
            let charDelay = this.speed;
            
            // Pause longer at punctuation
            if (['.', '!', '?'].includes(char)) {
                charDelay = this.speed * 8;
            } else if ([',', ';', ':'].includes(char)) {
                charDelay = this.speed * 4;
            } else if (char === '\n') {
                charDelay = this.speed * 3;
            }

            await this.wait(charDelay);
        }

        if (runId !== this._runId) return;

        // Remove cursor after typing
        if (this.cursorElement) {
            await this.wait(500);

            if (runId !== this._runId) return;
            this.cursorElement.style.animation = 'none';
            this.cursorElement.style.opacity = '0';
        }

        this.onComplete();
    }

    async typeSections(content, runId) {
        const sections = content.split('|||').map(s => s.trim()).filter(s => s);
        
        for (let i = 0; i < sections.length; i++) {
            if (runId !== this._runId) return;
            
            const sectionText = sections[i];
            const sectionDiv = document.createElement('div');
            
            // Parse section type (primary|secondary|tertiary)
            let sectionType = 'secondary';
            let lines = sectionText.split('\n').map(l => l.trim()).filter(l => l);
            
            if (sectionText.startsWith('PRIMARY:')) {
                sectionType = 'primary';
                lines = sectionText.replace('PRIMARY:', '').split('\n').map(l => l.trim()).filter(l => l);
            } else if (sectionText.startsWith('TERTIARY:')) {
                sectionType = 'tertiary';
                lines = sectionText.replace('TERTIARY:', '').split('\n').map(l => l.trim()).filter(l => l);
            }
            
            sectionDiv.className = `typing-section ${sectionType}`;
            
            lines.forEach((line, idx) => {
                if (line === 'SPACER') {
                    const spacer = document.createElement('div');
                    spacer.className = 'typing-spacer';
                    sectionDiv.appendChild(spacer);
                } else {
                    const lineDiv = document.createElement('p');
                    lineDiv.className = 'typing-line';
                    if (line.startsWith('*')) {
                        lineDiv.classList.add('emphasis');
                        lineDiv.textContent = line.substring(1).trim();
                    } else {
                        lineDiv.textContent = line;
                    }
                    sectionDiv.appendChild(lineDiv);
                }
            });
            
            this.element.appendChild(sectionDiv);
            
            // Wait before next section
            if (i < sections.length - 1) {
                await this.wait(600);
            }
        }
        
        if (runId !== this._runId) return;
        this.onComplete();
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Stop typing immediately
    stop() {
        this._runId++;
        this.element.innerHTML = '';
        this.cursorElement = null;
    }
}

// Export for use in other files
window.Typewriter = Typewriter;
