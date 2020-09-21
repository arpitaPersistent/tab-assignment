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
import itemStyles from './tab-item-css';
let OrxeTabItem = class OrxeTabItem extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
        this.disabled = false;
        this.icon = '';
        this.isChip = false;
    }
    firstUpdated() {
        this.isChip = this.hasAttribute('isChip');
        this.requestUpdate();
        this.setAttribute('role', 'tab');
        if (this.hasAttribute('disabled')) {
            this.setAttribute('tabIndex', '-1');
        }
        else {
            this.setAttribute('tabIndex', '0');
        }
        this._linkPanels();
        this.addEventListener('keydown', this._onClick);
        this.addEventListener('resize', this._onClick);
    }
    render() {
        return html `<div class="${this.isChip ? 'chip-item' : 'tab-item'}">
      ${this.renderTitle()} 
      </div>`;
    }
    renderTitle() {
        let result = html ``;
        if (this.querySelector('[slot=tab-item-label]')) {
            result = html `
        <div class="tab-item-label" @click=${this._onClick}>
        <slot name="tab-item-label"></slot>
        </div>
      `;
        }
        return result;
    }
    _linkPanels() {
        const tabs = this._allTabs();
        if (tabs) {
            let selectedTab;
            tabs.forEach(tab => {
                if (tab.hasAttribute('active'))
                    selectedTab = tab;
                else if (tabs[0].hasAttribute('disabled'))
                    selectedTab = tabs[1];
                else
                    selectedTab = tabs[0];
            });
            if (selectedTab)
                this._selectTab(selectedTab);
        }
    }
    _allTabs() {
        if (this.parentElement)
            return Array.from(this.parentElement.querySelectorAll('orxe-tab-item'));
    }
    reset() {
        const tabs = this._allTabs();
        if (tabs) {
            tabs.forEach((tab) => {
                if (tab.hasAttribute('active'))
                    tab.removeAttribute('active');
            });
        }
    }
    _selectTab(newTab) {
        if (newTab.shadowRoot) {
            newTab.setAttribute('active', true);
        }
        else if (newTab.parentElement) {
            newTab.parentElement.setAttribute('active', true);
        }
    }
    _onClick(event) {
        if (event.code == 'Enter' || !event.code || event.code == 'Space') {
            this.reset();
            this._selectTab(event.target);
        }
    }
};
OrxeTabItem.styles = itemStyles;
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'active' }),
    __metadata("design:type", Object)
], OrxeTabItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'disabled' }),
    __metadata("design:type", Object)
], OrxeTabItem.prototype, "disabled", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'icon' }),
    __metadata("design:type", Object)
], OrxeTabItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'isChip' }),
    __metadata("design:type", Object)
], OrxeTabItem.prototype, "isChip", void 0);
OrxeTabItem = __decorate([
    customElement('orxe-tab-item')
], OrxeTabItem);
export default OrxeTabItem;
