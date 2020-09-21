import { html, customElement, LitElement, property } from 'lit-element';
import itemStyles from './tab-item-css';

import"@orxe-components/icons";
import"@orxe-components/icon"; 


@customElement('orxe-tab-item')
export default class OrxeTabItem extends LitElement {
  /**
   *
   * @memberof OrxeTabItem
   * This is used to give the ischip
   */
  @property({ type: Boolean, reflect: true, attribute: 'chip' })
  isChip = false;
  /**
   *
   * @memberof OrxeTabItem
   * This is used to give the activa value of a tab
   */
  @property({ type: Boolean, reflect: true, attribute: 'active' }) 
  active = false;
  /**
   *
   * @memberof OrxeTabItem
   * This is used to give the disabled property of a tab
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled' }) 
  disabled = false;
  /**
   *
   * @memberof OrxeTabItem
   * This is used to give the icon of a tab
   */
  @property({ type: String, reflect: true, attribute: 'icon' }) 
  icon = '';  

  /**
   * Implement `firstUpdated` for the setting accessibility variables adding event listner.
   */
  firstUpdated() {   
    //this.isChip = this.hasAttribute('isChip'); 
    this.requestUpdate();
    this.setAttribute('role', 'tab');
    if(this.hasAttribute('disabled')) {
      this.setAttribute('tabIndex', '-1');
    } else {
      this.setAttribute('tabIndex', '0');
    }
     this._linkPanels();
    this.addEventListener('keydown',this._onClick);
    this.addEventListener('resize',this._onClick);
  }

   /**
   * This method render the tab item'
   */
  render() {
      return html`<div class="${this.isChip ? 'chip-item' : 'tab-item'}">
      ${this.renderIcon()} ${this.renderTitle()} 
      </div>`;
  }

   /**
   * This method render the icon if the icon slot is given'
   */
  renderIcon() {
    let result = html ``;
    if (this.querySelector('[slot=tab-item-icon]')) {
        result = html `
    <div class="tab-item-icon">   
    <orxe-icon icon="ic-${this.icon}" type="small" size="small"></orxe-icon>
    </div>
  `;
    }
    return result;
  }
   /**
   * This method render the Label of tab'
   */
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

  /**
   * This method is used to select the first tab by default is no selection is given'
   */
  _linkPanels() {
    const tabs = this._allTabs();    
    if (tabs) {
      let selectedTab;      
      tabs.forEach(tab => { 
        if(tab.hasAttribute('active')) selectedTab =  tab; 
        else if(tabs[0].hasAttribute('disabled')) selectedTab = tabs[1]; 
        else selectedTab = tabs[0]; 
      });
      
      if (selectedTab)
      this._selectTab(selectedTab);
    }
    
  }
  
  /**
   * This method is used to get all the tab item'
   */
  _allTabs() {
    if(this.parentElement)
      return Array.from(this.parentElement.querySelectorAll('orxe-tab-item'));
  }   
  /**
   * This method is used to remove select property from all tab'
   */   
  reset() {
    const tabs = this._allTabs();
    if(tabs) {
      tabs.forEach((tab) => {       
        if( tab.hasAttribute('active'))  tab.removeAttribute('active');
      });
    }        
  }

  /**
   * This method is used to add select property for given tab'
   */
  _selectTab(newTab) {    
      if(newTab.shadowRoot) {
        newTab.setAttribute('active', true);
      }  else if (newTab.parentElement) {
        newTab.parentElement.setAttribute('active', true);
      } 
  }

  /**
   * This method is called for event listner and reset and add selected property for select tab'
   */
  _onClick(event) {  
    if(event.code=='Enter' || !event.code || event.code=='Space') {
      this.reset();  
      this._selectTab(event.target);
    }
  }

  static styles = itemStyles;
}