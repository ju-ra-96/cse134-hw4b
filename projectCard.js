class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    // Initialize the card content with default structure
    render() {
        this.shadowRoot.innerHTML = `
        <style>
        .card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 300px;
            margin: 10px;
        }
        .card-body {
            padding: 15px;
        }
        .card-title {
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        .card-text {
            margin-bottom: 10px;
            color: #777;
        }
        .btn {
            display: inline-block;
            background-color: #007BFF;
            color: #FFF;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .card-img-top {
            width: 100%;
            height: auto;
        }
        </style>
        <div class="card">
            <article class="card-body">
                <h2 class="card-title"></h2>
                <p class="card-text"></p>
                <img alt="" class="card-img-top">
                <a target="_blank" class="btn btn-primary">View Project</a>
                <p class="author"></p>
                <p class="date"></p>
            </article>
        </div>
        `;
    }

    // Getters and Setters for the properties of the custom element

    set name(value) {
        this.shadowRoot.querySelector('.card-title').textContent = value;
    }

    get name() {
        return this.shadowRoot.querySelector('.card-title').textContent;
    }

    set alt(value) {
        this.shadowRoot.querySelector('img').alt = value;
    }

    get alt() {
        return this.shadowRoot.querySelector('img').alt;
    }

    set description(value) {
        this.shadowRoot.querySelector('.card-text').textContent = value;
    }

    get description() {
        return this.shadowRoot.querySelector('.card-text').textContent;
    }

    set url(value) {
        this.shadowRoot.querySelector('a').href = value;
    }

    get url() {
        return this.shadowRoot.querySelector('a').href;
    }

    set image(value) {
        return this.shadowRoot.querySelector('img').src = value;
    }

    get image() {
        return this.shadowRoot.querySelector('img').src;
}

    set author(value) {
        return this.shadowRoot.querySelector('.author').textContent = value;
    }

    get author() {
        return this.shadowRoot.querySelector('.author').textContent;
    }

    set date(value) {
        return this.shadowRoot.querySelector('.date').textContent = value;
    }

    get date() {
        return this.shadowRoot.querySelector('.date').textContent;
    }
}
// Register the custom element
customElements.define('project-card', ProjectCard);
