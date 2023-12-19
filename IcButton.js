class IcButton extends HTMLElement {
    connectedCallback() {
        this.textContent = "I See Button";
    }
}

customElements.define("ic-button", IcButton);
