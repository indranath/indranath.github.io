class IcButton extends HTMLElement {

    constructor() {
        super();
        this.text = "Ok";
    }

    connectedCallback() {
        console.log('connectedCallback');

        const shadow = this.attachShadow({mode: 'open'});

        shadow.innerHTML = `
            <div>Button:${this.text}</div>
        `;

    }

    disconnectedCallback() {}

    adoptedCallback() {}

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        console.log('attributeChangedCallback');

        if (oldValue === newValue)
            return;

        this[property] = newValue;
    }
}

customElements.define("ic-button", IcButton);
