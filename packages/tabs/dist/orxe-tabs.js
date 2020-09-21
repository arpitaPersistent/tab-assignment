var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tabs-css';
let OrxeTabs = class OrxeTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'orxe-tabs';
        this.orientation = 'horizontal';
    }
    setInitialAttributes() {
        this.setAttribute('id', `${this.name}`);
        this.setAttribute('role', 'tablist');
        this.setAttribute('aria-orientation', this.orientation);
    }
    firstUpdated() {
        this.requestUpdate();
        this.setInitialAttributes();
    }
    render() {
        return html `
      <div class="tab"><slot></slot></div>
    `;
    }
};
OrxeTabs.styles = styles;
__decorate([
    property({ type: String, reflect: true, attribute: 'name' }),
    __metadata("design:type", Object)
], OrxeTabs.prototype, "name", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'orientation' }),
    __metadata("design:type", Object)
], OrxeTabs.prototype, "orientation", void 0);
OrxeTabs = __decorate([
    customElement('orxe-tabs')
], OrxeTabs);
export default OrxeTabs;
